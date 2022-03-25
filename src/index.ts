import { initRouter } from "./router";

///components
import { initHeaderComp } from "./component/header";
import { initFooterComp } from "./component/footer";
import { initTextComp } from "./component/text";
import { initFieldComp } from "./component/field";
import { initButtomComp } from "./component/button";
import { initFieldOptionsComp } from "./component/field-options";
import { initButtomVolverComp } from "./component/button-volver";

(function () {
    console.log('soy main');
    
    const root = document.querySelector('.root')
    initRouter(root)

    //components
    initHeaderComp()
    initFooterComp()
    initTextComp()
    initFieldComp()
    initButtomComp()
    initFieldOptionsComp()
    initButtomVolverComp()
})()