const date = new Date();
const [day, month, year, actualDate] = [date.getDay(), date.getMonth(), date.getFullYear(), date.getDate()];
const [hours, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const Months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const endDate = new Date('12/31/2023 00:00 PM');
const miliSecond = 1000;
const miliMinute = miliSecond * 60;
const miliHour = miliMinute * 60;
const miliDay = miliHour * 24;
let timer;

function weekDay(day){
    return days[day];
}
function monthYear(month){
    return Months[month - 1];
}

function mostrarFecha(){
    let dayOfTheWeek = weekDay(day);
    let monthOfTheYear = monthYear(month+1);
    alert("Hoy es "+ dayOfTheWeek + " " + actualDate + " de " + monthOfTheYear + " del " + year + " y son las " + hours + " horas, " + minutes + " minutos con " + seconds + " segundos.");
}
function cuentaRegresiva() {
    let now = new Date();
    let distance = endDate - now;
    if(distance <= 0){
       clearInterval(timer)
       document.getElementById('tiempoRestante').innerHTML = 'Es hoy!!!Es hoy!!!'
       return;
    }
    let days = Math.floor(distance / miliDay);
    let minutes = Math.floor((distance % miliDay) / miliMinute);
    let seconds = Math.floor((distance % miliMinute) / miliSecond);
    document.getElementById('tiempoRestante').innerHTML = '<div class = "d-inline-block text-light text-center fs-3 bg-dark border border-success border-opacity-50 border-4 rounded" style = "width:20rem!important;" >' + days + '<div class = "text bg-success bg-gradient text-light rounded mb-3 fs-5">DIAS</div></div><div class = "d-inline-block text-light text-center fs-3 bg-dark border border-success border-opacity-50 border-4 rounded" style = "width:20rem!important;">' + minutes + '<div class = "bg-success bg-gradient text-light rounded mb-3 fs-5 text">MINUTOS</div></div><div class = "d-inline-block text-light text-center fs-3 bg-dark border border-success border-opacity-50 border-4 rounded" style = "width:20rem!important;">' + seconds + '<div class = "bg-success bg-gradient text-light rounded mb-3 fs-5 text">SEGUNDOS</div></div>';
}
timer = setInterval(cuentaRegresiva, 1000);