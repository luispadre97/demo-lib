import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Radio from './index';

const RadioGroup = Radio.Group;

export default {
  title: 'Componente/RadioGroup',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: [
    <Radio value="1" key="1" >Opción 1</Radio>,
    <Radio value="2" key="2" >Opción 2</Radio>,
    <Radio value="3" key="3" >Opción 3</Radio>,
  ],
};

// export const Basic = () => {
//   return <>
//     <Radio onChange={e=>console.log(e)}>Primary Radio</Radio>
//   </>
// }


// export const UnderControl = () => {
//   return <RadioGroup value="3">
//     <Radio value="1" key="1" >Opción 1</Radio>
//     <Radio value="2" key="2" >Opción 2</Radio>
//     <Radio value="3" key="3" >Opción 3</Radio>,
//   </RadioGroup>
// }

  // export const Disabled = () => {
  //   return <>
  //     <Radio disabled> Radio</Radio>
  //   </>
  // }