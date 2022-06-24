import React from 'react'
import { HiAcademicCap, HiSparkles, HiCamera } from 'react-icons/hi'

import {
  Appbar,
  baseTheme,
  Body,
  Button,
  ClickField,
  Sidebar,
  SidebarItem,
  SidebarSubitem,
  TextField,
  ThemeContext,
} from 'react-tw-components'
import 'react-tw-components/dist/index.css'

const theme1 = baseTheme

const theme2 = {
  light: {
      primary: {
        accentColor: 'accent-red-400',
        bgColor: 'bg-red-400',
        bgHover: 'hover:bg-red-500',
        borderColor: 'border-red-500',
        focusColor: 'focus-visible:border-red-500',
        textColor: 'text-white'
      },
      secondary: {
        bgColor: 'bg-gray-200',
        bgHover: 'hover:bg-gray-400',
        borderColor: 'border-gray-400',
        focusColor: 'focus-visible:border-gray-400',
        textColor: 'text-black'
      }
  },
  dark: {
    primary: {
      accentColor: 'dark:accent-pink-600',
      bgColor: 'dark:bg-pink-600',
      bgHover: 'dark:hover:bg-pink-500',
      borderColor: 'dark:border-pink-500',
      focusColor: 'dark:focus-visible:border-pink-500',
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
        
          <p className='text-inherit'>The content of your website goes here</p>
        
          <Button text='Click to change theme' icon={<HiSparkles/>} onClick={this.toggleTheme} />
          
          <ClickField type='radio' id='1' name='test' value='Radio button 1' />
          <ClickField type='radio' id='2' name='test' value='Radio button 2'/>
          <ClickField type='radio' id='3' name='test' value='Radio button 3' />
          <ClickField type='checkbox' id='4' value='Checkbox 1'/>
          <ClickField type='checkbox' id='5' value='Checkbox 2'/>
          
          <TextField type='text' id='6' value='Input' name='Input'/>
        </Body>
      </div>
    )
  }
}

export default App
