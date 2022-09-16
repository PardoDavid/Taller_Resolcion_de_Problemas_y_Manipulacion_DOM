
    const calcular=document.getElementById('enviar');
    calcular.addEventListener('click', ()=>
    {
    const tempde=document.getElementById('tempde').value
    const tempa=document.getElementById('tempa').value
    const enter=document.getElementById('entrada').value


    
    if (tempde=="c" && tempa=="fa") 
    {
        const temp=(parseFloat(enter)*1.8)+32
        alert(`Esto es el resultado de celsius a fahrenheit ${temp}`)
    }
    if (tempde=="c" && tempa=="ke") 
    {
        const temp=(parseFloat(enter)+273.15)
        alert(`Esto es el resultado de celcius a kelvin ${temp}`)
    }
    if (tempde=="c" && tempa=="ce") 
    {        
        alert(`Error, estas convirtiendo a la misma temperatura`)
    }
    if (tempde=="f" && tempa=="ce") 
    {
        const temp=(parseFloat(enter)-32)*(5/9)
        alert(`Esto es el resultado de fahrenheit a celsius ${temp}`)
    }
    if (tempde=="f" && tempa=="ke") 
    {
        const temp=(parseFloat(enter)-32)*(5/9)+273.15
        alert(`Esto es el resultado de fahrenheit a kelvin ${temp}`)
    }
    if (tempde=="f" && tempa=="fa") 
    {        
        alert(`Error, estas convirtiendo a la misma temperatura`)
    }
    if (tempde=="k" && tempa=="ce") 
    {
        const temp=(parseFloat(enter)-273.15)
        alert(`Esto es el resultado de kelvin a celcius ${temp}`)
    }
    if (tempde=="k" && tempa=="fa") 
    {
        const temp=(parseFloat(enter)-273.15)*(9/5)+32
        alert(`Esto es el resultado de kelvin a fahrenheit ${temp}`)
    }
    if (tempde=="k" && tempa=="ke") 
    {        
        alert(`Error, estas convirtiendo a la misma temperatura`)
    }
    })

            