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
        GTG_applyRippleEffect('button', 'rgba(0, 0, 0, 0.1);');
    }
}

function gavato_widget_rerender (__WIDGET__, __parent__) {
    if (__parent__.ghlwtk) __WIDGET__.ghlwtk.control.bake (__parent__.ghlwtk, HLWTK_COMPONENT);
    else __WIDGET__.ghlwtk.control.bake (__parent__);
    if (screen.width <= 400){
        GTG_applyRippleEffect('button', 'rgba(0, 0, 0, 0.1);');
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
    if (__WIDGET__.ghlwtk != null){
        if (__target__ == GAVATO_HLWTK_ELEMENT) convertX = __WIDGET__.ghlwtk;
        else if (__target__ == GAVATO_HTML_ELEMENT) convertX = __WIDGET__.ghlwtk.hlwtk_component_root.innerHTML;
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
    if (document.getElementById(__WIDGET__.pkg_config.pkg) && __WIDGET__.ghlwtk.hlwtk_component_root.firstElementChild.getAttribute(__target__)) document.getElementById(__WIDGET__.pkg_config.pkg).setAttribute(__target__, __params__)
    else console.error ('Gavato Core Error -> __target__ <' + __target__ + '> was not found in the given __WIDGET__ <' + __WIDGET__ + '>, Ignoring __params__ <' + __params__ + '>');
}
function gavato_widget_get_param (__target__, __WIDGET__){
    let __params__;
    if (document.getElementById(__WIDGET__.pkg_config.pkg) && __WIDGET__.ghlwtk.hlwtk_component_root.firstElementChild.getAttribute(__target__)) __params__ =  document.getElementById(__WIDGET__.pkg_config.pkg).getAttribute(__target__);
    else console.error ('Gavato Core Error -> __target__ <' + __target__ + '> was not found in the given __WIDGET__ <' + __WIDGET__ + '>, Ignoring __params__ <' + __params__ + '>'), __params__ = 'Gavato Core Error -> __target__ <' + __target__ + '> was not found in the given __WIDGET__ <' + __WIDGET__ + '>, Ignoring __params__ <' + __params__ + '>';
    return __params__;
}
function gavato_widget_make_param (__target__, __params__,__WIDGET__){
    if (document.getElementById(__WIDGET__.pkg_config.pkg)) __WIDGET__.ghlwtk.hlwtk_component_root.firstElementChild.setAttribute(__target__, __params__);
    else console.error ('Gavato Core Error -> __target__ <' + __target__ + '> was not found in the given __WIDGET__ <' + __WIDGET__ + '>, Ignoring __params__ <' + __params__ + '>');
}
function gavato_widget_has_param (__target__, __WIDGET__){
    let rval = 0;
    if (gavato_is_widget(__WIDGET__)){
        if (__WIDGET__.ghlwtk.hlwtk_component_root.firstElementChild.hasAttribute(__target__)) rval = 1;
    }
    return rval;
}
function gavato_widget_update_param (__target__, __params__, __WIDGET__){
    if (!gavato_widget_has_param(__target__, __WIDGET__)) gavato_widget_make_param (__target__, __params__, __WIDGET__);
    else gavato_widget_set_param (__target__, (gavato_widget_get_param(__target__, __WIDGET__) + " " + __params__), __WIDGET__);
}


function gavato_widget_signal (__target__, __WIDGET__, __params__){
    if (document.getElementById(__WIDGET__.pkg_config.pkg)) document.getElementById(__WIDGET__.pkg_config.pkg).addEventListener(__target__, __params__);
    else console.error ('Gavato Core Error -> __target__ <' + __target__ + '> was not found in the given __WIDGET__ <' + __WIDGET__ + '>, Ignoring __params__ <' + __params__ + '>'), __params__ = 'Gavato Core Error -> __target__ <' + __target__ + '> was not found in the given __WIDGET__ <' + __WIDGET__ + '>, Ignoring __params__ <' + __params__ + '>';
}


function gavato_widget_valid (__WIDGET__){
    let __params__ = 0;
    if (__WIDGET__ == null || !__WIDGET__.ghlwtk) __params__ = 0;
    else __params__ = 1;
    return __params__;
}


function gavato_widget_add_effect (__target__, __WIDGET__, __params__){
    if (!gavato_widget_valid(__WIDGET__)) console.error ('Gavato Core Error -> __WIDGET__ <' + __WIDGET__ + '> is invalid');
    else {
        if (__target__ == 'position'){
            gavato_widget_update_param ('style', `position: relative;left: ${__params__[0]}px;top: ${__params__[1]}px;`, __WIDGET__);
        }
        else if (__target__ == 'rotation'){
            gavato_widget_update_param ('style', `transform: rotate(${__params__}deg);`, __WIDGET__);
        }
        else if (__target__ == 'scale'){
            gavato_widget_update_param ('style', `transform: scale(${__params__});`, __WIDGET__);
        }
        else if (__target__ == 'glass'){
            let widget = gavato_widget_get_param ('class', __WIDGET__);
            let pkg = widget.substring(0, widget.indexOf("-"));
            // console.log (pkg);
            gavato_widget_set_param ('class', `${pkg}-primary`, __WIDGET__);
            gavato_widget_update_param ('style', `
                background: rgba(${__params__}, 0.4);
                border: 1px solid rgba(${__params__}, 0.4);
                backdrop-filter: blur(5px);
            `, __WIDGET__);
        }
        else if (__target__ == 'top_center'){
            let top_positon = (screen.height/2);
            // console.log (top_positon);
            // console.log (gavato_widget_convert(__WIDGET__, GAVATO_JS_ELEMENT));
        }
        else console.error ('Gavato Core Error -> __target__ <' + __target__ + '> was unknown, Needs a valid effect: use movable instead');
    }
}



// Update 3 by ghgltggamer on 3:52Pm 3/4/25
function gavato_widget_remove (__WIDGET__){
    if (gavato_is_widget(__WIDGET__)) {
        __WIDGET__.ghlwtk.control.destroy();
    }
    else {
        console.error ("Gavato Core Error -> __WIDGET__ <" + __WIDGET__ + "> is not a gavato widget");
    }
}


function gavato_widget_clean (__WIDGET__){
    if (gavato_is_widget(__WIDGET__)) {
        __WIDGET__.ghlwtk.control.dispose(HLWTK_DISPOSE_EVERYTHING);
    }
    else {
        console.error ("Gavato Core Error -> __WIDGET__ <" + __WIDGET__ + "> is not a gavato widget");
    }
}

function gavato_widget_erase (__WIDGET__, __target__){
    if (gavato_is_widget(__WIDGET__)) {
        __WIDGET__.ghlwtk.control.dispose(__target__);
    }
    else {
        console.error ("Gavato Core Error -> __WIDGET__ <" + __WIDGET__ + "> is not a gavato widget");
    }
}



// Update ended 3 by ghgltggamer on 4:05Pm 3/4/25

// Update 4 started by ghgltggamer on 12:17pm 3/7/25
function gavato_theme_clear(){
    document.getElementById ('gavato-application-theme').innerHTML = "";
}

function gavato_widget_add_widget (__target__, __WIDGET__){
    if (gavato_widget_valid(__target__) && gavato_widget_valid(__WIDGET__)){
        document.getElementById(__target__.pkg_config.pkg).appendChild(document.getElementById(__WIDGET__.pkg_config.pkg).parentElement);
        // console.log ("Config: "+__target__.pkg_config.pkg);
        // console.log ("Config: "+__WIDGET__.pkg_config.pkg);
    }
    else {
        console.error ("Gavato Core Error _> Invalid __target__ and invalid __WIDGET__, A Valid Gavato widget expected. Please use typecasting to proceed.");
    }
}


function gavato_widget_data_transfer (__target__, __WIDGET__){
    if (gavato_widget_valid(__target__) && gavato_widget_valid(__WIDGET__)){
        document.getElementById(__target__.pkg_config.pkg).appendChild(document.getElementById(__WIDGET__.pkg_config.pkg));
        // console.log ("Config: "+__target__.pkg_config.pkg);
        // console.log ("Config: "+__WIDGET__.pkg_config.pkg);
    }
    else {
        console.error ("Gavato Core Error _> Invalid __target__ and invalid __WIDGET__, A Valid Gavato widget expected. Please use typecasting to proceed.");
    }
}



function gavato_widget_link (__WIDGET__, ___WIDGET___){
    let linked_widget_return;
    if (gavato_widget_valid(__WIDGET__) && gavato_widget_valid(___WIDGET___)){
        // document.getElementById(__target__.pkg_config.pkg).appendChild(document.getElementById(__WIDGET__.pkg_config.pkg));
        let linked_widget = gwidget();
        linked_widget.ghlwtk.hlwtk_component_root.appendChild(__WIDGET__.ghlwtk.hlwtk_component_root);
        linked_widget.ghlwtk.hlwtk_component_root.appendChild(___WIDGET___.ghlwtk.hlwtk_component_root);
        linked_widget_return = linked_widget;
        // console.log ("Config: "+__target__.pkg_config.pkg);
        // console.log ("Config: "+__WIDGET__.pkg_config.pkg);
    }
    else {
        console.error ("Gavato Core Error _> Invalid __WIDGET__ and invalid ___WIDGET___, A Valid Gavato widget expected. Please use typecasting to proceed.");
    }
    return linked_widget_return;
}

// Update 4 ended by ghgltggamer on 6:06PM 3/10/25

// Update 5 by ghgltggamer on 5:10 3/14/35
let gavato_current_theme_type = 'light';
let gavato_theme_source = '/src/themes/';
function gavato_theme_change (theme_name='gavato'){
    if (gavato_current_theme_type === 'light') 
        gavato_current_theme_type = 'dark',
        document.getElementById('gavato-application-theme-link').href = `${gavato_theme_source}/${theme_name}-${gavato_current_theme_type}.css`;
    else if (gavato_current_theme_type === 'dark') 
        gavato_current_theme_type = 'light',
        document.getElementById('gavato-application-theme-link').href = `${gavato_theme_source}/${theme_name}-${gavato_current_theme_type}.css`
    else console.error ("Gavato Core Error -> Theme not found named as, <" + theme_name + "> on path, <" + gavato_theme_source + ">. Make sure that theme exists!");
}


// function gavato_theme_change_style (theme_name, style){
//     gwidget_default_style = style;
//     for (let i = 0;i < gwidget_capture_widgets.length;i++){
//         let widget = gwidget_capture_widgets[i];
//         if (gavato_widget_has_param('class', widget)){
//             console.log (gavato_widget_get_param('class', widget));
//         }
//         console.log (widget, i);
//     }
// }


// Update 5 ended by ghgltggamer at 4:51 on 4/4/25