export function initHeaderComp() {
    
    class HeaderComp extends HTMLElement {
        constructor () {
            super();

            this.render()
        }

        render () {
            this.innerText = 'Header'
            this.style.height = '60px'
            this.style.width = '100%'
            this.style.backgroundColor = '#FF8282'
            this.style.fontFamily = 'Roboto'
            
            this.style.display = 'flex';
            this.style.justifyContent = 'center';
            this.style.alignItems = 'center';

        }
    }

    customElements.define('header-comp', HeaderComp)
}