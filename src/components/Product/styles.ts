import styled from 'styled-components/native'


interface PropsContainer {
    width?: string | undefined
    height?: string | undefined
}

export const Container = styled.View<PropsContainer>`
    background: #fff;
    width: 170px;
    height: auto;
    border-radius: 7px;
    padding: 10px;
    margin-right:5px;

`

export const ProductImage = styled.Image`
    width: 50%;
    height:120px;
    align-self:center;
    margin-bottom:5px;
    margin-top:10px;
`
export const ProductName = styled.Text`
    fonts-size: 14px;
    text-align: center;
    font-weight:400;
    color:#5C5C5C;
    margin-bottom:2px;

`
export const ProductValue = styled.Text`
    font-size: 12px;
    text-align: center;
    font-weight:400;
    color:#138D8E;

`