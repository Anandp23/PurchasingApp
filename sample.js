import React from 'react';
import { View, Text } from 'react-native';

const ItemList = () => {
    // Example array of items
    const items = [
        {
            name: "anand",
            age: "29"
        },
        {
            name: "nandu",
            age: "25"
        }
    ];

    return (
        <View>
            {items.map((item, index) => (
                <Text key={index}>{item.name}{item.age}</Text>
                
            ))}
            {items.map((item, index) => (
                <Text key={index}>{item.age}</Text>
                
            ))}
        </View>
    );
};

export default ItemList;