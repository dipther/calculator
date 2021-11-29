numerosPadre=document.querySelector(".botonesNumeros")
numeros=numerosPadre.querySelectorAll("button")
total=document.querySelector(".procesoTotal")
actual=document.querySelector(".procesoActual")
// print numbers
let primerNumero="";
let segundoNumero="";
numeros.forEach(numero1 => {
    numero1.addEventListener("click",()=>{
        primerNumero+=numero1.textContent
        actual.textContent=primerNumero
        
    })
});
//print signs
let primerSigno="";
signosPadre=document.querySelector(".botonesOperaciones")
signos=signosPadre.querySelectorAll("button")
signos.forEach(signo => {
    signo.addEventListener("click",()=>{
        primerSigno+=signo.textContent
        total.textContent=primerNumero+primerSigno
        primerNumero=" "
        
    })
});

//equal
igual=document.querySelector(".igual")
igual.addEventListener("click",()=>{
if(primerSigno=="*"){
    actual.textContent=total.textContent.substring(0,total.textContent.length-1)*actual.textContent
}
else if(primerSigno=="-"){
    actual.textContent=total.textContent.substring(0,total.textContent.length-1)-actual.textContent
}
else if(primerSigno=="/"){
    actual.textContent=total.textContent.substring(0,total.textContent.length-1)/actual.textContent
}
else if(primerSigno=="+"){
    actual.textContent=+total.textContent.substring(0,total.textContent.length-1)+(+actual.textContent)
}
})
//clear
clear=document.querySelector(".botonClear")
clear.addEventListener("click",()=>{
    primerNumero=""
    primerSigno=""
    total.textContent=""
    actual.textContent=""
})
//delete 
deleteButton=document.querySelector(".botonDelete")
deleteButton.addEventListener("click",()=>{
    actual.textContent=primerNumero.slice(0,-1)
    primerNumero.slice(0, primerNumero.lastIndexOf("_"))
    
})