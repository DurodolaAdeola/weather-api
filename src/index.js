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
