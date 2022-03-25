export function initTextComp() {
    
    class TextComp extends HTMLElement {
        constructor () {
            super();

            this.render()
        }

        render () {
            
            const shadow = this.attachShadow({mode: 'open'})

            const style = document.createElement('style')
            style.innerHTML = `
                .title {
                    font-size: 52px;
                    font-family: Roboto;
                    font-weight: bold;
                }

                .subtitle {
                    font-size: 38px;
                    font-family: Roboto;
                    font-weight: bold;
                }

                .large {
                    font-size: 22px;
                    font-family: Roboto;
                    font-weight: medium;
                }

                .body {
                    font-size: 18px;
                    font-family: Roboto;
                    font-weight: medium;
                }
            `
            
            const div = document.createElement('div')
            div.textContent = this.textContent;
            div.className = this.className;

            shadow.appendChild(style)
            shadow.appendChild(div)
        }
    }

    customElements.define('text-comp', TextComp)
}