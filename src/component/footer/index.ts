export function initFooterComp() {
    
    class FooterComp extends HTMLElement {
        constructor () {
            super();

            this.render()
        }

        render () {
            this.innerText = 'Footer'
            this.style.height = '233px'
            this.style.width = '100%'
            this.style.backgroundColor = '#FFA0EA'
            
            this.style.fontSize = '22px'
            this.style.fontFamily = 'Roboto'
            
            this.style.display = 'flex';
            this.style.justifyContent = 'center';
            this.style.alignItems = 'center';

        }
    }

    customElements.define('footer-comp', FooterComp)
}