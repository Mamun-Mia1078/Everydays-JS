const ageNew = 17;
try{
    if(ageNew < 18){
        throw new Error('you are too young');
    }
    else{
        console.log('you are adult');
    }
   
    } catch(err){
        console.log(err);
}