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


function mergeArr(arr1, arr2) {
    const newArr = [];
    while(arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            newArr.push(arr1[0]);
            arr1.splice(0, 1);
        } else {
            newArr.push(arr2[0]);
            arr2.splice(0, 1);
        }
    }
    return newArr.concat(arr1, arr2);
}
console.log(mergeArr([1, 1, 2, 3], [2, 2, 3, 4, 5]));