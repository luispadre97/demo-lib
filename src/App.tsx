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
import { Columns } from "./components/Columns/colums"
import { Column } from "./components/Columns/column"
// import "bulma/css/bulma.min.css"
import { Columns as ColumnsBulma } from "react-bulma-components"
import { Input } from "./components/Input/input"

library.add(fas)

const App: React.FC = () => {
	const [show, setShow] = useState(false)
	return (
		<div className="App">

<Column className="is-7">
<Input  append={"x"}/>
<Input
    placeholder="disabled input"
    disabled 
  />
<Input
      defaultValue="large size"
      size="lg"
    />
    <Input
      placeholder="small size"
      size="sm"
    />
<Input
    placeholder="input with icon"
    icon="search"
  />  
	    <Input
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input
      defaultValue="google"
      append=".com"
    />
</Column>
			<br/>
			<ColumnsBulma>
				<ColumnsBulma.Column
					style={{ background: "purple", color: "white" }}
					size={4}
				>
					df
				</ColumnsBulma.Column>
				<ColumnsBulma.Column>df</ColumnsBulma.Column>
			</ColumnsBulma>
			<Columns>
				<Column className="is-1" style={{ background: "blue" }}>
					as
				</Column>
				<Column style={{ background: "orange" }}>as</Column>
			</Columns>
			<Columns>
				<Column className="is-2" style={{ background: "blue" }}>
					as
				</Column>
				<Column style={{ background: "orange" }}>as</Column>
			</Columns>

			<Columns>
				<Column className="is-3" style={{ background: "blue" }}>
					as
				</Column>
				<Column style={{ background: "orange" }}>as</Column>
			</Columns>

			<Columns>
				<Column className="is-4" style={{ background: "blue" }}>
					as
				</Column>
				<Column style={{ background: "orange" }}>as</Column>
			</Columns>
			<Columns>
				<Column className="is-5" style={{ background: "blue" }}>
					as
				</Column>
				<Column style={{ background: "orange" }}>as</Column>
			</Columns>

			<Columns>
				<Column className="is-6" style={{ background: "blue" }}>
					as
				</Column>
				<Column style={{ background: "orange" }}>as</Column>
			</Columns>

			<Columns>
				<Column className="is-7" style={{ background: "blue" }}>
					as
				</Column>
				<Column style={{ background: "orange" }}>as</Column>
			</Columns>
			<Columns>
				<Column className="is-8" style={{ background: "blue" }}>
					as
				</Column>
				<Column style={{ background: "orange" }}>as</Column>
			</Columns>

			<Columns>
				<Column className="is-9" style={{ background: "blue" }}>
					as
				</Column>
				<Column style={{ background: "orange" }}>as</Column>
			</Columns>
			<Columns>
				<Column className="is-10" style={{ background: "blue" }}>
					as
				</Column>
				<Column style={{ background: "orange" }}>as</Column>
			</Columns>
			<Columns>
				<Column className="is-11" style={{ background: "blue" }}>
					as
				</Column>
				<Column style={{ background: "orange" }}>as</Column>
			</Columns>
			<Columns>
				<Column className="is-12" style={{ background: "blue" }}>
					as
				</Column>
				<Column style={{ background: "orange" }}>as</Column>
			</Columns>

			<Columns>
				<Column className="is-1">prueba</Column>
				<Column className="is-4">prueba</Column>
				<Column className="is-7">prueba</Column>
				<Column className="is-1">prueba</Column>
				<Column>prueba</Column>
			</Columns>
			<br />

			<Columns>
				<Column className="is-full" style={{ background: "red" }}>
					as
				</Column>
				<Column style={{ background: "blue" }}>as</Column>
				<Column style={{ background: "blue" }}>as</Column>
				<Column style={{ background: "blue" }}>as</Column>
				<Column style={{ background: "blue" }}>as</Column>
				<Column style={{ background: "blue" }}>as</Column>
				<Column style={{ background: "blue" }}>as</Column>
			</Columns>
			<br />
			<Text text="title" type="title" className={"is-1"} />
			<Text text="subtitle" type="subtitle" />
			<br />
			<Empty />
			<Empty  description="No hay datos"/>
			<Empty imageStyle={{
      height: 60,
    }} image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"  description="No hay datos"/>
			<br />
			<Chip text="primary" status="primary"></Chip>
			<Chip text="default" status="default"></Chip>
			<Chip text="danger" status="danger"></Chip>
			<Chip text="warning" status="warning"></Chip>
			<Chip text="success" status="success"></Chip>

			<br />
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
