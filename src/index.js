import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherServices from './Weather_Services'

let button = document.getElementById("btn");
let clearFields = ()=>{
    document.getElementById("location").value = "";
    document.getElementById("showErrors").value = "";
    document.getElementById("showtemperature").innerHTML = "";
    document.getElementById("showhumidity").innerHTML = "";
    document.getElementById("showCountry").innerHTML ="";

}
button.onclick = function () {
    let location = document.getElementById("location").value;
    clearFields();
    (async function () {
        const response = await WeatherServices.getWeather(location);
        displayElements(response)
    })();

    function displayElements(resp) {
        if (resp.main) {
            document.getElementById("showtemperature").innerHTML = `The temperature in ${location} is ${(resp.main.temp - 273.15) * 9 / 5 + 32}F`
            document.getElementById("showhumidity").innerHTML = `The humidity in ${location} is ${resp.main.humidity}%`
            document.getElementById("showCountry").innerHTML = `Country: ${resp.sys.country}`
        }else{
            document.getElementById("showErrors").innerHTML = resp
        }

    }
};