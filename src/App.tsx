import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
import { useState } from 'react'
import Button from './components/Button/button'
import Transition from './components/Transition/transition'

library.add(fas)

const  App:React.FC =()=> {

  const [show,setShow]=useState(false)
  return (
    <div className="App">
      <Icon icon='coffee' theme="primary" size="10x"/>
      <Menu defaultIndex={'0'} onSelect={(index)=>alert(index)} mode='horizontal' defaultOpenSubMenus={['2']} >
      <MenuItem>Cool link</MenuItem>
      <MenuItem disabled>Cool link2</MenuItem>
      <SubMenu title="dropdown">
      <MenuItem>dropdown 1</MenuItem>
      <MenuItem>dropdown 2</MenuItem>
      <MenuItem>dropdown 3</MenuItem>
      </SubMenu>
      <MenuItem>Cool link3</MenuItem>
      </Menu>
   <Button size='lg' onClick={()=>{setShow(!show)}}>Toggle</Button>
<Transition in={show} timeout={300} animation="zoom-in-left">
  <div><p>Editi
    <code>
      const a='b'
    </code></p></div>
</Transition>
    <hr/>
    {/* </header> */}
    </div>
  )
}

export default App
