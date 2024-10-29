function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

delay(3000).then(() => console.log('Executed after 3 seconds'));

let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);

//нет его можно делать только один раз

//В первом варианте .catch(f2) обработает любую ошибку, произошедшую как в самом промисе, так и в f1.
//Во втором варианте then(f1, f2) обработает ошибку только в самом промисе (до вызова f1), но не в f1 или последующих шагах.