function calculate(){

let v=document.getElementById("voltage").value
let r=document.getElementById("resistance").value

let current=v/r

document.getElementById("current").innerHTML="Current="+current

}

document.getElementById("voltage").oninput=calculate
document.getElementById("resistance").oninput=calculate