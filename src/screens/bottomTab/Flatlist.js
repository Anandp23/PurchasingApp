import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
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


        // Add more items as needed
    ];

    const tShirt = [
        {
            id: 1,
            name: 't-shirt 1',
            price: 300,
            gender: 'male',
            image: require('../images/tshirt1.jpg'),
          },
          {
            id: 2,
            name: 't-shirt 2',
            price: 349,
            gender: 'male',
            image: require('../images/tshirt2.jpeg'),
          },
          {
            id: 3,
            name: 't-shirt 3',
            price: 200,
            gender: 'male',
            image: require('../images/tshirt3.webp'),
          },
          {
            id: 4,
            name: 't-shirt 4',
            price: 299,
            gender: 'male',
            image: require('../images/tshirt4.webp'),
          },
          {
            id: 5,
            name: 't-shirt 5',
            price: 399,
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



    const renderCarousel = ({ item, index }) => {
        return (
            <View style={styles.row}>
                <Image
                    style={styles.imageSize}
                    source={item.image} />
            </View>
        );

        return null;
    };

    const renderJacket = ({item, index}) => {
        return(
            <View>
                <Image 
                style={styles.tShirt}
                source={item.image}/>
            </View>
        )
    }

    

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}
        scrollEnabled={true}>
        <View style={styles.container}>
            
            
            <View style={styles.carousal}>
                <FlatList
                    data={items}
                    renderItem={renderCarousel}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    pagingEnabled={true}
                    
                />
            </View>
            <View style={{height:160,width:'95%'}}>
                <FlatList
                    data={tShirt}
                    renderItem={renderJacket}
                    keyExtractor={item => item.id}
                    horizontal= {true}
                />
            </View>
            <View style={{height:160,width:'95%'}}>
                <FlatList
                data={jacket}
                renderItem={renderJacket}
                keyExtractor={item => item.id}
                horizontal={true}
                />
            </View>
            <View style={{height:160,width:'95%'}}>
                <FlatList
                data={jeans}
                renderItem={renderJacket}
                keyExtractor={item => item.id}
                horizontal={true}
                />
            </View>
            {/* <View style={{height:160,width:'95%'}}>
                <FlatList
                data={shoes}
                renderItem={renderJacket}
                horizontal={true}
                />
            </View>
            <View style={{height:160,width:'95%'}}>
                <FlatList
                data={slipper}
                renderItem={renderJacket}
                horizontal={true}
                />
            </View> */}
            <Text style={{fontSize:200}}>hhdskhkdshfdsfkjdsajfdhsajkhdh</Text>
        
        
        </View>
        </ScrollView>
        
    );

};


const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center'

    },

    contentContainer: {
        
        height:'100%',
        width:'100%',
        
      },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',       
        alignItems:'center',
        borderRadius:20
    },
    item: {
        height: 50,
        flexDirection: 'row',  
        borderRadius:20

    },

    carousal: {
        height: '25%',
        width: '95%',      
        borderRadius: 20,       
        marginTop:10
        
    },
    imageSize: {
        height: '90%',
        width: windowWidth-30,
        borderRadius: 20,
        margin:5
    },
    tShirt: {
        height:150,
        width:150,
        margin:5,
        borderColor:'grey',
        borderWidth:.5,
        borderRadius:10
    }
});

export default Home;
