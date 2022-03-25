export function initButtomComp() {
    
    class ButtomComp extends HTMLElement {
        constructor () {
            super();

            this.render()
        }

        render () {
            
            const shadow = this.attachShadow({mode: 'open'})

            const style = document.createElement('style')
            style.innerHTML = `
                *{
                    box-sizing: border-box;
                }
                .root {
                    width: 100%;
                    border: solid;
                    border-radius: 4px;
                    padding: 17px 13px;
                    background-color: #9CBBE9;
                    cursor: pointer;
                    font-family: Roboto;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                }

                
            `
            
            const buttom = document.createElement('buttom')
            buttom.className = 'root';
            
            buttom.textContent = this.textContent;

            shadow.appendChild(style)
            shadow.appendChild(buttom)
        }
    }

    customElements.define('buttom-comp', ButtomComp)
}