# react-tw-components

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-tw-components.svg)](https://www.npmjs.com/package/react-tw-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Description
A library of React components that are designed to be fully responsive. I hope you no longer have to waste time on writing boilerplate code.

Do you:

## Install

```bash
npm install --save react-tw-components
```

## Usage

```jsx
import React from 'react'
import { HiAcademicCap } from 'react-icons/hi'

import { Sidebar, SidebarItem, SidebarSubitem, Appbar, Body } from 'react-tw-components'
import 'react-tw-components/dist/index.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { toggleMenu: false }
    this.handleEvent = this.handleEvent.bind(this)
  }

  handleEvent() {
    this.setState({ toggleMenu: !this.state.toggleMenu })
  }

  render() {
  const title = 'My site'
  return (
    <div className='container z-0'>
      <Appbar icon={<HiAcademicCap />} title={title} onClick={this.handleEvent} />
      <Sidebar icon={<HiAcademicCap />} title={title} state={this.state.toggleMenu} onClose={this.handleEvent}>
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

## License

MIT © [kpedneka](https://github.com/kpedneka)
