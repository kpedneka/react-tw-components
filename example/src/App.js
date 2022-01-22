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
