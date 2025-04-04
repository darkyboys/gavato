/*
 * Gavato - A Simple To Use UI Widget Library to create Applications
 * Licensed under the MIT License
 * uses HLWTK As the core for drawing the widgets
 * Checkout the readme.md file for more information
*/

// This is the gparagraph widget

function gparagraph(text, word_spacing=1, line_height=20){
    let root = gwidget('gavato-gspacer');
    root.ghlwtk.control.content (`
        <p id='${root.pkg_config.pkg}' class='gparagraph-${gwidget_default_style}' style='word-spacing: ${word_spacing}px;line-height: ${line_height}px;'>
            ${text}
        </p>
    `);
    return root;
}