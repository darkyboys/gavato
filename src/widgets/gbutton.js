/*
 * Gavato - A Simple To Use UI Widget Library to create Applications
 * Licensed under the MIT License
 * uses HLWTK As the core for drawing the widgets
 * Checkout the readme.md file for more information
*/

// import { HLWTK_Component, HLWTK_JNODE, HLWTK_COMPONENT, HLWTK_CURRENT_VERSION, HLWTK_DISPOSE_EVERYTHING, HLWTK_NONE, HLWTK_TYPE_INT } from "../hlwtk.js";
// import { gavato_pkg_new } from "../gavato.core.js";
// import { gwidget } from "./gwidget.js";

// This is the gbutton widget
// export function gbutton(label='GButton', icon=null){
//     let root = HLWTK_Component();
//     let pkg_config = {
//         pkg: gavato_pkg_new(),
//         pkg_name: 'gavato-gbutton'
//     }
//     let gicon = `<img src='${icon}' `;
//     if (icon == null) gicon += `style='display: none;'`;
//     gicon += `class='icon'>`;
//     root.control.content(`
//         <button class='gbutton' id='${pkg_config.pkg}'>
//             ${gicon}
//             <span class='label'>
//                 ${label}
//             </span>
//         </button>
//     `);

//     return {
//         ghlwtk: root,
//         pkg_config: pkg_config,
//     }
// }

function gbutton(label='GButton', icon=null){
    let root = gwidget('gavato-gbutton');
    let gicon = `<img src='${icon}' `;
    if (icon == null) gicon += `style='display: none;'`;
    gicon += `class='icon'>`;
    root.ghlwtk.control.content(`
        <button class='gbutton-${gwidget_default_style}' id='${root.pkg_config.pkg}'>
            ${gicon}
            <span class='label'>
                ${label}
            </span>
        </button>
    `);
    return root;
}