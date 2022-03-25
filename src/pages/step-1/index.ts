export function initStep1(cosas) {
    console.log('soy initStep1');
    

    const div = document.createElement('div');

    div.innerHTML = `
    
    <header-comp></header-comp>

    <div class="content">

        <div class='titulo'>
            <text-comp class='title'>Necesitamos algunos datos más<text-comp>
        </div>
        
        <div class='field'>
            <field-comp label='Email'></field-comp>
        </div>

        <div class='field'>
            <field-comp label='Comida Favorita'></field-comp>
        </div>

        <div class='field'>
            <field-options label='Comida Favorita'>Algunas de estas opciones</field-options>
        </div>
    
        <div class='buttoms'>
            <buttom-comp class='start-buttom'>Continuar</buttom-comp>
        </div>

        <div class='buttoms'>
            <buttom-volver>Volver</buttom-volver>
        </div>

    </div>


    <div>
        <footer-comp class='footer'></footer-comp>
    </div>
    `

    const startButtom = div.querySelector('.start-buttom');

    startButtom.addEventListener('click', ()=>{
        cosas.goTo('/thankyou')
    })

    

    return div;
}