(function(global) {
    global.delay = function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
})(window);