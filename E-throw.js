const age = 17;
try{
    if(age<18){
        throw ' You are to Young';
    }
    else{
        console.log('You are Adult');
    } 
}catch(err){
    console.log(err);
}