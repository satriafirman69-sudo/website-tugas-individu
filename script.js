// ==========================================
// TUGAS INDIVIDU 2
// PENGOLAHAN DATA NILAI MAHASISWA
// ==========================================


// ARRAY OF OBJECT
const dataNilai = [
    {
        no: 1,
        mataKuliah: "Pengembang Berbasis Web",
        nilai: "A",
        bobot: 4.00
    },
    {
        no: 2,
        mataKuliah: "Manajemen Keamanan Siber",
        nilai: "B+",
        bobot: 3.50
    },
    {
        no: 3,
        mataKuliah: "Sistem Enterprise",
        nilai: "A-",
        bobot: 3.75
    },
    {
        no: 4,
        mataKuliah: "Manajemen Sistem Informasi",
        nilai: "B",
        bobot: 3.00
    }
];


// FUNCTION 1
// Menghitung rata-rata nilai
function hitungRataRata() {

    let total = 0;

    dataNilai.forEach(function(data) {
        total = total + data.bobot;
    });

    return total / dataNilai.length;
}


// FUNCTION 2
// Mencari mata kuliah berdasarkan nilai
function cariNilai(nilaiDicari) {

    const hasil = [];

    for (const data of dataNilai) {

        if (data.nilai === nilaiDicari) {
            hasil.push(data);
        }

    }

    return hasil;
}


// MENAMPILKAN DATA NILAI
console.log("=================================");
console.log("       DATA NILAI MAHASISWA");
console.log("=================================");

dataNilai.forEach(function(data) {

    console.log(
        data.no + ". " +
        data.mataKuliah +
        " | Nilai: " +
        data.nilai +
        " | Bobot: " +
        data.bobot
    );

});


// MENGHITUNG RATA-RATA
const rataRata = hitungRataRata();

console.log("");
console.log("=================================");
console.log("       HASIL PERHITUNGAN");
console.log("=================================");

console.log(
    "Rata-rata bobot nilai: " +
    rataRata.toFixed(2)
);


// OPERATOR PERBANDINGAN DAN LOGIKA
if (rataRata >= 3.50 && rataRata <= 4.00) {

    console.log(
        "Keterangan: Nilai akademik sangat baik."
    );

} else if (rataRata >= 3.00 && rataRata < 3.50) {

    console.log(
        "Keterangan: Nilai akademik baik."
    );

} else {

    console.log(
        "Keterangan: Perlu meningkatkan prestasi."
    );

}


// MENCARI NILAI A
console.log("");
console.log("=================================");
console.log("     MATA KULIAH DENGAN NILAI A");
console.log("=================================");

const hasilNilaiA = cariNilai("A");

if (hasilNilaiA.length > 0) {

    hasilNilaiA.forEach(function(data) {

        console.log(
            data.mataKuliah +
            " - Nilai " +
            data.nilai
        );

    });

} else {

    console.log("Tidak ada mata kuliah dengan nilai A.");

}


// DATA IP SEMESTER DAN IPK
const dataIPK = [
    {
        semester: 1,
        ipSemester: 3.75,
        ipkKumulatif: 3.65
    },
    {
        semester: 2,
        ipSemester: 3.60,
        ipkKumulatif: 3.50
    }
];


// MENAMPILKAN DATA IPK
console.log("");
console.log("=================================");
console.log("       DATA IP SEMESTER & IPK");
console.log("=================================");

for (const data of dataIPK) {

    console.log(
        "Semester " +
        data.semester +
        " | IP Semester: " +
        data.ipSemester +
        " | IPK: " +
        data.ipkKumulatif
    );

}


// MEMBANDINGKAN IP SEMESTER
console.log("");
console.log("=================================");
console.log("       PERBANDINGAN IP");
console.log("=================================");

if (dataIPK[1].ipSemester > dataIPK[0].ipSemester) {

    console.log(
        "IP Semester 2 lebih tinggi dari Semester 1."
    );

} else if (dataIPK[1].ipSemester < dataIPK[0].ipSemester) {

    console.log(
        "IP Semester 2 lebih rendah dari Semester 1."
    );

} else {

    console.log(
        "IP Semester 1 dan Semester 2 sama."
    );

}


// SELESAI
console.log("");
console.log("=================================");
console.log("   DATA BERHASIL DIOLAH");
console.log("=================================");