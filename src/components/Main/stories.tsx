import { withKnobs, text } from '@storybook/addon-knobs'

import Main from './index'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
}

export const Basic = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text('Description', 'ReactJs, NextJs e Styled-components')}
  />
)
