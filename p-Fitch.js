const remoteData = fetch('https://jsonplaceholder.typicode.com/posts');
console.log(remoteData);
remoteData.then((data) => {
    console.log(data);
})