function __New(fn) {
    var newObj = Object.create(fn.prototype);
    // var newObj = {};
    // newObj.__proto__ = fn.prototype;
    var returnObj = fn.call(newObj);
    return returnObj
}

Array.prototype._map = function(fn) {
    const arr = this;
    return arr.reduce((pre, cur, index) => [...pre, fn(cur, index)], []);
}

Array.prototype._flat = function() {
    const arr = this;
    return arr.reduce((pre, cur) =>[...pre, Array.isArray(cur) ? this._flat(cur) : cur], []);
}

function _setInterval(fn, delay) {
    function _interval() {
        setTimeout(_interval, delay);
        fn;
    }

    setTimeout(_interval, delay);
}