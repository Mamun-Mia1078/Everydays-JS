// const user = {
//     id: 343, 
//     name: "Sakib", 
//     age : 35
// };
//   const {name:title} = user;
//   console.log(title);

// nested distructure.... 
  const user = {
    id: 343, 
    name: "Sakib", 
    age : 35, 
    
    education: {
        degree: "Master ",
    }
};
const {
    education: {degree:cse}
} = user; 
console.log(cse);