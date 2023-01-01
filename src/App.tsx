import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'

library.add(fas)

const  App:React.FC =()=> {

  return (
    <div className="App">
      <Icon icon='coffee' theme="primary" size="10x"/>
      <Menu defaultIndex={'0'} onSelect={(index)=>alert(index)} mode='vertical' defaultOpenSubMenus={['2']} >
      <MenuItem>Cool link</MenuItem>
      <MenuItem disabled>Cool link2</MenuItem>
      <SubMenu title="dropdown">
      <MenuItem>dropdown 1</MenuItem>
      <MenuItem>dropdown 2</MenuItem>
      <MenuItem>dropdown 3</MenuItem>
      </SubMenu>
      <MenuItem>Cool link3</MenuItem>
      </Menu>
   
    <hr/>
    <code>
      const a='b'
    </code>
    {/* </header> */}
    </div>
  )
}

export default App
