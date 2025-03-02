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
g++ -std=c++17 -o bin/mklib src/main.cc

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
g++ -std=c++17 -o bin/mklib src/main.cc

# Gavato
git clone https://github.com/darkyboys/gavato.git
cp bin/mklib gavato
cd gavato
./mklib
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

## Contributing?
Check out the [Guidelines](CONTRIBUTING.md)
