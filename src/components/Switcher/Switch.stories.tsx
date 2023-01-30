import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { CloseOutlined, CheckOutlined } from '@gapsi-design/icons';

// import Switch from './Switch';
import Button from '../button/index';
import Icon from '../Icon';
import { Switch } from './Switch';

export default {
  title: 'Componente/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => (
	<Switch {...args}></Switch>
)

export const Primary = Template.bind({});

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

export const Basic: React.FC = () => <Switch defaultChecked onChange={onChange} />;

export const Disabled: React.FC = () => {
  const [disabled, setDisabled] = useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <Switch disabled={disabled} defaultChecked />
      <br /><br />
      <Button btnType="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </>
  );
};

export const CheckedChild: React.FC = () => (
  <>
    <Switch checkedChildren="Encendido" unCheckedChildren="Apagado" defaultChecked />
    <br />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <Switch
      checkedChildren={<Icon icon={'check-circle'} />}
      unCheckedChildren={<Icon icon={'close'}/>}
      defaultChecked
    />
  </>
);