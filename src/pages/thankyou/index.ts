export function initThankyou(cosas) {
    console.log('soy initThankyou');
    

    const div = document.createElement('div');

    div.innerHTML = `
    
    <header-comp></header-comp>

    <div class="content">

        <div class='titulo'>
            <text-comp class='title'>Gracias<text-comp>
        </div>

        <div class='subtitulo'>
            <text-comp class='subtitle'>Toda la información que nos brindaste es muy importante</text-comp>
        </div>
    
        <div class='boton'>
            <buttom-comp>De nada</buttom-comp>
        </div>

    </div>


    <div>
        <footer-comp class='footer'></footer-comp>
    </div>
    `

    

    return div;
}