const Door = require('./Door');

const DoorFactory = {
    makeDoor: (width, height) => new Door(width, height)
};

module.exports = DoorFactory;
