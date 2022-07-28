var myMap = new Map()
myMap.set('key1', "Bangladesh")
myMap.set('key2', "Bhutan")
myMap.set('key3', "Nepal")
myMap.set('key4', "China")
myMap.set('key5', "Korea")
myMap.set('key6', "Iran")
myMap.delete("key1")
myMap.delete("key6")
myMap.get("key4")

// for (let myValue of myMap.values()){
//     console.log(myValue);
// }
myMap.set("Key7","Thailand")
if(myMap.has("Key1")){
    console.log("YES");
}else{
    console.log("NO");
}