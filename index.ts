/**
 * Diketahui rambu-rambu lalu lintas yang terdiri dari 3 warna yaitu merah, kuning, dan hijau. Jika warna
 * merah maka muncul tulisan berhenti, warna kuning maka muncul tulisan hati-hati, dan warna hijau
 * muncul tulisan jalan.
 * Dari kasus di atas, buatlah sebuah program menggunakan pemrograman typescript jika warna awal
 * nya adalah hijau.
 * Kumpulkan:
 * 1. Kode programnya!
 * 2. bukti screenshootnya!
 */

const showText = (trafficLightColor: string): void => {
    const colorLowerCase = trafficLightColor.toLowerCase();
    let textToShow: string = "";
    switch (colorLowerCase){
        case "merah":
            textToShow = "Berhenti";
            break;
        case "kuning": 
            textToShow = "Hati-hati";
            break;
        case "hijau":
            textToShow = "Jalan"
            break;
        default:
            textToShow = "Unknown color"
            break;
    }
    console.log(textToShow);
}

showText("hijau")