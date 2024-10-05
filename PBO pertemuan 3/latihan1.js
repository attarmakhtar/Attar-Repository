const orang = {
    nama: "fadli",
    alamat: "sukabumi",
    usia: 19,
    jk:"laki-laki",
    kendaraan: {
        mobil1: "pajero",
        mobil2: "lamborghini",
        motor: "Harley",
        pesawat: "Boeing"
    }
}

console.log(orang.nama)
console.log(orang.alamat)
console.log(orang.usia)
console.log(orang.jk)

console.log(`Nama saya ${orang.nama}, saya berasal dari ${orang.alamat}, berjenis kelamin ${orang.jk}, dan sekarang berusia ${orang.usia} tahun`)

document.getElementById("objek").innerHTML = `Nama saya ${orang.nama}, saya berasal dari ${orang.alamat}, berjenis kelamin ${orang.jk}, dan sekarang berusia ${orang.usia} tahun`

console.log(orang.kendaraan.mobil1)
console.log(orang.kendaraan.mobil2)
console.log(orang.kendaraan.motor)
console.log(orang.kendaraan.pesawat)

const mahasiswa = {
    namaDepan: "Fadli",
    namaBelakang: "Kurnia",
    namaLengkap: function(){
        return `${this.namaDepan} ${this.namaBelakang}`
    }
}

console.log (mahasiswa.namaLengkap())

function mahasiswaSIK(nama, kelas, angkatan){
    this.nama = nama,
    this.kelas = kelas,
    this.angkatan = angkatan
}

const fadli = new mahasiswaSIK("fadli kurnia", "B", 2023)
const annisa = new mahasiswaSIK("nur annisa", "B", 2023)
const nelita = new mahasiswaSIK("melita maharani", "B", 2023)

console.log(nelita.nama)
console.log(nelita.kelas)
console.log(nelita.angkatan)

console.log(annisa.nama)
console.log(annisa.kelas)
console.log(annisa.angkatan)
