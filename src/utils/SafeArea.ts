import styled from 'styled-components/native'
import theme from '../theme/theme'

interface SafeAreaProps {
    color?: string | undefined
}

export const SafeAreaView = styled.SafeAreaView<SafeAreaProps>`
    background: ${({ theme, color }) => (color ? color : '#fff')};
    flex: 0;
`

export const SafeAreaContainer = styled.SafeAreaView<SafeAreaProps>`
    background: ${({ theme, color }) => (color ? color : '#fff')};
    flex: 1;
`