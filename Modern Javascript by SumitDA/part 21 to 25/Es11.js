window.setTimeout(() => console.log("hello "), 100);  // for Browser


// global.setTimeout(() => console.log("hello "), 100); // run only node 





/* optional Chaining
const language = {
    name: 'JavaScript', 
    creator: 'Brendan Eich', 
    library: {
        react:{
            company: 'Facebook '
        }
    }
};
let company = language?. library?. react?.company;
console.log(company);
*/