const comprobar=document.getElementById('enviar')
comprobar.addEventListener('click',()=>{
    let nombre=document.getElementById('listan').value
    let apellido=document.getElementById('listap').value
    let materia=document.getElementById('listam').value

    if (nombre==1 && apellido==15 && materia==28) 
    {        
        alert(`Correcto`)
    }
    else if(nombre==2 && apellido==11 && materia==24)
    {
        alert(`Correcto`)
    }
    else if(nombre==3 && apellido==13 && materia==27)
    {
        alert(`Correcto`)
    }
    else if(nombre==4 && apellido==18 && materia==22)
    {
        alert(`Correcto`)
    }
    else if(nombre==5 && apellido==14 && materia==21)
    {
        alert(`Correcto`)
    }
    else if(nombre==6 && apellido==17 && materia==25)
    {
        alert(`Correcto`)
    }
    else if(nombre==7 && apellido==12 && materia==23)
    {
        alert(`Correcto`)
    }       
    else 
    {
        alert(`Incorrecto`)
    }         
}
)