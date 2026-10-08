const user = {
    name: "Teknik Informatika",
    major: "TI",
};

const newUser = {
    ...user,
    age: 20,
};

console.log("Nama: " + newUser.name);
console.log("Major: " + newUser.major);
console.log("Usia: " + newUser.age);
