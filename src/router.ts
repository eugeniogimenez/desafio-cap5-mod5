import { initWelcome } from "./pages/welcome";
import { initStep1 } from "./pages/step-1";
import { initThankyou } from "./pages/thankyou";

const routes = [
    {
        path: /welcome/,
        component: initWelcome
    },
    {
        path: /step-1/,
        component: initStep1
    },
    {
        path: /thankyou/,
        component: initThankyou
    }
]

export function initRouter(container: Element) {
    console.log('soy initRouter');
    
    function goTo(path) {
        console.log('soy goTo');
        
        history.pushState({}, '', path)

        handleRoute(path)
    }

    function handleRoute(route) {
        console.log('soy handleRoute');
        
        for (const i of routes) {
            if (i.path.test(route)) {
                const el = i.component({goTo: goTo});

                if (container.firstChild) {
                    container.firstChild.remove()
                }

                container.appendChild(el)
            }
        }

    }

    if (location.pathname == '/') {
        goTo('/welcome')
    } else {
        
        handleRoute(location.pathname)
    }

    window.onpopstate = function () {
        console.log('soy onpopstate');
        
        handleRoute(location.pathname)
    }

}