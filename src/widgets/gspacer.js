/*
 * Gavato - A Simple To Use UI Widget Library to create Applications
 * Licensed under the MIT License
 * uses HLWTK As the core for drawing the widgets
 * Checkout the readme.md file for more information
*/

// This is the gspacer widget

function gspacer(width, height){
    let root = gwidget('gavato-gspacer');
    root.ghlwtk.control.content (`
        <div id='${root.pkg_config.pkg}' class='gspacer-${gwidget_default_style}' style='height: ${height}px;width: ${width}px;'> 
        </div>
    `);
    return root;
}