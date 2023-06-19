import React from 'react'
import { ContainerButton, LabelButton, } from './styles'
interface ButtonProps {
    valueButton: string;
    onpress?: () => void
    bg?: string
    color: string
    border?: string
    disable?:any
}
export const Button: React.FC<ButtonProps> = ({
    valueButton,
    bg,
    color,
    border,
    onpress,
    disable,
    ...props
}) => {
    return (
        <ContainerButton bg={bg} color={color} border={border} onPress={onpress} disabled={disable}>
            <LabelButton color={color}>{valueButton}</LabelButton>
        </ContainerButton>
    )
}