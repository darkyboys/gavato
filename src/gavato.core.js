/*
 * Gavato - A Simple To Use UI Widget Library to create Applications
 * Licensed under the MIT License
 * uses HLWTK As the core for drawing the widgets
 * Checkout the readme.md file for more information
*/

// import { HLWTK_Component, HLWTK_JNODE, HLWTK_COMPONENT, HLWTK_CURRENT_VERSION, HLWTK_DISPOSE_EVERYTHING, HLWTK_NONE, HLWTK_TYPE_INT } from "../hlwtk.js";
// import { gwidget } from "./widgets/gwidget.js";

// This file contains the core gavato

function gavato_pkg_new (len = 64){ // 64 means 64 byte random integer
    let pkg = "";
    for (let i = 0;i < len;i++) pkg+=Math.floor(Math.random()*10);
    return pkg;
}


function gavato_widget_set (__target__, __params__,__WIDGET__){
    if (document.getElementById(__WIDGET__.pkg_config.pkg) && document.getElementById(__WIDGET__.pkg_config.pkg).getElementsByClassName(__target__)[0]) document.getElementById(__WIDGET__.pkg_config.pkg).getElementsByClassName(__target__)[0].innerHTML = __params__, document.getElementById(__WIDGET__.pkg_config.pkg).getElementsByClassName(__target__)[0].style.display = 'block';
    else console.error ('Gavato Core Error -> __target__ <' + __target__ + '> was not found in the given __WIDGET__ <' + __WIDGET__ + '>, Ignoring __params__ <' + __params__ + '>');
}


function gavato_widget_get (__target__, __WIDGET__){
    let __params__;
    if (document.getElementById(__WIDGET__.pkg_config.pkg) && document.getElementById(__WIDGET__.pkg_config.pkg).getElementsByClassName(__target__)[0]) __params__ = document.getElementById(__WIDGET__.pkg_config.pkg).getElementsByClassName(__target__)[0].innerHTML;
    else console.error ('Gavato Core Error -> __target__ <' + __target__ + '> was not found in the given __WIDGET__ <' + __WIDGET__ + '>, Ignoring __params__ <' + __params__ + '>');
    return __params__;
}


function gavato_widget_render (__WIDGET__, __parent__) {
    if (__parent__.ghlwtk) __WIDGET__.ghlwtk.control.make (__parent__.ghlwtk, HLWTK_COMPONENT);
    else __WIDGET__.ghlwtk.control.make (__parent__);
    if (screen.width <= 400){
        GTG_applyRippleEffect('button', 'rgba(0, 0, 0, 0.5);');
    }
}

function gavato_widget_rerender (__WIDGET__, __parent__) {
    if (__parent__.ghlwtk) __WIDGET__.ghlwtk.control.bake (__parent__.ghlwtk, HLWTK_COMPONENT);
    else __WIDGET__.ghlwtk.control.bake (__parent__);
    if (screen.width <= 400){
        GTG_applyRippleEffect('button', 'rgba(0, 0, 0, 0.5);');
    }
}

const GAVATO_JS_ELEMENT = 0x1;
const GAVATO_HTML_ELEMENT = 0x2;
const GAVATO_HLWTK_ELEMENT = 0x3;
const GAVATO_WIDGET_ELEMENT = 0x4;


function gavato_widget_set_arg (__args__, __value__, __WIDGET__) {
    if (document.getElementById(__WIDGET__.pkg_config.pkg)) document.getElementById(__WIDGET__.pkg_config.pkg).setAttribute (__args__, __value__);
    else console.error ('Gavato Core Error -> The given __WIDGET__ <' + __WIDGET__ + '>, was not rendered');
}


function gavato_widget_convert (__WIDGET__, __target__) {
    let convertX;
    if (__WIDGET__.ghlwtk){
        if (__target__ == GAVATO_HLWTK_ELEMENT) convertX = __WIDGET__.ghlwtk;
        else if (__target__ == GAVATO_HTML_ELEMENT) convertX = __WIDGET__.ghlwtk.control.content();
        else if (__target__ == GAVATO_JS_ELEMENT) convertX = __WIDGET__.ghlwtk.hlwtk_component_root;
        else if (__target__ == GAVATO_WIDGET_ELEMENT) convertX = __WIDGET__;
        else {
            console.error ('Gavato Core Error -> The given __WIDGET__ <' + __WIDGET__ + '> could not be converted to an unknown type');
        }
    }
    else console.error ('Gavato Core Error -> The given __WIDGET__ <' + __WIDGET__ + '>, was not rendered');
    return convertX;
}



