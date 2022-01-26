import React from 'react'
import { HiAcademicCap } from 'react-icons/hi'

import { Sidebar, SidebarItem, SidebarSubitem, Appbar, Body, ThemeContext } from 'react-tw-components'
import 'react-tw-components/dist/index.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { toggleMenu: false, clickCount: 0 }
    this.handleEvent = this.handleEvent.bind(this)
    this.toggleTheme = this.toggleTheme.bind(this)
  }
  /**
   * This is the Context that holds the theme and a function to update the theme
   * See toggleTheme() for an example of how the theme can be updated from it's default value for your app
   */
  static contextType = ThemeContext

  /**
   * Example function that shows how to link the behavior of Appbar and Sidebar
   */
  handleEvent() {
    this.setState({ toggleMenu: !this.state.toggleMenu })
  }

  /**
   * Example function that shows how a theme can be updated from your application.
   */
  toggleTheme() {
    this.setState({ clickCount: this.state.clickCount + 1 })
    this.state.clickCount % 2 === 0 ? this.context.setTheme({ color: 'red', intensity: '400'}) : this.context.setTheme({ color: 'green', intensity: '400'})
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
        <button className='rounded-full bg-black text-white p-2' onClick={this.toggleTheme}>Click to change theme</button>
      </Body>
    </div>
  )
}
}

export default App
