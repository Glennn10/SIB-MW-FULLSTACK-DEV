///rest parameter menggunakan semua parameter yang dikirimkan ke dalam sebuah array, sehingga kita bisa mengaksesnya dengan menggunakan array. Rest parameter ditandai dengan tiga titik (...) diikuti dengan nama parameter.///
function sum(...numbers) {
    let hasil = 0;

    for (const number of numbers) {
        hasil += number;
    }
    return hasil;
}

console.log(sum(1, 2, 3, 4, 5));