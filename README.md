# react-tw-components

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-tw-components.svg)](https://www.npmjs.com/package/react-tw-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Description
A library of React components that are designed to be fully responsive. 

* Are you building a website?
* Does it take you really long to get started on the main part of your idea because of basic website components like navigation?
* Do you often find that there are many steps to set up your project before you can start working on your minimal viable project?

If you answered yes to any of these, this component is designed for you! I designed this package to allow you to just focus on your idea, and not get bogged down with details that shouldn't matter.

![Voila](https://media.giphy.com/media/1BFEEIo4h1BuTH8eqP/giphy.gif)

This library is under active development. It's my first contribution to open source, so I appreciate your patience as I iron out the bugs and design. I'm very open to contributors and working on new features. Keep in touch, happy hacking!

#### For documentaton, please visit [the repository](https://github.com/kpedneka/react-tw-components) on GitHub and view DOCUMENTATION.md in the documentation directory

## Install

```bash
npm install --save react-tw-components
```

## Basic usage

Example of how your ```App.js``` can look. This gives an example of how the different components can be used/structured in your application.
```jsx
import React from 'react'
import { HiAcademicCap } from 'react-icons/hi'

import {
  Sidebar,
  SidebarItem,
  SidebarSubitem,
  Appbar,
  Body,
  ThemeContext
} from 'react-tw-components'
import 'react-tw-components/dist/index.css'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { toggleMenu: false }
    this.handleEvent = this.handleEvent.bind(this)
  }

  /**
   * Example function that shows how to link the behavior of Appbar and Sidebar
   */
  handleEvent() {
    this.setState({ toggleMenu: !this.state.toggleMenu })
  }

  render() {
    const title = 'My site'
    return (
      <div>
        <Appbar
          icon={<HiAcademicCap />}
          title={title}
          onClick={this.handleEvent}
        />
        <Sidebar
          icon={<HiAcademicCap />}
          title={title}
          state={this.state.toggleMenu}
          onClose={this.handleEvent}
        >
          <SidebarItem icon={<HiAcademicCap />} title='Test' />
          <SidebarItem icon={<HiAcademicCap />} title='Test'>
            <SidebarSubitem title='Test' />
          </SidebarItem>
        </Sidebar>
        <Body>
          <p>The content of your website goes here</p>
        </Body>
      </div>
    )
  }
}

export default App

```

Your ```index.js``` file should import the theme context provider and wrap your application's root element around it. This is what allows all the ```react-tw-components``` components you use in your application to use a consistent theme.
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


## License

MIT © [kpedneka](https://github.com/kpedneka)
