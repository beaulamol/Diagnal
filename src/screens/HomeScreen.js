import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput } from 'react-native'
import PAGE1 from '../API/CONTENTLISTINGPAGE-PAGE1.json'
import PAGE2 from '../API/CONTENTLISTINGPAGE-PAGE2.json'
import PAGE3 from '../API/CONTENTLISTINGPAGE-PAGE3.json'
import { CustomGridView } from '../components/CustomGridView'
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen() {
    const [isSearch, setSearch] = useState(false)
    // const [searchText, setSearchText] = useState()

    const [PAGE1Data, setPAGE1Data] = useState(PAGE1.page['content-items']['content'])
    const [PAGE2Data, setPAGE2Data] = useState(PAGE2.page['content-items']['content'])
    const [PAGE3Data, setPAGE3Data] = useState(PAGE3.page['content-items']['content'])

    // call function while searching
    const handleSearch = (searchValue) => {
        const formattedQuery = searchValue.toLowerCase();

        //search for PAGE1 - first flatList
        const filteredData1 = PAGE1Data.filter(page1 => {
            return contains(page1, formattedQuery);
        });

        //search for PAGE2 - second flatList
        const filteredData2 = PAGE1Data.filter(page1 => {
            return contains(page1, formattedQuery);
        });

        //search for PAGE3 - third flatList
        const filteredData3 = PAGE1Data.filter(page1 => {
            return contains(page1, formattedQuery);
        });

        //set data to flatList
        setPAGE1Data(filteredData1)
        setPAGE2Data(filteredData2)
        setPAGE3Data(filteredData3)
    }
    const contains = ({ name }, query) => {
        if (name.toLowerCase().includes(query)) {
            return true;
        }

        return false;
    };

    return (
        <SafeAreaView style={styles.container}>

            {/* header bar and search */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingHorizontal: 10, height: 50, alignItems: 'center', }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                    <Icon name="arrow-left" size={20} color="#ffff" />
                    <Text style={{ color: 'white', paddingLeft: 10, fontSize: 20 }}>{PAGE1.page.title}</Text>
                </View>
                <Icon name="search" style={{ marginRight: 10 }} size={20} color="#ffff" onPress={() => setSearch(!isSearch)} />
            </View>

            {/* search bar - it will expand while clicking the search bar */}
            {isSearch && <TextInput placeholder={"Search"}
                style={styles.sSearchBar}
                onChangeText={value => handleSearch(value)} />}

            {/* grid view of the list  */}
            <CustomGridView data={PAGE1Data} />
            <CustomGridView data={PAGE2Data} style={{ marginTop: 3 }} />
            <CustomGridView data={PAGE3Data} style={{ marginTop: 3 }} />

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
    sTextItem: {
        height: 50,
        width: "100%",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 18
    },
    sSearchBar: {
        paddingHorizontal: 10,
        margin: 10,
        height: 40,
        borderColor: "gray",
        borderRadius: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        fontSize: 18
    }
});
export default HomeScreen