import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from './index';
import Icon from '../Icon';



export default {
  title: 'Componente/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Avatar',
};

export const Basic = () => {
  return <>
  <div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
    <Avatar size={64} icon={<Icon icon={'user'}/>} />
    <Avatar size="large" icon={<Icon icon={'user'}/>} />
    <Avatar icon={<Icon icon={'user'}/>} />
    <Avatar size="small" icon={<Icon icon={'user'}/>} />
  </div>
  <br/>
  <div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
    <Avatar shape="square" size={64} icon={<Icon icon={'user'}/>} />
    <Avatar shape="square" size="large" icon={<Icon icon={'user'}/>} />
    <Avatar shape="square" icon={<Icon icon={'user'}/>} />
    <Avatar shape="square" size="small" icon={<Icon icon={'user'}/>} />
  </div>
</>
}

export const Type = () => (
  <>
    <Avatar icon={<Icon icon={'user'}/>} />
    <Avatar>U</Avatar>
    <Avatar size={40}>USER</Avatar>
    <Avatar src="https://joeschmoe.io/api/v1/random" />
    <Avatar src={<img src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
    <Avatar style={{ backgroundColor: '#87d068' }} icon={<Icon icon={'user'}/>} />
  </>
);