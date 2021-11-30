function batchRequests(n) {
    let count = 0;
    const requestQueue = [];

    return function send(url , params) {
        if(url && params) {
            requestQueue.push({
                url,
                params
            });
        }

        if(count >= 0 && count < n) {
            const { url, params} = requestQueue.shift;

            ajax(url, params)
                .then(() => {}, () => {})
                .finally(() => {
                    count--;
                    send();
                });

            count++;
        }
    }

}