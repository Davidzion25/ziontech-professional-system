// js/ai.js
function askAI(){
    let q=document.getElementById("question").value.toLowerCase()
    let ans=""
    if(q.includes("electricity")){ans="Electricity is the flow of electric charge."}
    else if(q.includes("biology")){ans="Biology is the study of living organisms."}
    else if(q.includes("chemistry")){ans="Chemistry studies matter and chemical reactions."}
    else if(q.includes("physics")){ans="Physics studies matter, energy, and their interactions."}
    else if(q.includes("mathematics")){ans="Mathematics is the study of numbers, quantities, and shapes."}
    else{ans="Check the ZionTech E-Library for detailed lesson notes."}
    document.getElementById("answer").innerHTML=ans
}