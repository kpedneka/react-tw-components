# react-tw-components

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-tw-components.svg)](https://www.npmjs.com/package/react-tw-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

const App = () => {
  const title = 'My site'
  return (
    <div className='container bg-black'>
      <Appbar title={title}/>
      <Sidebar icon={<HiAcademicCap />} title={title}>
        <SidebarItem icon={<HiAcademicCap />} title='Test' />
        <SidebarItem icon={<HiAcademicCap />} title='Test'>
          <SidebarSubitem title='Test' />
        </SidebarItem>
        <SidebarItem icon={<HiAcademicCap />} title='Test' />
      </Sidebar>
      <Body>
        <p>The content of your website goes here</p>
      </Body>
    </div>
  )
}

export default App
```

## License

MIT © [kpedneka](https://github.com/kpedneka)
