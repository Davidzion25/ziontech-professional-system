function check(){

let answer=document.querySelector('input[name="q1"]:checked').value

if(answer=="A"){

document.getElementById("result").innerHTML="Correct"

}else{

document.getElementById("result").innerHTML="Wrong"

}

}