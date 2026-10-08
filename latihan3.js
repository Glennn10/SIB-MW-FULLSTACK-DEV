const user = {
body: { 
    name: "Wildan",
    age: 23,
    major: 'Teknik Informatika'
}
};
const name = user.body.name;
const age = user.body.age;
console.log("Name: " + name);
console.log("Age: " + age);
console.log("Major: " + user.body.major);

