// import * as ui from './gavato.js'
gwidget_default_style = 'secondary'
gbutton_default_style = 'gbutton-secondary'
let btn = gbutton('Click me');
let btn2 = gbutton('Click me - 2');
gavato_widget_render (btn, btn2);
gavato_widget_render (btn2, document.body);

let inp = ginput('text', 'hello world');
gavato_widget_render(inp, document.body);

gavato_widget_set ('label', 'Click me now', btn);
gavato_widget_set ('icon', 'win32.png', btn2);
gavato_widget_set_param ('class', 'gbutton-secondary', btn);

// alert (gavato_widget_get_param('text', btn));

console.log (
    gavato_element_convert(gavato_widget_convert (btn2, GAVATO_JS_ELEMENT), GAVATO_JS_ELEMENT)
);
GTG_applyRippleEffect('button', 'hsla(0, 0.00%, 0.00%, 0.50);');

// alert (gavato_widget_get ('icon', btn));

gavato_widget_make_param('onclick', 'greet()', btn);

function greet(){
    alert ("hello world 2024");
}


gavato_widget_signal ('click', btn2, greet);
// let btn3 = null;
// Trying to set a signal on a widget
// gavato_widget_signal('click', btn3, greet);
// If btn3 is invalid, Gavato handles it gracefully:
// Output: "Error: Widget btn3 does not exist!"
// gavato_widget_add_effect('movable', btn2);
// let jelm = gavato_widget_convert(btn, GAVATO_JS_ELEMENT);
// console.log (jelm)
// let mouseX;  let mouseY;

// jelm.style.position = 'relative';
// document.addEventListener('mousemove', (e) => {
//     mouseX = e.clientX;  // Mouse X position relative to the viewport
//     mouseY = e.clientY;  // Mouse Y position relative to the viewport

//     console.log (
//         `
//             offsets: top, ${jelm.offsetTop}
//             offsets: left, ${jelm.offsetLeft}
    
    
    
//             Mouse relative to the offset: 
//                 x: ${mouseX-jelm.offsetLeft}
//                 y: ${mouseY-jelm.offsetTop}
//         `
//     );
//     jelm.style.left = `${mouseX-jelm.offsetLeft}px`;
//     jelm.style.top = `${mouseY-jelm.offsetTop}px`;
// });
