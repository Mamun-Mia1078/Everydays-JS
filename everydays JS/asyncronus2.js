const one = () => {
    console.log('This is Task One');
};

    const loading = () => {
        console.log("two. Data Loading");
        
    }
    const two = () => {
        setTimeout(loading,2000)
    }

const three = () => {
    console.log('This is Task Three');
};
const four = () => {
    console.log('This is Task four');
};
const five  = () => {
    console.log('This is Task five');
};
const six = () => {
    console.log('This is Task six');
};
one();
two();
three();
four();
five();
six();
// number two is loading 2 sec in the output 