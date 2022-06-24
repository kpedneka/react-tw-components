## How to use custom themes in react-tw-components

A default theme is provided, and defining a custom theme is supported as well. To use the default theme, do nothing - it is already there. For custom themes, you will need to understand the structure of the theme object and it's valid properties/values.


By default, there is a light and a dark theme. Inside each theme, there are 2 groups of colors: primary and secondary. The actual color values are defined in [tailwindcss v3 color palette](https://tailwindcss.com/docs/customizing-colors#default-color-palette)


```jsx
/**
 * This is a snippet of the base theme that is provided with react-tw-components
 */
const baseTheme = {
  light: {
      primary: {
        accentColor: 'accent-green-400',
        bgColor: 'bg-green-400',
        bgHover: 'hover:bg-green-500',
        borderColor: 'border-green-500',
        focusColor: 'focus-visible:border-green-500',
        textColor: 'text-white'
      },
      secondary: {
        bgColor: 'bg-gray-100',
        bgHover: 'hover:bg-gray-300',
        borderColor: 'border-gray-300',
        focusColor: 'focus-visible:border-gray-300',
        textColor: 'text-black'
      }
  },
  dark: {
    primary: {
      accentColor: 'dark:accent-emerald-700',
      bgColor: 'dark:bg-emerald-700',
      bgHover: 'dark:hover:bg-emerald-600',
      borderColor: 'dark:border-emerald-600',
      focusColor: 'dark:focus-visible:border-emerald-600',
      textColor: 'dark:text-white'
    },
    secondary: {
      bgColor: 'dark:bg-slate-700',
      bgHover: 'dark:hover:bg-slate-600',
      borderColor: 'dark:border-slate-600',
      focusColor: 'dark:focus-visible:border-slate-600',
      textColor: 'dark:text-white'
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