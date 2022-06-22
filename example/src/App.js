import React from 'react'
import { HiAcademicCap } from 'react-icons/hi'

import {
  Appbar,
  Body,
  Button,
  Sidebar,
  SidebarItem,
  SidebarSubitem,
  ThemeContext
} from 'react-tw-components'
import 'react-tw-components/dist/index.css'

const theme1 = {
  light: {
      primary: {
        bgColor: 'bg-green-400',
        bgColorHover: 'bg-green-300',
        textColor: 'text-white'
      },
      secondary: {
        bgColor: 'bg-gray-200',
        bgColorHover: 'bg-gray-200',
        textColor: 'text-black'
      }
  }
}

const theme2 = {
  light: {
      primary: {
        bgColor: 'bg-red-400',
        bgColorHover: 'bg-red-300',
        textColor: 'text-white'
      },
      secondary: {
        bgColor: 'bg-gray-300',
        bgColorHover: 'bg-gray-300',
        textColor: 'text-black'
      }
  }
}


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
   * The toggleTheme function only exists for the sake of showing it could be done 
   * dynamically. But you can just set it once when your component loads and leave it
   */
  toggleTheme() {
    this.setState({ clickCount: this.state.clickCount + 1 })
    if (this.state.clickCount % 2 === 0) {
      this.context.setTheme(theme2)
    } else {
      this.context.setTheme(theme1)
    }
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
          <button
            className='rounded-sm bg-black text-white py-2 px-4'
            onClick={this.toggleTheme}
          >
            Click to change themes
          </button>
          <Button 
            text='Hello' 
            icon={<HiAcademicCap/>} />
          
        </Body>
      </div>
    )
  }
}

export default App
