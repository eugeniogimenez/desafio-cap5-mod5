export function initWelcome(cosas) {
    console.log('soy initWelcome');
    

    const div = document.createElement('div');

    div.innerHTML = `
    
    <header-comp></header-comp>

    <div class="content">

        <div class='titulo'>
            <text-comp class='title'>Te damos la bienvenida a esta página<text-comp>
        </div>
        
        <div class='parrafo'>
            <text-comp class='large'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</text-comp>
        </div>
        
        <div class='subtitulo'>
            <text-comp class='subtitle'>Para continuar ingresá tu nombre</text-comp>
        </div>
        
        
        <div class='field'>
            <field-comp label='Nombre'></field-comp>
        </div>
    
        <div class='buttom'>
            <buttom-comp class='start-buttom'>Comenzar</buttom-comp>
        </div>

    </div>


    <div>
        <footer-comp class='footer'></footer-comp>
    </div>
    `

    const startButtom = div.querySelector('.start-buttom');

    startButtom.addEventListener('click', ()=>{
        cosas.goTo('/step-1')
    })

    

    return div;
}