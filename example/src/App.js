import React from 'react'
import { HiAcademicCap } from 'react-icons/hi'

import { Sidebar, SidebarItem, SidebarSubitem } from 'react-tw-components'
import 'react-tw-components/dist/index.css'

const App = () => {
  return(
    <Sidebar icon={<HiAcademicCap />} title="My site">
      <SidebarItem icon={<HiAcademicCap />} title="Hello"/>
      <SidebarItem icon={<HiAcademicCap />} title="Hello">
        <SidebarSubitem title="Test" />
      </SidebarItem>
      <SidebarItem icon={<HiAcademicCap />} title="Hello"/>
    </Sidebar>
    );
}

export default App
