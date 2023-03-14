import { styled } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      '2xl': { fontSize: '$5xl' },
      '3xl': { fontSize: '$6xl' },
      '4xl': { fontSize: '$7xl' },
      '5xl': { fontSize: '$6xl' },
      '6xl': { fontSize: '$9xl' },
    },
    weight: {
      regular: {
        fontWeight: 400,
      },
      'semi-bold': {
        fontWeight: 500,
      },
      bold: {
        fontWeight: 700,
      },
    },
  },

  defaultVariants: {
    size: 'md',
    weight: 'bold',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading'
