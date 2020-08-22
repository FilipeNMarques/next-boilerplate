import {addDecorator} from '@storybook/react'

import withGlobalStyles from './withGLobalStyles'


addDecorator(withGlobalStyles)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
