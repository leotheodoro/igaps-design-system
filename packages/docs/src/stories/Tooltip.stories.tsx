import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps, Text } from '@igapsui/react'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    children: (
      <Text size="sm" weight="semi-bold">
        26 de Outubro - Avaliação Disponível
      </Text>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
