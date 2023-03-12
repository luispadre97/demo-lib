// import { library } from "@fortawesome/fontawesome-svg-core"
// import { fas } from "@fortawesome/free-solid-svg-icons"
// import Menu from "./components/Menu/menu"
// import MenuItem from "./components/Menu/menuItem"
// import SubMenu from "./components/Menu/subMenu"
// import Icon from "./components/Icon/icon"
// import React, { useEffect, useRef, useState } from "react"
// import Button from "./components/Button/button"
// import Transition from "./components/Transition/transition"
// import Alert from "./components/Alert"
// import Tabs from "./components/Tabs/tabs"
// import TabItem from "./components/Tabs/tabItem"
// import { Chip } from "./components/Chip/chip"
// import { Empty } from "./components/Empty/empty "
// import { Text } from "./components/Text/text"
// import { Columns } from "./components/Columns/colums"
// import { Column } from "./components/Columns/column"
// // import "bulma/css/bulma.min.css"
// // import { Columns as ColumnsBulma } from "react-bulma-components"
// import { Input } from "./components/Input/input"
// import { Card } from "./components/Card/card"
// import { Modal } from "./components/Modal/modal"
// import { CreditCard } from "./components/CreditCard/creditCard"
// import { FlipCard } from "./components/FlipCard/flipCard"

// import { Upload } from "./components/Upload/upload"
// import Progress from "./components/Progress"
// import { Form, IFormRef } from "./components/Form/form"
// import { FormItem } from "./components/Form/formItem"
// import { CustomRule } from "./components/Form/useStore"
// import { Tooltip } from "./components/Tooltip/tooltip"
// import ThemeLibrary from "./components/Theme/theme"
import { GCDecisionTree } from "./components/GCDecisionTree/gCDecisionTree"
import KeyPress from "./tools/KeyPress/index"
// import ColumnV from "./components/ColumnsV2/Columns"
// import Table from "./components/Table/table"

// library.add(fas)
import "sweetalert2/src/sweetalert2.scss"

import BarChart from "./components/D3/d3"

interface DatosGrafica {
	nombre: string
	valor: number
}

const data = [
	{ name: "A", value: 100 },
	{ name: "B", value: 200 },
	{ name: "C", value: 50 },
	{ name: "D", value: 400 },
]

