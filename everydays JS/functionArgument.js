function CallMyName(name,callback){
    var myAge =20;
    callback(myAge);
    console.log('Yes it is Mr. ' + name);
}
function hello(age){
    console.log('my age is:' + age );
}
CallMyName('Mamun',hello);