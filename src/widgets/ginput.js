/*
 * Gavato - A Simple To Use UI Widget Library to create Applications
 * Licensed under the MIT License
 * uses HLWTK As the core for drawing the widgets
 * Checkout the readme.md file for more information
*/

// import { HLWTK_Component, HLWTK_JNODE, HLWTK_COMPONENT, HLWTK_CURRENT_VERSION, HLWTK_DISPOSE_EVERYTHING, HLWTK_NONE, HLWTK_TYPE_INT } from "../hlwtk.js";
// import { gavato_pkg_new } from "../gavato.core.js";

// This is the ginput widget

function ginput(value='', placeholder='', type='text'){
    let root = gwidget('gavato-ginput ');
    root.ghlwtk.control.content(`
        <input class='ginput-${gwidget_default_style}' id='${root.pkg_config.pkg}' type='${type}' placeholder='${placeholder}' value='${value}'>
    `);
    return root;
}