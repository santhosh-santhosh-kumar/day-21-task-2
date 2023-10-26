 var res = fetch('https://data.covid19india.org/v4/min/data.min.json');
 res.then((data)=>data.json()).then((data1)=>{
     console.log(data1)
     for(var i in data1){
        var select=document.getElementById('select')
        var opt=document.createElement('option')
        opt.innerHTML=i;
        //console.log(i)
//        console.log(data1[i])
        select.append(opt)
     }
 })
 function show1(){
 var s=document.getElementById('select')
 for(i=0;i<37;i++){
 if(s.options[i].selected){
    var n=s.options[i].value
    break;
 }

}
show(n)
 }
function show(state){
    var res = fetch("https://data.covid19india.org/v4/min/data.min.json");
    res.then((data2)=>data2.json()).then((data3)=>{
    //     console.log(data3)
    //     console.log(state)
    //     console.log("p=",data3[state].meta.population)
    //     console.log("c=",data3[state].total.confirmed)
    // console.log("c=",data3[state].meta.population)
    // console.log("r=",data3[state].total.recovered)
    // console.log("d=",data3[state].total.deceased)
    // console.log("v1=",data3[state].total.vaccinated1)
    // console.log("v2=",data3[state].total.vaccinated1)

    alert(`population=${data3[state].meta.population}
conformed=${data3[state].total.confirmed}
recoverd=${data3[state].total.recovered}
deceased=${data3[state].total.deceased}
vaccinated1=${data3[state].total.vaccinated1}
vaccinated2=${data3[state].total.vaccinated2}
"stay home and stay safe😊😊"`)
var select=document.getElementById('select')
select.value="select state code"
    }).catch((error)=>{
        alert('please select city name.........')
    })
}