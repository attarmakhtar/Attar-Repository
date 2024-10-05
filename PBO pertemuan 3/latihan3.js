class Sensor{
    constructor (nama, lokasi){
        this.nama = nama
        this.lokasi = lokasi
        this._status = "mati"
    }

    aktifkan(){
        this._status = "aktif"
        return `Sensor ${this.nama} di lokasi ${this.lokasi} telah diaktifkan`
    }

    nonaktifkan(){
        this._status = "mati"
        return ` Sensor ${this.nama} di lokasi ${this.lokasi} telah dinonaktifkan`
    }

    getstatus(){
        return `Sensor ${this.nama} di lokasi ${this.lokasi} sedang dalam kondisi ${this._status}`
    }
}

class SensorLaut extends Sensor {
    constructor(nama, lokasi, pH, suhu, salinitas){
        super(nama, lokasi)
        this.pH = pH
        this.suhu = suhu
        this.salinitas = salinitas
    }
    aktifkan(){
        return `${super.aktifkan()}. ${super.getstatus()}. Telah mengirim data, pH: ${this.pH} , Suhu: ${this.suhu}° celcius, dan Salinitas: ${this.salinitas} ppt`
    }

}

const sensorXYZ = new SensorLaut("XYZ", "anyer", 7, 45, 30)
console.log (sensorXYZ.aktifkan())