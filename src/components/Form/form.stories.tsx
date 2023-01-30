import { useRef } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Form, { IFormRef } from './form'
import Item from './formItem'
import {Input} from '../Input/input'
import {Button} from '../Button/button'
import { CustomRule } from './useStore'
import Select from '../Select'

const meta: ComponentMeta<typeof Form> ={ 
  title: 'Componente/Form',
  id: 'Form',
  component: Form,
  subcomponents: { 'Item': Item },
  decorators: [
    (Story) => (
      <div style={{ width: '550px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    }
  }
}
export default meta
const confirmRules: CustomRule[] = [
  { type: 'string',required: true, min: 3, max: 8 },
  ({ getFieldValue }) => ({
    asyncValidator(rule, value) {
      console.log('the value', getFieldValue('password'))
      console.log(value)
      return new Promise((resolve, reject) => {
        if (value !== getFieldValue('password')) {
          reject('The two passwords that you entered do not match!')
        }
        setTimeout(() => {
          resolve()
        }, 1000)
      })

    }
  })
]
export const ABasicForm = (args:any) => {
  return (
    <Form {...args} >
      <Item label='nombre de usuario' name='name' rules={[{type: 'string',required: true, min: 3}]}>
        <Input/>
      </Item>
      <Item label='contraseña' name='password' rules={[{type: 'string',required: true, min: 3, max: 8 }]}>
        <Input type="password"/>
      </Item>
      <div className='gapsi-form-submit-area'>
        <Button type="submit" btnType='primary'>iniciar sesión</Button>
      </div>
    </Form>
  )
}
ABasicForm.storyName = 'Formulario básico de inicio de sesión'

export const BRegForm = (args:any) => { 
  const initialValues = {
    agreement: false
  }
  return (
    <Form {...args} initialValues={initialValues}>
      <Item label='correo' name='email' rules={[{ type: 'email',required: true }]}>
        <Input/>
      </Item>
      <Item label='contraseña' name='password' rules={[{type: 'string',required: true, min: 3, max: 8 }]}>
        <Input type="password"/>
      </Item>
      <Item 
        label='género' 
        name='gender'
        rules={[{type: 'string',required: true }]}
        getValueFromEvent={(e) => e }
        valuePropName='defaultValue'
      >
        <Select
          placeholder="Por favor seleccione género"
        >
          <Select.Option value="masculino" />
          <Select.Option value="Femenino" />
        </Select>
      </Item>
      <div className='agreement-section' style={{ 'display': 'flex', 'justifyContent': 'center'}}>
        <Item
          name='agreement' 
          rules={[{ type: 'enum', enum: [true], message: 'Por favor acepta el acuerdo'}]}
          getValueFromEvent={(e) => e.target.checked }
          valuePropName='checked'
        >
          <input type="checkbox"/>
        </Item>
        <span className="agree-text">Al registrarte, aceptas<a href='#'>Acuerdo del Usuario</a></span>
      </div>
      <div className='gapsi-form-submit-area'>
        <Button type="submit" btnType='primary'>iniciar sesión</Button>
      </div>
    </Form>
  )
}
BRegForm.storyName = 'Formulario de registro, admite varios componentes de FormItem'
export const CFullForm = (args:any) => {
  const ref = useRef<IFormRef>()
  const resetAll = () => {
    console.log('form ref', ref.current)
    console.log('get value', ref.current?.getFieldValue('username'))
    ref.current?.resetFields()
    
  }
  return (
    <Form initialValues={{ username: 'gapsi', agreement: false }} {...args} ref={ref}>
      { ({ isValid, isSubmitting }) => (
      <>
      <Item label='nombre de usuario' name='username' rules={[{ type: 'email', required: true }]}>
        <Input/>
      </Item>
      <Item label='contraseña' name='password' rules={[{type: 'string', required: true, min: 3, max: 8 }]}>
        <Input type='password'/>
      </Item>
      <Item label='confirmar contraseña' name='confirmPwd' rules={confirmRules}>
        <Input type='password'/>
      </Item>
      <div className='agreement-section' style={{ 'display': 'flex', 'justifyContent': 'center'}}>
        <Item 
          name='agreement' 
          valuePropName='checked' 
          getValueFromEvent={(e) => e.target.checked}
          rules={[{ type: 'enum', enum: [true], message: 'Por favor acepta el acuerdo'}]}
        >
          <input type="checkbox"/>
        </Item>
        <span className="agree-text">Al registrarte, aceptas<a href='#'>Acuerdo del Usuario</a></span>
      </div>
      <div className='gapsi-form-submit-area'>
        <Button type="submit" btnType='primary'>iniciar sesión {isSubmitting ? 'verificando' : 'verificado'} {isValid ? 'exitoso😄' : 'fallado 😢'} </Button>
        <Button type="button" onClick={resetAll}>Reiniciar</Button>
      </div>
      </>
    )}
    </Form>
  )
}

CFullForm.storyName = 'Reglas personalizadas, instancias de formulario de llamada'