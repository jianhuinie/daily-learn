
Promise.prototype._allSettled = function (promiseArr) {
    return Promise(resolve => {
        const len = promiseArr.length;
        const resultArr = [];
        let count = len;

        for(let i = 0; i < len; i++) {
            Promise[i].then(res => {
                resultArr[i].push({
                    status: 'fullfilled',
                    value: res
                });
            },err => {
                resultArr[i].push({
                    status: 'rejected',
                    reason: err
                });
            }).finally(() => {
                if (!--count) {
                    resolve(resultArr);
                }
            });
        }
    });
}