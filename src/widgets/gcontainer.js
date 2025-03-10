/*
 * Gavato - A Simple To Use UI Widget Library to create Applications
 * Licensed under the MIT License
 * uses HLWTK As the core for drawing the widgets
 * Checkout the readme.md file for more information
*/

// This is the gcontainer widget

function gcontainer(width, height){
    let root = gwidget('gavato-gcontainer ');
    // root.ghlwtk.hlwtk_component_root.classList.add (`gcontainer-${gwidget_default_style}`);
    // root.ghlwtk.hlwtk_component_root.style.width = `${width}px`;
    // root.ghlwtk.hlwtk_component_root.style.height = `${height}px`;
    root.ghlwtk.control.content (`
        <div id='${root.pkg_config.pkg}' class='gcontainer-${gwidget_default_style}' style='height: ${height}px;width: ${width}px;'> 
        </div>
    `);
    return root;
}