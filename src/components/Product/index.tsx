import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageURISource } from 'react-native';
import { Container, ProductImage, ProductName, ProductValue } from './styles';

type ProductProps = {
    name: string,
    onpress(): void,
    value: string,
    imageValue: ImageURISource,
    widthContainerProduct?: string,
    heightContainerProduct?: string

}
export const Product: React.FC<ProductProps> = ({
    onpress,
    name,
    value,
    imageValue,
    widthContainerProduct,
    heightContainerProduct
}) => {
    function filterDesc(desc: any) {
        if (desc.length < 27) {
            return desc;
        }

        return `${desc.substring(0, 23)}...`;
    }

    return (
        <TouchableOpacity onPress={onpress}>
            <Container>
                <ProductImage
                    source={imageValue}
                />
                <ProductName>
                    {filterDesc(name)}
                </ProductName>
                <ProductValue>
                    {value}
                </ProductValue>
            </Container>
        </TouchableOpacity>

    )
}



