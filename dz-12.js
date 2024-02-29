function PromiseRace(promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(data => resolve(data), data => reject(data));
        }
    });
};

PromiseRace([Promise.reject(1), Promise.resolve(2), Promise.resolve(3)]).then(console.log);