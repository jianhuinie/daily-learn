function reduceArr(arr) {
    let i = 0;
    const resultArr = [];
    resultArr[i] = [arr[0]];

    arr.reduce((pre, cur) => {

        if(cur - pre === 1) {
            resultArr[i].push(cur);
        } else {
            resultArr[++i] = [cur];
        }
        return cur;
    });

    return resultArr;
}
// console.log(reduceArr([1, 2, 3, 5, 6, 8]));


function reduceArr1(arr) {
    let i = 0;
    const resultArr = [];
    resultArr[i] = [arr[0]];
    const len = arr.length;

    for(let j = 0; j < len - 1; j++) {
        if (arr[j + 1] - arr[j] === 1) {
            resultArr[i].push(arr[j + 1]);
        } else {
            resultArr[i] = [arr[j + 1]];
        }
    }

    return resultArr;
}
console.log(reduceArr([1, 2, 3, 5, 6, 8]));