import {StoryFn} from '@storybook/addons'

import GlobalStyles from '../src/styles/global'


const withGLobalStyles = (storyFn: StoryFn) => (
  <>
  <GlobalStyles />
  {storyFn()}
  </>
)


export default withGLobalStyles
