class Flyweight {
    constructor(user, completed) {
        this.user = user;
        this.completed = completed;
    }
}

const FlyweightFactory = (() => {
    const flyWeights = {};

    const get = (user, completed) => {
        if (!flyWeights[user + completed])
            flyWeights[user + completed] = new Flyweight(user, completed);


        return flyWeights[user + completed];
    };
    const getCount = () => {
        let count = 0;
        for (f in flyWeights)
            count++;
        return count;
    };

    return {
        get,
        getCount
    };
})();

module.exports = FlyweightFactory;
