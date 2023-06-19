import React, { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaContainer, SafeAreaView } from '../../utils/SafeArea'
import { DetailTextProdut, PriceTextProduct, TittleProduct } from './styles'
import { DATA } from '../../Data/dataProduct';
import { FullHeightScrollView } from '../../theme/globalStyles';
import { Content } from '../../utils/Page'
import SizeButton from '../../components/SizeButton';
import theme from '../../theme/theme'
import { HorizontalScroll } from '../../components/HorizontalScroll';
import { Product } from '../../components/Product';
import { Button } from '../../components/Button';
import { CardBrand } from '../../components/CardBrand';
import { Title } from '../../theme/globalStyles';


export interface PropsProductDetails {
    navigation: any
}

const SizeItems = [
    {
        id: 1,
        size: '140g',
    },
    {
        id: 2,
        size: '150g',

    },
    {
        id: 3,
        size: '170g',

    },

]

const CategoriesItems = [
    {
        id: 1,
        photo: require('../../assets/categoria1.png'),
        name: 'Peixes'
    },
    {
        id: 2,
        photo: require('../../assets/categoria2.png'),
        name: 'Pássaros'

    },
    {
        id: 3,
        photo: require('../../assets/categoria3.png'),
        name: 'Acessórios'

    },
    {
        id: 4,
        photo: require('../../assets/categoria4.png'),
        name: 'Gatos'

    },
    {
        id: 5,
        photo: require('../../assets/categoria5.png'),
        name: 'Cães'

    },

]

const ProductDetails: React.FC<PropsProductDetails> = ({ navigation, route }: any) => {



    return (
        <SafeAreaContainer color={theme.background.bgPrimary}>
            <FullHeightScrollView scrollEnabled>
                <Content>
                    <Image
                        source={route.params.photo}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <TittleProduct
                    >
                        {route.params.tittle}
                    </TittleProduct>

                    <PriceTextProduct>{route.params.price}</PriceTextProduct>
                    <Title>Escolha um tamanho:</Title>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <SizeButton buttons={SizeItems} />
                    </ScrollView>
                    <Title             
                    >
                        {route.params.tittle}
                    </Title>
                    <DetailTextProdut
                    >
                      Informações:
                      Indicada para cães adultos;
                      Blend de proteínas;
                      Músculos mais fortes;
                      Redução do odor das fezes;
                    </DetailTextProdut>
                    <Button
                        valueButton='Comprar'
                        color='#000'
                    />
                    <View style={styles.line} />
                    <Title>Outras Categorias</Title>
                    <HorizontalScroll>
                        {CategoriesItems.map((item) => (
                            <CardBrand label={item.name} key={item.id} imageValue={item.photo} />
                        ))}

                    </HorizontalScroll>


                </Content>
            </FullHeightScrollView>
        </SafeAreaContainer>
    )
}

export default ProductDetails;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#FFF'
    },
    image: {
        width: 360,
        height: 460,
    },
    title: {
        paddingHorizontal: '2%'
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '7%'
    },
    textContent: {
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    textTitle: {
        fontSize: 22,
    },
    textList: {
        fontSize: 16,
        lineHeight: 25,
    },
    line: {
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%',
    }
});