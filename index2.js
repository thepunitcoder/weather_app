const curdate = document.querySelector('#date')
let weathercon = document.querySelector('.weather-condition')

const tempstatus = 'clouds';

const getcurrentday = ()=>{
    let currentday = new Date();
    var weekday = new Array(7);
    weekday[0] = "sun"
    weekday[1] = "mon"
    weekday[2] = "Tue"
    weekday[3] = "Wed"
    weekday[4] = "Thu"
    weekday[5] = "Fri"
    weekday[6] = "Sat"
    var week = weekday[currentday.getDay()].toUpperCase();
    console.log(week);

    var month = new Array(12);

    month[0]  = "JAN"
    month[1]  = "FEB"
    month[2]  = "MAR"
    month[3]  = "APR"
    month[4]  = "MAY"
    month[5]  = "JUN"
    month[6]  = "JUL"
    month[7]  = "AUG"
    month[8]  = "SEP"
    month[9]  = "OCT"
    month[10] = "NOV"
    month[11] = "DEC"
        let mon = month[currentday.getMonth()]
        let date = currentday.getDate()
        let year = currentday.getFullYear()
        let hou = currentday.getHours()
        let min = currentday.getMinutes()

    curdate.innerHTML = `${week} ${date} ${mon} ${year} || ${hou}:${min}`

}
getcurrentday()