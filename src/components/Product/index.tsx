import React, {PropsWithChildren} from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageURISource} from 'react-native';


type ProductProps = {
    name: string,
    onpress?: () => void,
    value: string,
    imageValue: ImageURISource

}
export const Product: React.FC<PropsWithChildren<ProductProps>> = ({
    onpress,
    name,
    value,
    imageValue,
}) => {
    function filterDesc(desc: any) {
        if (desc.length < 27) {
            return desc;
        }

        return `${desc.substring(0, 23)}...`;
    }

    return (
        <>
            <TouchableOpacity onPress={onpress}>
                <View style={styles.container}>
                    <Image
                        source={imageValue}
                        style={styles.productImg}
                    />
                    <Text style={styles.productName}>
                        {filterDesc(name)}
                    </Text>
                    <View>
                        <Text style={styles.productValue}>{value}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: 180,
        height: 210,
        borderRadius: 7,
        padding: 10,
        marginRight:2

    },
    productImg: {
        width: 80,
        height: 120,
        alignSelf: 'center',
    },
    productName: {
        fontSize: 15,
        textAlign: 'left',
        fontWeight:'400',
        color:'#5C5C5C'
    },
    productValue:{
        fontSize: 14,
        textAlign: 'left',
        fontWeight:'400',
        color:'#138D8E'
    }
})
