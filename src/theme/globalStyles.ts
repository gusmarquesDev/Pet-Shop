import { ScrollView } from 'react-native'
import styled from "styled-components/native"

export const FullHeightScrollView = styled(ScrollView).attrs({
    flexGrow: 1
})`
flex:1;`

export const Title = styled.Text`
font-size: 16px;
font-weight:bold;
margin-horizontal:2%;
margin-vertical:15px;
`