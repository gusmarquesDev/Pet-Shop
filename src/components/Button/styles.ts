import styled, { css } from 'styled-components/native'

type ButtonProps = {
    bg?: string;
    color?: string;
    border?: string;
}

type LabelProps = {
 color:string
}

export const LabelButton = styled.Text<LabelProps>`
${({ color }) => css`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 26px;
display: flex;
align-items: center;
text-align: center;
color: ${color ? color : '#fff'};
`}`

export const ContainerButton = styled.TouchableHighlight <ButtonProps>`
${({ bg, color, border }) => css`
flex-direction: row;
margin:10px;
justify-content: center;
align-items: center;
padding: 16px 32px;
background: ${bg ? bg : '#000'};
border: ${border ? border : '#770FDF'};
color: ${color ? color : '#fff'};
`}`