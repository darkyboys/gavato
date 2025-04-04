/*
 * Gavato - A Simple To Use UI Widget Library to create Applications
 * Licensed under the MIT License
 * uses HLWTK As the core for drawing the widgets
 * Checkout the readme.md file for more information
*/

// This is the gparagraph widget

function gheading(text, size, font_size){
    let root = gwidget('gavato-gspacer');
    root.ghlwtk.control.content (`
        <h${size} id='${root.pkg_config.pkg}' class='gheading-${gwidget_default_style}' style='font-size: ${font_size}px;'>
            ${text}
        </h${size}>
    `);
    return root;
}