function gavato_element_convert (__WIDGET__, __target__) {
    let convertX;
    // if (__WIDGET__.ghlwtk){
        if (__target__ == GAVATO_HLWTK_ELEMENT) {
            convertX = gwidget();
            convertX.ghlwtk = __WIDGET__;
        }
        else if (__target__ == GAVATO_HTML_ELEMENT) {
            convertX = gwidget();
            convertX.ghlwtk.control.content (__WIDGET__);
        }
        else if (__target__ == GAVATO_JS_ELEMENT) {
            convertX = gwidget();
            convertX.ghlwtk.hlwtk_component_root = __WIDGET__;
        }
        else if (__target__ == GAVATO_WIDGET_ELEMENT) convertX = __WIDGET__;
        else {
            console.error ('Gavato Core Error -> The given __WIDGET__ <' + __WIDGET__ + '> could not be converted to an unknown type');
        }
    // }
    // else console.error ('Gavato Core Error -> The given __WIDGET__ <' + __WIDGET__ + '>, was not rendered');
    return convertX;
}



function gavato_is_widget (__WIDGET__) {
    let rval = 0;
    if (__WIDGET__.ghlwtk) rval = 1;
    return rval;
}



function gavato_widget_set_param (__target__, __params__,__WIDGET__){
    if (document.getElementById(__WIDGET__.pkg_config.pkg) && document.getElementById(__WIDGET__.pkg_config.pkg).getAttribute(__target__)) document.getElementById(__WIDGET__.pkg_config.pkg).setAttribute(__target__, __params__)
    else console.error ('Gavato Core Error -> __target__ <' + __target__ + '> was not found in the given __WIDGET__ <' + __WIDGET__ + '>, Ignoring __params__ <' + __params__ + '>');
}
function gavato_widget_get_param (__target__, __WIDGET__){
    let __params__;
    if (document.getElementById(__WIDGET__.pkg_config.pkg) && document.getElementById(__WIDGET__.pkg_config.pkg).getAttribute(__target__)) __params__ =  document.getElementById(__WIDGET__.pkg_config.pkg).getAttribute(__target__);
    else console.error ('Gavato Core Error -> __target__ <' + __target__ + '> was not found in the given __WIDGET__ <' + __WIDGET__ + '>, Ignoring __params__ <' + __params__ + '>'), __params__ = 'Gavato Core Error -> __target__ <' + __target__ + '> was not found in the given __WIDGET__ <' + __WIDGET__ + '>, Ignoring __params__ <' + __params__ + '>';
    return __params__;
}
function gavato_widget_make_param (__target__, __params__,__WIDGET__){
    if (document.getElementById(__WIDGET__.pkg_config.pkg)) document.getElementById(__WIDGET__.pkg_config.pkg).setAttribute(__target__, __params__);
    else console.error ('Gavato Core Error -> __target__ <' + __target__ + '> was not found in the given __WIDGET__ <' + __WIDGET__ + '>, Ignoring __params__ <' + __params__ + '>');
}



function gavato_widget_signal (__target__, __WIDGET__, __params__){
    if (document.getElementById(__WIDGET__.pkg_config.pkg)) document.getElementById(__WIDGET__.pkg_config.pkg).addEventListener('click', __params__);
    else console.error ('Gavato Core Error -> __target__ <' + __target__ + '> was not found in the given __WIDGET__ <' + __WIDGET__ + '>, Ignoring __params__ <' + __params__ + '>'), __params__ = 'Gavato Core Error -> __target__ <' + __target__ + '> was not found in the given __WIDGET__ <' + __WIDGET__ + '>, Ignoring __params__ <' + __params__ + '>';
}


function gavato_widget_valid (__WIDGET__){
    let __params__ = 0;
    if (__WIDGET__ == null || !__WIDGET__.ghlwtk) __params__ = 0;
    else __params__ = 1;
    return __params__;
}

// Comming Soon!
// function gavato_widget_add_effect (__target__, __WIDGET__){
//     if (!gavato_widget_valid(__WIDGET__)) console.error ('Gavato Core Error -> __WIDGET__ <' + __WIDGET__ + '> is invalid');
//     else {
//         if (__target__ == 'movable'){
            
//         }
//         else console.error ('Gavato Core Error -> __target__ <' + __target__ + '> was unknown, Needs a valid effect: use movable instead');
//     }
// }