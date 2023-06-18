import "styled-components/native"
import theme from './theme'

declare module 'styeled-components/native' {
  type ThemeType = typeof theme;

  export interface Defaulttheme extends ThemeType { }
}