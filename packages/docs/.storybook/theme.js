import { create } from '@storybook/theming';

import igapsLogo from '../assets/igaps_logo.png'

export default create({
  base: 'light',
  brandTitle: 'iGAPS Design System',
  brandUrl: 'https://igaps.com.br',
  brandImage: igapsLogo,
  brandTarget: '_self',
});