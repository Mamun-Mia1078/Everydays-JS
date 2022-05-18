
const aPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
       if(true) {
          resolve('Ths is Resolve');
       } else {
          reject('This is Reject');
       }
    }, 5000)
 })
 const promiseHandle = async() => {
    const data = await aPromise;
    console.log(data);
 }
 promiseHandle()