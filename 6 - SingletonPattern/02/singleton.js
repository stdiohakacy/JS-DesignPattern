let Singleton = (function() {
    let instance;

    const createInstance = () => {
        return Object();
    };

    return {
        getInstance: function() {
            if (!instance)
                instance = createInstance();

            return instance;
        }
    };
})();

module.exports = function() {
    return Singleton.getInstance();
};
