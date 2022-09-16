const calcular=document.getElementById('enviar');
calcular.addEventListener('click', ()=>
{
    let nombre = document.getElementById('texto').value
    
    function calcular(nombre){
        let cantidad=nombre.length
        alert("su nombre tiene "+cantidad+ " letras")
    }
    calcular(nombre)
})

const calcular2=document.getElementById('enviar2');
calcular.addEventListener('click', ()=>
{
    let nombre = document.getElementById('texto').value    
    function calcular(nombre){
        let cantidad=nombre.toLowerCase()
        alert("su palabra en minuscula "+cantidad)
    }
    calcular(nombre)
})

const calcular3=document.getElementById('enviar3');
calcular.addEventListener('click', ()=>
{
    let nombre = document.getElementById('texto').value  
    function calcular(nombre){
      let cantidad=nombre.toUpperCase()
      alert("su palabra en minuscula "+cantidad)
  }
  calcular(nombre)
})

const calcular4=document.getElementById('enviar4');
calcular.addEventListener('click', ()=>
{
    let nombre = document.getElementById('texto').value  
    function calcular(nombre){
        let cantidad=nombre.charAt(0)
        alert("su palabra en minuscula "+cantidad)
    }
    calcular(nombre)
})

