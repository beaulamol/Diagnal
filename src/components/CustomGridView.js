import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

// custom grid FlatList view
export const CustomGridView = ({ data, style }) => <FlatList style={style}
    data={data}
    renderItem={({ item }) => renderItemView(item)}
    //Setting the number of column
    numColumns={3}
    onEndReachedThreshold={0.2}
    ListFooterComponent={renderFooter}
    keyExtractor={(index) => index}
/>

//render Footer
const renderFooter = () => {
    return (
        <View>
            <ActivityIndicator />
        </View>
    )
}

//render view
const renderItemView = (item) => {
    // const image =  `../../images/Slices/${item['poster-image']}`
    // const image = require(`../../images/Slices/${item['poster-image']}`)

    return (
        <View style={styles.container}>
            <Image
                style={styles.imageThumbnail}
                source={require(`../../images/Slices/poster1.jpg`)}
            />
            <Text style={styles.text}>{item.name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'column',
        backgroundColor: 'black',
        marginTop: 20,
        marginLeft: 15

    },
    imageThumbnail: {
        height: 200,
        width: 100,
    },
    text: {
        paddingTop: 1,
        color: 'white'
    }
});
