import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@ltpds/react'

export default {
  title: 'Components/Toast',
  component: Toast,
  args: {
    title: 'Avaliação disparada',
    date: new Date(),
  },
  argTypes: {
    date: {
      control: 'date',
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
