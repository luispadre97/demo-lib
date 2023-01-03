import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Menu from "./menu";
import SubMenu from "./subMenu";
import Item from "./menuItem";

const menuMeta: ComponentMeta<typeof Menu> = {
    title: 'Menu',
    id: 'Menu',
    component: Menu,
    subcomponents: { 'SubMenu': SubMenu, 'Item': Item },
    args: {
        defaultIndex: '1'
    },
    argTypes: {
        defaultIndex: {
            control: 'color',
            description: 'normal test'
        }
    },
    parameters: {
        controls: {
            matchers: {
                // date: /mode$/,
            }
        }
    }
}
export default menuMeta

export const Template: ComponentStory<typeof Menu> = (args) => (
    <Menu defaultIndex='0' {...args} >
        <Item>
            cool link
        </Item>
        <Item>
            cool link 2
        </Item>
        <Item disabled>
            disabled
        </Item>
        <SubMenu title="drop down option">
            <Item>
                Option 1   
            </Item>
            <Item>
            Option 2
            </Item>
        </SubMenu>
    </Menu>
)

export const DefaultMenu = Template.bind({})
DefaultMenu.storyName = 'Menu'

export const ClickMenu = Template.bind({})
ClickMenu.args = {
    defaultIndex: '0',
    mode: 'vertical'
}
ClickMenu.argTypes = {
    defaultIndex: {
        control: 'color'
    }
}
ClickMenu.parameters = {
    backgrounds: {
        values: [
            { name: 'red', value: '#f00' },
            { name: 'green', value: '#0f0' },
        ]
    }
}
ClickMenu.storyName = 'Menu1'