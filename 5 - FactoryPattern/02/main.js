/**
 * Real world example
 * Consider, you are building a house and you need doors.
 * It would be a mess if every time you need a door, you put on your carpenter clothes
 * and start making a door in your house. Instead you get it made from a factory.
 */

const doorFactory = require('./DoorFactory');
const door = doorFactory.makeDoor(100, 200);

console.log(door.toString());
