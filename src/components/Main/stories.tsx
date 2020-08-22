import { Story, Meta } from '@storybook/react/types-6-0'

import Main from './index'

export default {
  title: 'Main',
  component: Main,
  // To set default args
  args: {
    title: 'Default title',
    description: 'Default description'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
// With you want overwrite args
Basic.args = {
  title: 'Overwrite args title',
  description: 'Overwrite description'
}

export const Default: Story = (args) => <Main {...args} />
