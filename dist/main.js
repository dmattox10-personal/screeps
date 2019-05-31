// maritime Harvesters
// wartime Harvesters
// upgraders for both
// builders for both
// explorers with claim component
// Medic
// Smasher (POWER)
// scout (SPEED) with CLAIM
// Hauler
// balanced fighter
// PennDOT
// Engineer

var scheduler = require('scheduler')
var cleanup = require('cleanup')
var harvesterV4 = require('harvesterV4')
var upgraderV3 = require('upgraderV3')
var mapper = require('mapper')
var tools = require('tools')
const values = require('values')

let log = console.log.bind(console)

module.exports.loop = function () {
// Do EVERYTHING per room
tools.setup()
// RESET TO HUNDRED TICKS AFTER TESTING
// Use the colony memory object here (rewrite)
	if (scheduler.tenTicks()) {
		cleanup.deadCreeps()
		cleanup.preventShardStorage()
		for(var colony_name in Game.rooms) {
			for(var spawn_name in Game.spawns) {
				var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester')
				var upgraders  = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader')
				//var builders   = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder')
				if (harvesters.length < 5) {
					harvesterV4.spawn(colony_name, spawn_name)
				}
				if (upgraders.length < 5) {
					upgraderV3.spawn(spawn_name)
				}
			}
		}
	} 
	
	if (scheduler.tenTicks) {
		/*
		for (var x = 0; x < values.ROOM_WIDTH; x++) {
			for (var y = 0; y < values.ROOM_HEIGHT; y++) {
				
			}
		}
		*/
		for (var room in Game.rooms) {
			
		}
	}
	
	// This cannot be scheduled !!!
	for (var i = 0; i < Memory.colonies.length; i++) {
		let sources = Memory.colonies[i].sources
		let room = Memory.colonies[i].name
		let source
		for (var i = 0; i < Memory.creeps.length; i++) {
			if (Memory.creeps[i].room === room) {
				if(creep.memory.role === 'harvester') {
					if (Memory.creeps[i].id % 2 === 0) {
						source = sources[0]
					}
					else {
						source = sources[1]
					}
					harvesterV4.run(creep, source)
				}
			}
		}
	}
	for (var room_name in Game.rooms) {
	for(var name in Game.creeps) {
		var creep = Game.creeps[name];
		// TODO use colony source map
		let sources = creep.room.find(FIND_SOURCES)
		
		if(creep.memory.role == 'upgrader') {
			upgraderV3.run(creep)
		}
		/*
		if(creep.memory.role == 'builder') {
			roleBuilder.run(creep);
			}
			*/
		}
	}
} //END OF GAME LOOP
