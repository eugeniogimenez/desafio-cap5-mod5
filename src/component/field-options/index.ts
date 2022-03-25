export function initFieldOptionsComp() {
    
    class FieldOptionsComp extends HTMLElement {
        constructor () {
            super();

            this.render()
        }

        render () {
            
            const shadow = this.attachShadow({mode: 'open'})

            const style = document.createElement('style')
            style.innerHTML = `
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
        
            <select class="input">
                <option value="1">Piedra</option>
                <option value="2">Papel</option>
                <option value="3">Tijera</option>
            </select>
                             ` 
            div.className = this.className;

            shadow.appendChild(style)
            shadow.appendChild(div)
        }
    }

    customElements.define('field-options', FieldOptionsComp)
}