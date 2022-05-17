const promiseData = control => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(control){
                resolve('A simple sucess data');
            }
            else {
                reject('This is eror function')
            }
        },3000)
    })
}
promiseData(true)
.then((data) =>{
    console.log(data);
})
// for promise reject
promiseData(false)
.then((data) =>{
    console.log(data);
})
.catch((err) =>{
    console.log(err);
})