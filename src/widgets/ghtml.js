/*
 * Gavato - A Simple To Use UI Widget Library to create Applications
 * Licensed under the MIT License
 * uses HLWTK As the core for drawing the widgets
 * Checkout the readme.md file for more information
*/

// This is the ghtml widget

function ghtml(html){
    let root = gwidget('gavato-gspacer');
    root.ghlwtk.control.content (`
        <div id='${root.pkg_config.pkg}' class='ghtml-${gwidget_default_style}'> 
            ${html}
        </div>
    `);
    return root;
}