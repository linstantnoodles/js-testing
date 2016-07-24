(function(window, undefined) {

    var Test = function () {};


    Test.prototype.greeting = function () {
        return "Hello World";
    };

    window.Test = Test;
    return Test;

})(window);
