const pantalla = document.querySelector('#pantalla');

const botones = document.querySelectorAll('.btn');

let expresion = ''

function ActualizarPantalla(){
  pantalla.innerText = expresion;
}

botones.forEach((item)=>{
  item.addEventListener('click', ()=>{
    let valor = item.id
    
    if(valor ==='limpiar') expresion = '';
    else if(valor === 'borrar'){
      expresion = expresion.slice(0,-1);
    } else if(valor === 'igual'){
      try {
        const resultado = eval(expresion)
        if(isNaN(resultado)) {
          expresion = 'Error';
        } else {
          expresion= resultado.toString();
        }
      } catch (error) {
        expresion= 'Error';
      }
    } else{
      expresion +=valor;
    }
    ActualizarPantalla()
  })

})



const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active')
})


