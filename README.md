# Gavato UI Widget Library Documentation

## Overview
Gavato is an open-source, fast, and telemetry-free user interface library that simplifies the creation of complex websites.

For example:
- Want to create an image editor UI? Just drag and drop widgets in the code!
- Add a panel, menu bar, canvas, hierarchy, and inspector panel, and your UI is ready.


## Installation
You can install the gavato library in 2 ways:
 - Build From Source
 - Install Pre-Built

**If you are using Windows then you can only go with 'Install Pre-Built'**


 - **Linux/MacOS**
    - Obtain the gavato source by cloning this repository.
    - Make sure to have gcc installed on your system , If not then install it first.
    - Install mklib! Without mklib your need to manually configure everything your self which is not recommended since gavato has a ton of files. So install mklib to make gavato by the following commands:
```bash
# Clone the repository
git clone https://github.com/darkyboys/mklib.git
cd mklib

# Build using magma build system or a simple g++ command
# Un comment if want to use magma build system
# magma

# g++ direct
mkdir bin
g++ -std=c++17 -Isrc/include -o bin/mklib src/main.cc

# Move the binary to a directory in your PATH
mv bin/mklib /usr/local/bin/
```
If got any permission error use:
```bash
sudo mv bin/mklib /usr/local/bin/
```
   - Make Gavato Library by opening the directory where you have gavato source.
    - Run `mklib`, This will make gavato.lib.js and now you only need to include gavato.lib.js anywhere you want to use gavato.

Full commands
```bash
# Clone the repository
git clone https://github.com/darkyboys/mklib.git
cd mklib

# Build using magma build system or a simple g++ command
# Un comment if want to use magma build system
# magma

# g++ direct
mkdir bin
g++ -std=c++17 -Isrc/include -o bin/mklib src/main.cc

# Gavato
git clone https://github.com/darkyboys/gavato.git
cp bin/mklib gavato
cd gavato
./mklib
cp gavato.lib.js ..
cd ..
cp gavato.lib.js ..
cd ..
# Comment the line bellow if wants to make gavato without cleaning
rm -rf mklib
```

**2nd Way**
    - Checkout the releases there you will find the `gavato.lib.js` this is the pre-built library which this repository provides you can just download and include it anywhere you want!


## Documentation
The Main documentation about Gavato.


## Default Style
```javascript
let gwidget_default_style = "primary";
```

## Core Functions

### `gwidget(name='gavato-gwidget')`
**Description:**
Creates a new Gavato widget instance.

**Parameters:**
- `name` (String) - The widget name (default: `gavato-gwidget`).

**Returns:**
- An object containing:
  - `ghlwtk`: The root HLWTK component.
  - `pkg_config`: An object containing package configuration.

**Example:**
```javascript
let widget = gwidget();
```

---

### `gbutton(label='GButton', icon=null)`
**Description:**
Creates a button widget with an optional icon.

**Parameters:**
- `label` (String) - Button label (default: `GButton`).
- `icon` (String) - URL of the icon (default: `null`).

**Returns:**
- A button widget object.

**Example:**
```javascript
let button = gbutton("Click Me", "icon.png");
```

**Implementation:**
```javascript
function gbutton(label='GButton', icon=null){
    let root = gwidget('gavato-gbutton');
    let gicon = icon ? `<img src='${icon}' class='icon'>` : "";
    root.ghlwtk.control.content(`
        <button class='gbutton-${gwidget_default_style}' id='${root.pkg_config.pkg}'>
            ${gicon}
            <span class='label'>${label}</span>
        </button>
    `);
    return root;
}
```

---

### `ginput(value='', placeholder='', type='text')`
**Description:**
Creates an input field widget.

**Parameters:**
- `value` (String) - Default input value (default: empty string).
- `placeholder` (String) - Placeholder text (default: empty string).
- `type` (String) - Input type (default: `text`).

**Returns:**
- An input field widget object.

**Example:**
```javascript
let input = ginput("Hello", "Enter text", "text");
```

