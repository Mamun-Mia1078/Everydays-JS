function welcomeText(name){
    console.log('Welcome Mr.'+name);
    return function options(menu){
        console.log('do you like ' + menu );
    }
}
welcomeText('Muzammel Hoque Mamun')('Tea or Coffe')