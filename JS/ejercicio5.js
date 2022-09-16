let areat=document.getElementById('areat')
areat.addEventListener('click',()=>{
    let area1=document.getElementById('area1').value
    let area2=document.getElementById('area2').value
    
    let total=(parseFloat(area1*area2)/2)
    alert(total)           
})

let perimetrot=document.getElementById('perit')
perimetrot.addEventListener('click',()=>{
   
    lado1=document.getElementById('l1').value
    lado1=parseInt(lado1);
    lado2=document.getElementById('l2').value
    lado2=parseInt(lado2);
    lado3=document.getElementById('l3').value
    lado3=parseInt(lado3);
    
    let total=(parseInt(lado1+lado2+lado3))
    alert(total)          
})

let areac=document.getElementById('areac')
areac.addEventListener('click',()=>{
    let areac1=document.getElementById('areac1').value
    let areac2=document.getElementById('areac2').value
    
    let total=(parseFloat((areac1)*(areac2)))
    alert(total)           
})

let perimetroc=document.getElementById('peric')
perimetroc.addEventListener('click',()=>{   
    lados1=document.getElementById('la1').value
    lados1=parseInt(lados1);
    lados2=document.getElementById('la2').value
    lados2=parseInt(lados2);
    lados3=document.getElementById('la3').value
    lados3=parseInt(lados3);
    lados4=document.getElementById('la4').value
    lados4=parseInt(lados4);
    
    total=(parseInt(lados1+lados2+lados3+lados4))
    alert(total)          
})

let areaci=document.getElementById('areaci')
areaci.addEventListener('click',()=>{
    const pi=3.14
    let radio=document.getElementById('radio').value
    
    
    let total=(parseFloat((pi*radio)*radio))
    alert(total)           
})

let peradio=document.getElementById('pericir')
peradio.addEventListener('click',()=>{
    const pi=3.14
    let radio=document.getElementById('peradio').value    
    
    let total=(parseFloat(2*pi*radio))
    alert(total)           
})

let arearec=document.getElementById('arearec')
arearec.addEventListener('click',()=>{
  
    lad1=document.getElementById('ladrec1').value
    lad1=parseInt(lad1);
    lad2=document.getElementById('ladrec2').value   
    lad2=parseInt(lad2);
    
    total=(parseInt(lad1*lad2))
    alert(total)          
})

let perimetrorec=document.getElementById('perirec')
perimetrorec.addEventListener('click',()=>{
  
    la1=document.getElementById('perirec1').value
    la1=parseInt(la1);
    la2=document.getElementById('perirec2').value   
    la2=parseInt(la2);
    
    total=(parseInt(2*(la1*la2)))
    alert(total)          
})

