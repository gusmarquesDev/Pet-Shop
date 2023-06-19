import { ScrollView } from 'react-native'
import styled from "styled-components/native"

export const FullHeightScrollView = styled(ScrollView).attrs({
    flexGrow: 1,

})`
flex:1;
`

export const DetailTextProdut = styled.Text`
font-size: 16px;
font-weight:400;
margin-top:10px;
margin-horizontal:2%;
margin-bottom:10px;
color:#636363;
`
export const TittleProduct = styled.Text`
font-size: 30px;
font-weight:bold;
color:#353535;
`
export const PriceTextProduct = styled.Text`
font-size: 28px;
font-weight:500;
margin-top:15px;
margin-bottom:15px;
color:#353535;
`