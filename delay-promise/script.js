
    function delay(ms) {
        return new Promise (function (resolve, reject) {
            setTimeout(() => {
                if(ms == 3000){
                    resolve();
                }
                else{
                    reject();
                }
            }, ms)
        })
        }
        delay(3000).then(() => alert('runs after 3 seconds'));
