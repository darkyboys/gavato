/*
 * Gavato - A Simple To Use UI Widget Library to create Applications
 * Licensed under the MIT License
 * uses HLWTK As the core for drawing the widgets
 * Checkout the readme.md file for more information
*/

// import { HLWTK_Component, HLWTK_JNODE, HLWTK_COMPONENT, HLWTK_CURRENT_VERSION, HLWTK_DISPOSE_EVERYTHING, HLWTK_NONE, HLWTK_TYPE_INT } from "../hlwtk.js";
// import { gavato_pkg_new } from "../gavato.core.js";

// This is the gwidget widget
let gwidget_default_style = "primary";
function gwidget(name='gavato-gwidget'){
    let root = HLWTK_Component();
    let pkg_config = {
        pkg: gavato_pkg_new(),
        pkg_name: name
    }
    return {
        ghlwtk: root,
        pkg_config: pkg_config,
    }
}

