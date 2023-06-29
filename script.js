const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date ();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10 ) hr = '0' + hr;
    if (min < 10 ) min = '0' + min;
    if (sec < 10 ) sec = '0' + sec;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
}); 

const mode = document.getElementById ('icon')

mode.addEventListener('click',() =>{
    const form = document.getElementById('kk');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        form.classList.add('dark');

        return;
    }

    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');
    form.classList.remove('dark');

});