const width = 500
const height = 300
const color = "blue"
const textColor = "black"
const xAxisLabel = "Letras"
const yAxisLabel = "Valores"
const margin = { top: 20, right: 30, bottom: 30, left: 40 }
const App: React.FC = () => {
	return (
		<>
			{/* <Columns> */}
			{/* <GCDecisionTree /> */}
			{/* <KeyPress/> */}
			<div className="grafica-barras">
				<BarChart
					data={data}
					width={width}
					height={height}
					color={color}
					textColor={textColor}
					xAxisLabel={xAxisLabel}
					yAxisLabel={yAxisLabel}
					margin={margin}
				/>
			</div>
			{/* </Columns> */}
		</>
	)
	const [title, setTitle] = useState("")
	const [show, setShow] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const Back = () => <div className="x">Example Back</div>
	const Front = () => <div className="x">Example Front</div>
	const checkFileSize = (file: File) => {
		if (Math.round(file.size / 1024) > 50) {
			alert("Archivo demasiado Grande")
			return false
		}
		return true
	}
	// const filePromise = (file: File) => {
	// 	const newFile = new File([file], "new_name.png", { type: file.type })
	// 	return Promise.resolve(newFile)
	// }
	const confirmRules: CustomRule[] = [
		{ type: "string", required: true, min: 3, max: 8 },
		({ getFieldValue }) => ({
			asyncValidator(rule, value) {
				// console.log(getFieldValue, "getFieldValue")
				// console.log("the value", getFieldValue("pwd"))
				// console.log(value)
				if (value !== getFieldValue("pwd")) {
					return Promise.reject(
						"¡Las dos contraseñas que ingresó no coinciden!",
					)
				}
				return Promise.resolve()
			},
		}),
	]
	const SimpleUpload = () => {
		return (
			<Columns>
				<Column className="s1">
					<Upload
						action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
						// onChange={action('changed')}
						// onSuccess={action('success')}
						// onProgress={action('progress')}
						// onRemove={action('removed')}
					>
						<Button size="lg" btnType="primary">
							<Icon icon="upload" /> Haga clic para cargar{" "}
						</Button>
					</Upload>
				</Column>
				{/* // <Upload
			// action="https://cors-anywhere.herokuapp.com/https://www.mocky.io/vs/5cc8019d300000980a055e76"
			// // action="https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts"
			// // onChange={}
			// // beforeUpload={checkFileSize}
			// beforeUpload={filePromise}
			// name="fileName"
			// data={{'key':'value'}}
			// headers={{'X-Powered-By':'gapsi'}}
			// accept='.jgp'
			// multiple
			// drag={false} */}
				<Column className="s1">
					<Upload
						action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
						// onChange={action('changed')}
						beforeUpload={checkFileSize}
					>
						<Button size="lg" btnType="primary">
							<Icon icon="upload" /> ¡No puede pasar más de 50Kb!{" "}
						</Button>
					</Upload>
				</Column>
				<Column className="s1">
					<Upload
						action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
						// onChange={action('changed')}
						// onRemove={action('removed')}
						name="fileName"
						multiple
						drag
					>
						<Icon icon="upload" size="5x" theme="secondary" />
						<br />
						<p>Haga clic o arrastre a esta área para cargar</p>
					</Upload>
				</Column>
			</Columns>
		)
	}

	return (
		<div className="App">
			<br />
			<Card
				style={{
					margin: 12,
					padding: 12,
					justifyContent: "center",
					alignItems: "center",
					display: "flex",
				}}
			>
				<Tooltip text="right" position="right">
					right
				</Tooltip>{" "}
				<Tooltip text="bottom" position="bottom">
					bottom
				</Tooltip>{" "}
				<Tooltip text="top" position="top">
					top
				</Tooltip>{" "}
				<Tooltip text="left" position="left">
					left
				</Tooltip>{" "}
			</Card>
			<br />
			<Progress percent={10} showText />
			<br />
			<SimpleUpload />
			{title}
			{/*  */}
			<FlipCard back={<Back />} front={<Front />}></FlipCard>
			{/* <FlipCard width={300} height={100} back={<Back />} front={<Front />}></FlipCard> */}
			<CreditCard />
			<br />
			<Button
				size="lg"
				onClick={() => {
					setShowModal(!showModal)
				}}
			>
				Modals
			</Button>
			<Modal
				onCancel={() => setShowModal(true)}
				onOk={() => setShowModal(false)}
				open={showModal}
				animation="zoom-in-left"
				title={"Example Modal"}
			>
				<>args</>
			</Modal>
			<Columns>
				<Column>
					<Card img="https://materializecss.com/images/office.jpg" />
				</Column>
				<Column>
					<Card
						styleImg={{ width: "250px", height: "200px" }}
						img="https://materializecss.com/images/office.jpg"
						title="hola mundo"
					/>
				</Column>
				<Column>
					<Card
						styleImg={{ width: "250px", height: "200px" }}
						title="hola mundo"
					/>
				</Column>
				<Column>
					<Card
						img="https://materializecss.com/images/office.jpg"
						title="CARD 2title"
					>
						Card 2
					</Card>
				</Column>
			</Columns>
			{/* <Card title={"s"} style={{width:'250px',height:'400px'}} styleImg="https://materializecss.com/images/office.jpg">
Hka
			</Card> */}
			<Column className="is-7">
				<Input append={"x"} />
				<Input placeholder="disabled input" disabled />
				<Input defaultValue="large size" size="lg" />
				<Input placeholder="small size" size="sm" />
				<Input placeholder="input with icon" icon="search" />
				<Input defaultValue="prepend text" prepend="https://" />
				<Input defaultValue="google" append=".com" />
			</Column>
			<br />
			<Columns>
				<Column className="is-1">
					<Alert title="is-1" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>
			<Columns>
				<Column className="is-2">
					<Alert title="is-2" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>

			<Columns>
				<Column className="is-3">
					<Alert title="is-3" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>

			<Columns>
				<Column className="is-4">
					<Alert title="is-4" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>
			<Columns>
				<Column className="is-5">
					<Alert title="is-5" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>

			<Columns>
				<Column className="is-6">
					<Alert title="is-6" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>

			<Columns>
				<Column className="is-7">
					<Alert title="is-7" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>
			<Columns>
				<Column className="is-8">
					<Alert title="is-8" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>

			<Columns>
				<Column className="is-9">
					<Alert title="is-9" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>
			<Columns>
				<Column className="is-10">
					<Alert title="is-10" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>
			<Columns>
				<Column className="is-11">
					<Alert title="is-11" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>
			<Columns>
				<Column className="is-12">
					<Alert title="is-12" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>

			<Columns>
				<Column className="is-1">
					{" "}
					<Alert title="is-1" closable={false} />
				</Column>
				<Column className="is-4">
					{" "}
					<Alert title="is-4" closable={false} />
				</Column>
				<Column className="is-7">
					{" "}
					<Alert title="is-7" closable={false} />
				</Column>
				<Column className="is-1">
					{" "}
					<Alert title="is-1" closable={false} />
				</Column>
				<Column>
					{" "}
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>
			<br />

			<Columns>
				<Column className="is-full">
					<Alert title="auto" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>
			<br />
			<Text text="title" type="title" className={"is-1"} />
			<Text text="subtitle" type="subtitle" />
			<br />
			<Empty />
			<Empty description="No hay datos" />
			<Empty
				imageStyle={{
					height: 60,
				}}
				image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
				description="No hay datos"
			/>
			<br />
			<Chip text="primary" status="primary"></Chip>
			<Chip text="default" status="default"></Chip>
			<Chip text="danger" status="danger"></Chip>
			<Chip text="warning" status="warning"></Chip>
			<Chip text="success" status="success"></Chip>

			<br />
			<Button btnType="danger">danger</Button>
			<Button btnType="default">default</Button>
			<Button btnType="link">link</Button>
			<Button btnType="primary">primary</Button>
			<Button size="lg">lg</Button>
			<Button size="sm">sm</Button>

			<br />
			<Icon icon="coffee" theme="primary" size="10x" />
			<br />
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
				<TabItem label={"Front"}>{"React"}</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>

				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Laravel"}>{"Laravel"}</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Back"}>
					{"Node"} {"Java"}
				</TabItem>
				<TabItem label={"Redux"}>{"Redux"}</TabItem>
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
