import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import Menu from "./components/Menu/menu"
import MenuItem from "./components/Menu/menuItem"
import SubMenu from "./components/Menu/subMenu"
import Icon from "./components/Icon/icon"
import { useState } from "react"
import Button from "./components/Button/button"
import Transition from "./components/Transition/transition"
import Alert from "./components/Alert"
import Tabs from "./components/Tabs/tabs"
import TabItem from "./components/Tabs/tabItem"
import { Chip } from "./components/Chip/chip"
import { Empty } from "./components/Empty/empty "
import { Text } from "./components/Text/text"

library.add(fas)

const App: React.FC = () => {
	const [show, setShow] = useState(false)
	return (
		<div className="App">
			<Text text="title" type="title" className={"is-1"}/>
			<Text text="subtitle" type="subtitle"/>
			<br/>
			<Empty/>
			<br/>
			<Chip text="primary" status="primary" ></Chip>
			<Chip text="default" status="default" ></Chip>
			<Chip text="danger" status="danger" ></Chip>
			<Chip text="warning" status="warning" ></Chip>
			<Chip text="success" status="success" ></Chip>
			
			<br/>
			<Button>sdf</Button>
			<Icon icon="coffee" theme="primary" size="10x" />
			<Menu
				defaultIndex={"0"}
				onSelect={(index) => alert(index)}
				mode="horizontal"
				defaultOpenSubMenus={["2"]}
			>
				<MenuItem>Cool link</MenuItem>
				<MenuItem disabled>Cool link2</MenuItem>
				<SubMenu title="dropdown">
					<MenuItem>dropdown 1</MenuItem>
					<MenuItem>dropdown 2</MenuItem>
					<MenuItem>dropdown 3</MenuItem>
				</SubMenu>
				<MenuItem>Cool link3</MenuItem>
			</Menu>
			<Alert title="hola" />
			<Alert
				title="hola"
				description="Saludos"
				type="danger"
				// closable={false}
				onClose={() => alert("s")}
			/>
			<Tabs>
				<TabItem label={"ss"}>{"React"}</TabItem>
				<TabItem label={"ss2"}>{"Node"}</TabItem>
			</Tabs>
			<Button
				size="lg"
				onClick={() => {
					setShow(!show)
				}}
			>
				Toggle
			</Button>
			<Transition in={show} timeout={300} animation="zoom-in-left">
				<div>
					<p>
						Editi
						<code>const a='b'</code>
					</p>
				</div>
			</Transition>
			<hr />
		</div>
	)
}

export default App
