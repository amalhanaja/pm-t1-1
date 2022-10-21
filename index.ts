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

