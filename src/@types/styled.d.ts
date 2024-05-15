// styled.d.ts

// import original module declarations
import 'styled-components'
import '@xstyled/system'
import {
  ITheme,
  DefaultTheme as XStyledDefaultTheme,
} from '@xstyled/styled-components'
import { MyTheme } from '@themes'

interface AppTheme extends MyTheme, ITheme, XStyledDefaultTheme {
  /* Customize your theme */
}

declare module '@xstyled/system' {
  export interface Theme extends AppTheme {}
}
declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
