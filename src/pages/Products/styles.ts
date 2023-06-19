import { ScrollView } from 'react-native'
import styled from "styled-components/native"

export const FullHeightScrollView = styled(ScrollView).attrs({
    flexGrow: 1
})`
flex:1;
`

export const Content = styled.View`
padding-top:20px;
padding-right:20px;
padding-left:20px;
`