import React, { PropsWithChildren, useContext } from 'react'
import { View, Text,Image,ImageURISource} from 'react-native'



type CardBrandProps = {
   imageValue: ImageURISource
}
export const CardBrand: React.FC<PropsWithChildren<CardBrandProps>> = ({
   imageValue
}) => {
    return (
      <>
      <View style={{width:80, height:70, borderRadius:5, backgroundColor:'#fff',
         marginHorizontal:5,marginVertical:10,
         alignItems:'center', justifyContent:'center', flexDirection:'row'
    }}>
          <Image
            source={imageValue}
            style={{width:70, height:50}}
            resizeMode='contain'
          />
      </View>

      </>
    )
}