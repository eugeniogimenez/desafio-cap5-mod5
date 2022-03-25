export function initFieldComp() {
    
    class FieldComp extends HTMLElement {
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

                .label {
                    font-size: 18px;
                }

                .input {
                    border: solid;
                    border-radius: 4px;
                    padding: 17px 13px;
                    width: 100%;
                }

                
            `
            
            const div = document.createElement('div')
            const label = this.getAttribute('label');
            div.innerHTML = `
                <text-comp class="body">
                    <label class="label">${label}</label>
                </text-comp>
                
                <input type="text" class="input">
                             ` 
            div.className = this.className;

            shadow.appendChild(style)
            shadow.appendChild(div)
        }
    }

    customElements.define('field-comp', FieldComp)
}