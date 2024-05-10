const http = require("http");
const fs = require('node:fs')
const request = require('requests')

// const replaceVal = (tempval,orgval) =>{
//     let temperature = tempval.replace("{%tempval%}",orgval.main.temp)
//     .replace("{%tempmin%}",orgval.main_temp_min)
//     .replace("{%tempmax%}",orgval.main.temp_max)
//     .replace("{%location%}",orgval.name)
//     .replace("{%country%}",orgval.sys.country)
//     .replace("{%tempval%}",orgval.main);

//     return temperature;
// }   

const replaceVal = (tempval, orgval) => {
    let temperature = tempval.replace("{%tempval%}", orgval.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgval.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgval.main.temp_max);
    temperature = temperature.replace("{%location%}", orgval.name);
    temperature = temperature.replace("{%country%}", orgval.sys.country);
    temperature = temperature.replace("{%description%}", orgval.weather[0].description); // Replace with weather description

    return temperature;
};


const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=pune&appid=2dae4649870584b1c9497a9bff0c24af")

        .on("data",(chunk)=>{
            const objdata = JSON.parse(chunk)
            const arrdata = [objdata]
            const realtimedata =  arrdata.map((val)=>replaceVal(homefile,val))
            .join("")
            // console.log(realtimedata)
            res.write(realtimedata)
            
        })
        .on("end",(err)=>{
            if(err) return console.log("collections closed due to errors",err)

                console.log("end");
                res.end()
        })
    }
})

server.listen(2000,"127.0.0.1")