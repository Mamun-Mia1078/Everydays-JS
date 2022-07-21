const userAnd = {
    name: 'Muzammel Hoque Mamun '
 }
 const userAnd1= {
     age: '23'
 }
 userAnd.name && console.log(`Name is: ${userAnd.name}`);
 (userAnd.name ||userAnd1.age) && console.log(`Find age: ${userAnd.userAnd1 || userAnd1.age}`);
 
