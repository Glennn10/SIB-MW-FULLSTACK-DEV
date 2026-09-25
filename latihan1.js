///Conditional///
const name = "Teknik Informatika";
const age = 20;
const isStudent = false;

console.log("Nama: " + name);
console.log("Usia: " + age);
console.log("Apakah mahasiswa? " + isStudent);

const greeting = `Halo, nama saya ${name} dan saya berusia ${age} tahun.`;
console.log(greeting);

///Looping///
for (let i = 1; i <= 5; i++) {
    console.log("Perulangan ke-: " + i);
}

let count = 1;

while (count <= 5) {
    console.log("Perulangan ke-: " + count);
    count++;
}

///function///
const year = 2024;
const bod = 2000;

const ageResult = year - bod;

console.log("Usia: " + ageResult);

function calculateAge(year, bod) {
    return year - bod;
}

const age2 = calculateAge(2024, 2000);
console.log("Usia: " + age2);
