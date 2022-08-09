function modifier(strins, ... values){
    const m = strins.reduce((prev, current)=>{
        return prev+ current + (values.length?"Mr."+values.shift():"")
    }, "")
    return m ; 
}
var player1 = "Muzammel Hoque Mamun";
var player2 = "Sakib al Hasan ";
console.log(modifier`we have only ${player1} and ${player2} is out `);