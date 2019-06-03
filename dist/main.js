var scheduler = require('scheduler')
var cleanup = require('cleanup')
var harvesterV4 = require('harvesterV4')
var upgraderV4 = require('upgraderV4')
var foremanV1 = require('foremanV1')
//var mapper = require('mapper')
var tools = require('tools')
var dot = require('dotV1')
const values = require('values')

let log = console.log.bind(console)

module.exports.loop = function () {
	
	tools.setup()
	// Check for dead creeps and spawn new ones if necessary
	if (scheduler.tenTicks()) {
		cleanup.deadCreeps()
		cleanup.preventShardStorage()
		for (var i = 0; i < Memory.colonies.length; i++) {
			let spawn_name = Memory.colonies[i].spawns[0].name // Need to do 'per spawn'
			let colony_name = Memory.colonies[i].name
			var foremen = _.filter(Game.creeps, (creep) => creep.memory.role == 'foreman')
			var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester')
			var upgraders  = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader')
			var dotR = _.filter(Game.creeps, (creep) => creep.memory.role == 'dotR')
			var dotS = _.filter(Game.creeps, (creep) => creep.memory.role == 'dotS')
			//var builders   = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder')
			
			if (foremen.length < 1) {
				foremanV1.spawn(spawn_name)
			}
			if (harvesters.length < 3) {
				Memory.colonies[i].creepID++
				harvesterV4.spawn(colony_name, spawn_name, Memory.colonies[i].creepID)
			}
			if (upgraders.length < 3) {
				Memory.colonies[i].creepID++
				upgraderV4.spawn(colony_name, spawn_name, Memory.colonies[i].creepID)
			}
			/*
			if (dotR.length < 1) {
				dot.spawnRoom(colony_name, spawn_name)
			}
			if (dotS.length < 4) {
				Memory.colonies[i].creepID++
				dot.spawnRoad(colony_name, spawn_name, Memory.colonies[i].creepID)
			}
			*/
		}
	} 
	// Running creeps
	// This cannot be scheduled !!!
	for (var i = 0; i < Memory.colonies.length; i++) {
		let room = Memory.colonies[i].name
		let source
		let sources
		for (var name in Game.creeps) {
			var creep = Game.creeps[name]
			sources = creep.room.find(FIND_SOURCES)
			if (creep.memory.room === room) {
				if (creep.memory.id % 2 === 0) {
					source = sources[0]
				}
				else {
					source = sources[1]
				}
			}
		}
		for (var name in Game.creeps) {
			var creep = Game.creeps[name]
			if (creep.memory.role == 'foreman') {
				sources = creep.room.find(FIND_SOURCES)
			}
		}
		for (var name in Game.creeps) {
			var creep = Game.creeps[name]
			if (creep.memory.room === room) {
				if (creep.memory.id % 2 === 0) {
					source = sources[0]
				}
				else {
					source = sources[1]
				}
			}
			if (creep.memory.role === 'harvester') {
				harvesterV4.run(creep, source)
			}
			if (creep.memory.role === 'upgrader') {
				upgraderV4.run(creep, source)
			}
		}
	}

	// Mapping
	for (var i = 0; i < Memory.colonies.length; i++) {
		let room = Memory.colonies[i].name
		let col = Memory.colonies[i].mapColumn
		let row = Memory.colonies[i].mapRow
		let terrain = new Room.Terrain(room)
		if (col === 50) {
			Memory.colonies[i].mapColumn = 0
			Memory.colonies[i].mapRow++
			return
		}
		if (row === 50) {
			return
		}
		if (Memory.colonies[i].terrain[col][row] === '3') {
			const tile = terrain.get(col, row)
			const weight =
			tile === TERRAIN_MASK_WALL  ? '2' :
			tile === TERRAIN_MASK_SWAMP ? '1' :
										  '0'
			Memory.colonies[i].terrain[col][row] = weight
			log(Memory.colonies[i].terrain[col][row])
			Memory.colonies[i].mapColumn++
		}
	}

	// Building
	for (var i = 0; i < Memory.colonies.length; i++) {
		for (var j = 0; j < Memory.colonies[i].spawns.length; i++) {
			let spawn_name = Memory.colonies[i].spawns[j].name
			let room_name = Memory.colonies[i].name
			let sources = Game.spawns[spawn_name].room.find(FIND_SOURCES)
			if (Memory.colonies[i].spawns[j].roadSource1Path.length < 1) {
				let source = sources[0]
				Memory.colonies[i].spawns[j].roadSource1Path = Game.spawns[spawn_name].pos.findPathTo(source.pos)
			}
			if (Memory.colonies[i].spawns[j].roadSource2Path.length < 1) {
				let source = sources[1]
				Memory.colonies[i].spawns[j].roadSource2Path = Game.spawns[spawn_name].pos.findPathTo(source.pos)
			}
			if (Memory.colonies[i].spawns[j].roadRoomConPath1.length < 1) {
				Memory.colonies[i].spawns[j].roadRoomConPath1 = Game.rooms[room_name].controller.pos.findPathTo(sources[0].pos)
				Memory.colonies[i].spawns[j].roadRoomConPath2 = Game.rooms[room_name].controller.pos.findPathTo(sources[1].pos)
			}
		}
	}
} //END OF GAME LOOP
