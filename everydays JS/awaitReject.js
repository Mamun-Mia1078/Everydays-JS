const aPromiseRejection = new Promise((resolve, reject) => {
    setTimeout(() => {
       if(true) {
          reject('This is a reject!');
       } else {
          resolve('call me Resolve!');
       }
    }, 5000)
 })
 const promiseWithErrorHandle = async() => {
    try {
       const data = await aPromiseRejection;
       console.log(data);
    } catch(err) {
       console.log(err);
    }
 }
 promiseWithErrorHandle()