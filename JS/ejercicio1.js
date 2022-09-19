const calcular=document.getElementById('enviar');
calcular.addEventListener('click', ()=>
{
    let nombre1 = document.getElementById('texto').value
       
        let cantidad=nombre1.length
        alert("su nombre tiene "+cantidad+ " letras")    

})

const calcular2=document.getElementById('enviar2');
calcular2.addEventListener('click', ()=>
{
    let nombre2 = document.getElementById('texto').value    
   
        let cantidad=nombre2.toLowerCase()
        alert("su palabra en minuscula "+cantidad)
})

const calcular3=document.getElementById('enviar3');
calcular3.addEventListener('click', ()=>
{
    let nombre3 = document.getElementById('texto').value     
      let cantidad=nombre3.toUpperCase()
      alert("su palabra en minuscula "+cantidad)
})

const calcular4=document.getElementById('enviar4');
calcular4.addEventListener('click', ()=>
{
    let nombre4 = document.getElementById('texto').value     
        let cantidad=nombre4.charAt(0)
        alert("su palabra en minuscula "+cantidad)   
})

