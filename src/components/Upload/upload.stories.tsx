import { ComponentMeta } from '@storybook/react'
import { Upload } from './upload'
import Button from '../Button/button'
import Icon from '../Icon/icon'

export default { 
  title: 'Componente/Upload',
  id: 'Upload',
  component: Upload,
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    }
  }
} as ComponentMeta<typeof Upload>

export const ASimpleUpload = (args:any) => (
  <Upload
    {...args}
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
  >
    <Button size="lg" btnType="primary"><Icon icon="upload" /> Haga clic para cargar </Button>
  </Upload>  
)
ASimpleUpload.storyName = 'Componente de carga común'
export const BCheckUpload = (args:any) => {
  const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('file too big')
      return false;
    }
    return true;
  }
  return (
    <Upload
      {...args}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={checkFileSize}
    >
      <Button size="lg" btnType="primary"><Icon icon="upload" /> ¡No puede pasar más de 50Kb! </Button>
    </Upload>  
  )
}
BCheckUpload.storyName = 'Verifique el tamaño del archivo antes de cargarlo'
export const CDragUpload = (args:any) => (
  <Upload
    {...args}
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    name="fileName"
    multiple
    drag
  >
    <Icon icon="upload" size="5x" theme="secondary" />
    <br/>
    <p>Haga clic o arrastre a esta área para cargar</p>
  </Upload>
)
CDragUpload.storyName = 'arrastrar para cargar'