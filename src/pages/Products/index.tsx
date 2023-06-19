import React, { useState, useEffect } from 'react'
import { View, Text, Linking, FlatList, TextInput, StyleSheet } from 'react-native'
import { Content } from './styles';
import { DATA } from '../../Data/dataProduct';
import { Product } from '../../components/Product';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaContainer, SafeAreaView } from '../../utils/SafeArea'
import { FullHeightScrollView } from './styles'
import theme from '../../theme/theme';
import { Input } from '../../components/Input';
import { RootStackParamList } from '../../components/ListProducts';

export interface PropspetAdoption {

}

const Products: React.FC<PropspetAdoption> = ({}) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const [productSearching, setProductSearching] = useState<[] | any[]
  >(DATA);

  const searching = (s: string) => {
    let arr = JSON.parse(JSON.stringify(DATA));
    setProductSearching(arr.filter((item: any) => item.tittle.toLowerCase().includes(s)));
  };

  return (
    <SafeAreaContainer color={theme.background.bgPrimary}>
      <Content>
        <FlatList
          ListHeaderComponent={
            <>
              <Input searching={searching} />
            </>
          }
          numColumns={2}
          data={productSearching}
          horizontal={false}
          keyExtractor={(pokemon) => pokemon.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ marginHorizontal: 1, marginVertical: 5 }}>
              <Product
                name={item.tittle}
                value={item.price}
                imageValue={item.picture}
                onpress={() =>
                  navigation.navigate('ProductDetails',
                    {
                      tittle: item.tittle,
                      price: item.price,
                      photo: item.picture
                    })}
              />
            </View>

          )}
        />
      </Content>
    </SafeAreaContainer>
  )
}

export default Products;

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 15,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderColor: '#000',
    borderLeftColor: "transparent",
    borderWidth: 1,
    paddingLeft: 0,
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    color: "#424242",
  },
});