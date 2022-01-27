## How to use custom themes in react-tw-components

A default theme is provided, and defining a custom theme is supported as well. To use the default theme, do nothing - it is already there. For custom themes, you will need to understand the structure of the theme object and it's valid properties/values.


By default, there is a light and a dark theme. Inside each theme, there are 3 groups of colors: primary, secondary, and default. The actual color values are defined in [tailwindcss v2 color palette](https://v2.tailwindcss.com/docs/customizing-colors#color-palette-reference)


```jsx
/**
 * This is a snippet of the base theme that is provided with react-tw-components
 */
const baseTheme = {
    light: {
        primary: {
            bgColor: 'bg-green-500',
            bgColorHover: 'bg-green-400',
            textColor: 'text-black'
        },
        secondary: {
            ...
        }
    },
    dark: {
        primary: {
            ...
        },
        secondary: {
            ...
        }
    }
}
```


The above structure for the theme is required. You can definitely add more fields, but if you remove any then you will find unexpected behavior in CSS since components provided by react-tw-components use these.


```jsx
/**
 * This is an example for defining additional fields that your project's components can use
 */
const baseTheme = {
    light: {
        primary: {
            ... ,
            myBgColor: 'bg-indigo-500'
        },
        secondary: {
            ... ,
            myBgColor: 'bg-indigo-500'
        }
    },
    dark: {
        primary: {
            ... ,
            myBgColor: 'bg-indigo-500'
        },
        secondary: {
            ... ,
            myBgColor: 'bg-indigo-500'
        }
    }
}

```

After creating your custom theme object, you can set it by calling the ```setTheme()``` function made available by the theme provider component. If you want the theme to applied across your website, you should make the theme provider component your root component. Below is an example that shows you how

In your ```index.js```
```jsx
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'react-tw-components'

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)

```