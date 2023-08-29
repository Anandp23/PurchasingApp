import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {
    const items = [
        {
            id: '1',
            text: 'Item 1',
            image: require('../images/carousel1.jpg')
        },
        {
            id: '2',
            text: 'Item 2',
            image: require('../images/carousel2.png')

        },
        {
            id: '3',
            text: 'Item 3',
            image: require('../images/carousel3.png')
        },
        {
            id: 4,
            image: require('../images/carousel4.jpg')
        },
        {
            id: 5,
            image: require('../images/carousel5.jpg')
        },
        {
            id: 6,
            image: require('../images/carousel6.webp')
        }


        // Add more items as needed
    ];
    const tShirt = [
        {
            id: 1,
            name: 't-shirt 1',
            price: "Rs. 300/-",
            gender: 'male',
            image: require('../images/tshirt1.jpg'),
        },
        {
            id: 2,
            name: 't-shirt 2',
            price: "Rs. 360/-",
            gender: 'male',
            image: require('../images/tshirt2.jpeg'),
        },
        {
            id: 3,
            name: 't-shirt 3',
            price: "Rs. 399/-",
            gender: 'male',
            image: require('../images/tshirt3.webp'),
        },
        {
            id: 4,
            name: 't-shirt 4',
            price: "Rs. 400/-",
            gender: 'male',
            image: require('../images/tshirt4.webp'),
        },
        {
            id: 5,
            name: 't-shirt 5',
            price: "Rs. 390/-",
            gender: 'male',
            image: require('../images/tshirt5.webp'),
        },
    ];
    const jacket = [
        {
            id: 1,
            name: 'Jacket 1',
            price: 1300,
            gender: 'male',
            image: require('../images/jacket1.webp'),
        },
        {
            id: 2,
            name: 'Jacket 2',
            price: 999,
            gender: 'male',
            image: require('../images/jacket2.webp'),
        },
        {
            id: 3,
            name: 'Jacket 3',
            price: 650,
            gender: 'male',
            image: require('../images/jacket3.webp'),
        },
        {
            id: 4,
            name: 'Jacket 4',
            price: 800,
            gender: 'male',
            image: require('../images/jacket4.webp'),
        },
    ];
    const jeans = [
        {
            id: 1,
            name: 'Jeans 1',
            price: 500,
            gender: 'male',
            image: require('../images/jeans1.webp'),
        },
        {
            id: 2,
            name: 'Jeans 2',
            price: 499,
            gender: 'male',
            image: require('../images/jeans2.webp'),
        },
        {
            id: 3,
            name: 'Jeans 3',
            price: 599,
            gender: 'male',
            image: require('../images/jeans3.jpeg'),
        },
        {
            id: 4,
            name: 'Jeans 4',
            price: 699,
            gender: 'male',
            image: require('../images/jeans4.webp'),
        },
    ];
    const shoes = [
        {
            name: 'Shoes 1',
            price: 1100,
            gender: 'male',
            image: require('../images/shoes1.jpeg'),
        },
        {
            name: 'Shoes 2',
            price: 680,
            gender: 'male',
            image: require('../images/shoes2.jpeg'),
        },
        {
            name: 'Shoes 3',
            price: 599,
            gender: 'male',
            image: require('../images/shoes3.jpeg'),
        },
        {
            name: 'Shoes 4',
            price: 800,
            gender: 'male',
            image: require('../images/shoes4.jpeg'),
        },
        {
            name: 'Shoes 5',
            price: 1000,
            gender: 'male',
            image: require('../images/shoes5.webp'),
        },
    ];
    const slipper = [
        {
            name: 'Slippers 1',
            price: 250,
            gender: 'male',
            image: require('../images/slipper1.webp'),
        },
        {
            name: 'Slipper 2',
            price: 450,
            gender: 'male',
            image: require('../images/slipper2.webp'),
        },
        {
            name: 'Slipper 3',
            price: 400,
            gender: 'male',
            image: require('../images/slipper3.jpeg'),
        },
        {
            name: 'Slipper 4',
            price: 240,
            gender: 'male',
            image: require('../images/slipper4.jpeg'),
        },
        {
            name: 'Slipper 5',
            price: 399,
            gender: 'male',
            image: require('../images/slipper5.jpeg'),
        },
    ];
    const watchOfferBox = [
        {
            id: '1',
            itemName: 'Watch',
            price: 'Rs. 2999/-',
            image: require('../images/watche1.webp')
        },
        {
            id: '2',
            itemName: 'Watch',
            price: 'Rs. 2999/-',
            image: require('../images/watche2.jpeg')

        },
        {
            id: '3',
            itemName: 'Watch',
            price: 'Rs. 2999/-',
            image: require('../images/watche3.webp')
        },
    ];
    const mobileOfferBox = [
        {
            id: 1,
            itemName: 'Mobile',
            price: 'Rs. 9999/-',
            image: require('../images/phone1.jpg')
        },
        {
            id: 2,
            itemName: 'Mobile',
            price: 'Rs. 9999/-',
            image: require('../images/phone2.jpg')
        },
        {
            id: 3,
            itemName: 'Mobile',
            price: 'Rs. 9999/-',
            image: require('../images/phone3.jpeg')
        }
    ];

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity>
                <View>
                    <Image
                        style={styles.tShirt}
                        source={item.image} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView style={{ width: '100%' }}
        >
            <View style={styles.container}>


                <View style={styles.carousal}>
                    <FlatListSlider
                        data={items}
                        imageKey={'image'}
                        local
                        width={windowWidth}
                        timer={3000}
                        contentContainerStyle={{ marginTop: 5 }}
                        indicatorContainerStyle={{ position: 'absolute', bottom: 10 }}
                        indicatorActiveColor={'#8e44ad'}
                        indicatorInActiveColor={'#ffffff'}
                        indicatorActiveWidth={10}

                    />
                </View>
                <View style={{ alignSelf: 'flex-start' }}>
                    <Text style={{ color: 'black', fontSize: 18, marginLeft: 20 }}>Special Offers</Text>
                </View>
                <View>
                    <View style={{ height: 160, width: '95%' }}>
                        <FlatList
                            data={watchOfferBox}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity>
                                        <View style={{ height: 150, width: 160, borderRadius: 10, margin: 5, borderWidth: .5, alignItems: 'center' }}>
                                            <Image
                                                style={{ height: 100, width: 150, borderRadius: 10, margin: 5 }}
                                                source={item.image} />
                                            <Text
                                                style={{ color: '#000', }}>
                                                {item.itemName}
                                            </Text>
                                            <Text style={{ color: '#000', }}>{item.price}</Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            }}
                            keyExtractor={item => item.id}
                            horizontal={true}

                        />
                    </View>
                </View>

                <View>
                    <View style={{ height: 160, width: '95%' }}>
                        <FlatList
                            data={mobileOfferBox}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity>
                                        <View style={{ height: 150, width: 160, borderRadius: 10, margin: 5, borderWidth: .5, alignItems: 'center' }}>
                                            <Image
                                                style={{ height: 100, width: 150, borderRadius: 10, margin: 5 }}
                                                source={item.image} />
                                            <Text
                                                style={{ color: '#000', }}>
                                                {item.itemName}
                                            </Text>
                                            <Text style={{ color: '#000', }}>{item.price}</Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            }}
                            keyExtractor={item => item.id}
                            horizontal={true}

                        />
                    </View>
                </View>
                <View style={{ alignSelf: 'flex-start' }}>
                    <Text style={{ color: 'black', fontSize: 18, marginLeft: 20 }}>T-Shirts</Text>
                </View>

                <View style={{ height: 160, width: '95%' }}>
                    <FlatList
                        data={tShirt}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>

                <View style={{ alignSelf: 'flex-start' }}>
                    <Text style={{ color: 'black', fontSize: 18, marginLeft: 20 }}>Jackets</Text>
                </View>

                <View style={{ height: 160, width: '95%' }}>
                    <FlatList
                        data={jacket}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>

                <View style={{ alignSelf: 'flex-start' }}>
                    <Text style={{ color: 'black', fontSize: 18, marginLeft: 20 }}>Jeans</Text>
                </View>

                <View style={{ height: 160, width: '95%' }}>
                    <FlatList
                        data={jeans}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>

                <View style={{ alignSelf: 'flex-start' }}>
                    <Text style={{ color: 'black', fontSize: 18, marginLeft: 20 }}>Shoes</Text>
                </View>
                <View style={{ height: 160, width: '95%' }}>
                    <FlatList
                        data={shoes}
                        renderItem={renderItem}
                        horizontal={true}
                    />
                </View>
                <View style={{ alignSelf: 'flex-start' }}>
                    <Text style={{ color: 'black', fontSize: 18, marginLeft: 20 }}>Slippers</Text>
                </View>
                <View style={{ height: 160, width: '95%' }}>
                    <FlatList
                        data={slipper}
                        renderItem={renderItem}
                        horizontal={true}
                    />
                </View>
            </View>
            <View style={{height:windowHeight/10}}></View>
        </ScrollView>

    );

};


const styles = StyleSheet.create({

    container: {
        height: '100%',
        alignItems: 'center'

    },

    contentContainer: {
        flex: 1

    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    item: {
        height: 50,
        flexDirection: 'row',
        borderRadius: 20

    },

    carousal: {
        height: 250,
        width: '100%',

    },
    imageSize: {
        height: '90%',
        width: windowWidth - 30,
        borderRadius: 20,
        margin: 5
    },
    tShirt: {
        height: 140,
        width: 150,
        margin: 5,
        borderColor: 'grey',
        borderWidth: .5,
        borderRadius: 10
    }
});

export default Home;
