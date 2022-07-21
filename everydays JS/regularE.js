const a = ' There is a problem '
a.match(/[aox]/); // case sensetive match korbena . global korle korbe
a.match(/[aox]/g);
console.log(a);
a.match(/(ab|bc)/g) // ekhane ab, bc ke khujbe 
a.match(/[^abc]/) // abc chara baki charactergulu ke show korbe 
// eirokom aro onekgulu method ache 