**Implementation:**
```javascript
function ginput(value='', placeholder='', type='text'){
    let root = gwidget('gavato-ginput');
    root.ghlwtk.control.content(`
        <input class='ginput-${gwidget_default_style}' id='${root.pkg_config.pkg}' type='${type}' placeholder='${placeholder}' value='${value}'>
    `);
    return root;
}
```

---

### `gcontainer(width, height)`
**Description:**
Creates a container, For holding other widgets (Visually).

**Parameters:**
- `width` (Integer) - Set's the width of the container (required).
- `height` (Integer) - Set's the height of the container (required).

**Returns:**
- A Container Which Can Be Used The Visually Combining Other Widgets.

**Example:**
```javascript
let container = gcontainer (300, 200); // A 300x200 container
```

**Note:**
For Adding other widgets to the container visually, Please use the [gavato_widget_add_widget] (###gavato_widget_add_widget), Because normal rendering will only affect the container not the data of the container, And visually you will need to add the widget to the container's data.

---

### `gspacer(width, height)`
**Description:**
Creates a spacer, For adding the space between multiple widgets.

**Parameters:**
- `width` (Integer) - Set's the width of the spacer (required).
- `height` (Integer) - Set's the height of the spacer (required).

**Returns:**
- A Spacer For Adding Space, In between 2 widgets.

**Example:**
```javascript
let container = gspacer (300, 200); // A 300x200 spacer
```

---

## Gavato Core

### `gavato_pkg_new(len = 64)`
**Description:**
Generates a random package identifier of the specified length.

**Parameters:**
- `len` (Number) - Length of the random integer string (default: 64).

**Returns:**
- A randomly generated string of the specified length.

---

### `gavato_widget_set(__target__, __params__, __WIDGET__)`
**Description:**
Updates the content of a specified target element within a widget.

**Parameters:**
- `__target__` (String) - Class name of the target element inside the widget.
- `__params__` (String) - New content to be set.
- `__WIDGET__` (Object) - Widget object containing the target element.

**Returns:**
- None.

**Error Handling:**
- Logs an error if the target element is not found.

---

### `gavato_widget_get(__target__, __WIDGET__)`
**Description:**
Retrieves the content of a specified target element within a widget.

**Parameters:**
- `__target__` (String) - Class name of the target element inside the widget.
- `__WIDGET__` (Object) - Widget object containing the target element.

**Returns:**
- Content of the target element, or logs an error if the target is not found.

---

### `gavato_widget_render(__WIDGET__, __parent__)`
**Description:**
Renders a widget inside a given parent element.

**Parameters:**
- `__WIDGET__` (Object) - Widget object to be rendered.
- `__parent__` (Object) - Parent container where the widget will be rendered.

**Behavior:**
- If screen width ≤ 400px, applies a ripple effect on buttons.

---

### `gavato_widget_signal(__target__, __WIDGET__, __params__)`
**Description:**
Attaches an event listener to a widget.

**Parameters:**
- `__target__` (String) - Target event (e.g., `click`).
- `__WIDGET__` (Object) - Widget object.
- `__params__` (Function) - Event handler function.

**Error Handling:**
- Logs an error if the widget is not found.

---

### `gavato_widget_valid(__WIDGET__)`
**Description:**
Checks if a widget object is valid.

**Parameters:**
- `__WIDGET__` (Object) - Widget object to be checked.

**Returns:**
- `1` if the widget is valid, otherwise `0`. 

---

### `gavato_widget_has_param (__target__, __WIDGET__)`
**Description:**
Checks if a widget object contains a html attribute as per the given __target__.

**Parameters:**
- `__WIDGET__` (Object) - Widget object to be checked.

**Returns:**
- `1` if the attribute found, otherwise `0`. 

---

### `gavato_widget_update_param (__target__, __params__, __WIDGET__)`
**Description:**
Updates a attribute of the given widget object. __target__ is the attribute to be updated and __param__ is the value to be appened.

**Parameters:**
- `__WIDGET__` (Object) - Widget object to be updated.

**Returns:**
- Nothing

---

###  `gavato_widget_add_effect(__target__, __WIDGET__, __params__)`
**Description:**
Applies a visual effect to a widget.
 - target is the effect to be applied
 - WIDGET is the widget on which the effects will be applied
 - params some parameters for effect, It could be positions or rotations anything.


**Parameters:**
- `__target__` - Effect
- `__WIDGET__` (Object) - Widget object to be effected.
- `__params__` - Parameters For Effect

**Effects**
- `position`: Changes the position of any rendered widget, Needs the parameters (x,y) as [x,y] array.

```js
// example
gavato_widget_add_effect('position', myWidget, [10, 20]);
// from x to 10 and y to 20 pixels
```


- `rotation`: Changes the rotation of any rendered widget, Only needs the rotation_degrees.

```js
// example
gavato_widget_add_effect('rotation', myWidget, 45); // 45 degrees rotation
```


- `scale`: Changes the scale of any rendered widget, Only needs the scaling times.

```js
// example
gavato_widget_add_effect('scale', myWidget, 2); // 2x scale
```

**Returns:**
- Nothing


### `gavato_widget_remove (__WIDGET__)`
**Description:**
This will remove any rendered widget from the viewport.


**Parameters:**
 - `__WIDGET__`: This is the widget to be removed from the viewport.


**Returns:**
Nothing.

---

### `gavato_widget_clean (__WIDGET__)`
**Description:**
This will remove all re-rendered widgets of a rendered widget from the viewport.


**Parameters:**
 - `__WIDGET__`: This is the widget to be targeted from the viewport.


**Returns:**
Nothing.

---

### `gavato_widget_erase (__WIDGET__, __target__)`
**Description:**
This will remove a particular re-rendered widget from a set of re-rendered widgets of a rendered widget from the viewport.


**Parameters:**
 - `__WIDGET__`: This is the widget to be targeted from the viewport.
 - `__target__`: This is the index of the widget to be removed.


**Returns:**
Nothing.

--- 

### `gavato_theme_clear ()`
**Description:**
This will clear the default gavato light theme comes prebuilt with gavato, In order to allow you using custom themes.


**Parameters:**
 - Nothing


**Returns:**
Nothing.

--- 

### `gavato_widget_add_widget (__WIDGET__, ___WIDGET___)`
**Description:**
In gavato a widget is different from it's data, What you manages is widget in gavato but what you visually see on screen is the data of widget not the widget, So rendering a widget inside a widget doesn't makes tear or overwritten effect , Because it's rendered inside another widget but not affected the data, But in case you want to affect data or add a widget inside another widget visually like adding a button to a container , Then you will need to render the button in the data of the container not just the standard container widget, This is deeper thing so gavato provides you this function to render the widgets inside the data of another widget.

*Note: The Widgets must be already rendered if not.*


**Parameters:**
 - `__WIDGET__` : The widget whose data will be the one , The another widget be appended to.
 - `___WIDGET___` : The widget which will be rendered in the data of the first widget.


**Returns:**
Nothing.

--- 

### `gavato_widget_data_transfer (__target__, __WIDGET__)`
**Description:**
This function is used to transfer the data of a widget into another widget, but doesn't transfers the entire widget, And Once the data is transfered, The transfered widget no longer remains a gavato widget, It becomes a standard HTML Element which then can be accessed using DOM of JavaScript and typecasted to be a gavato widget again.

*Note: The widgets must be already Rendered if not*


**Parameters:**
 - `__target__` : The widget whose data will be the one , The another widget's data be appended to.
 - `___WIDGET___` : The widget whose data will be rendered in the data of the first widget.


**Returns:**
Nothing.

---

### `gavato_widget_link (__WIDGET__, ___WIDGET___)`
**Description:**
This function links the data of the 2 given widgets the returns the widget which is containing the linked widgets.


**Parameters:**
 - `__WIDGET__` : The first widget to be linked with another.
 - `___WIDGET___` : The second widget to be linked with first.


**Returns:**
Nothing.

---

**Documentation ends here**


## Contributing?
Check out the [Guidelines](CONTRIBUTING.md)

Copyright (c) ghgltggamer 2025 06:34PM 3/10/25