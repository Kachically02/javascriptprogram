const person = {name: "Onyeka", height: "30cm", country: "Nigeria"};
const myJSON = JSON.stringify(person);
document.getElementById("demo").innerHTML = myJSON;