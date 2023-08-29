import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

export default function Profile() {
    return (
        <ScrollView style={{flex:1}}>
            <View style={styles.container}>
                <View style={{ width: windowWidth, height: windowHeight / 5, backgroundColor: 'white', alignItems: 'center' }}>
                    <Text style={{ color: '#000', alignSelf: 'flex-start', margin: 10, fontSize: 18, fontWeight: 'bold' }}>Hey! ANAND P SUDAKAR</Text>
                    <View style={{ flexDirection: 'row', width: windowWidth, justifyContent: 'center' }}>
                        <TouchableOpacity style={{ flexDirection: 'row', borderWidth: .5, borderColor: 'grey', width: '40%', height: 40, alignItems: 'center', paddingLeft: 20, margin: 10 }}>
                            <MaterialCommunityIcons name="package-variant-closed" color={'#5b9cd9'} size={20} />
                            <Text style={{ color: 'black', marginLeft: 15 }}>Orders</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', borderWidth: .5, borderColor: 'grey', width: '40%', height: 40, alignItems: 'center', paddingLeft: 20, margin: 10 }}>
                            <MaterialCommunityIcons name="heart-outline" color={'#5b9cd9'} size={20} />
                            <Text style={{ color: 'black', marginLeft: 15 }}>Wishlist</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', width: windowWidth, justifyContent: 'center' }}>
                        <TouchableOpacity style={{ flexDirection: 'row', borderWidth: .5, borderColor: 'grey', width: '40%', height: 40, alignItems: 'center', paddingLeft: 20, margin: 10 }}>
                            <MaterialCommunityIcons name="gift-outline" color={'#5b9cd9'} size={20} />
                            <Text style={{ color: 'black', marginLeft: 15 }}>Coupons</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', borderWidth: .5, borderColor: 'grey', width: '40%', height: 40, alignItems: 'center', paddingLeft: 20, margin: 10 }}>
                            <MaterialCommunityIcons name="help-circle-outline" color={'#5b9cd9'} size={20} />
                            <Text style={{ color: 'black', marginLeft: 15 }}>Help Center</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ width: windowWidth, height: windowHeight / 4, backgroundColor: 'white', marginTop: 10 }}>
                    <Text style={{ color: 'black', fontSize: 16, margin: 10 }}>Credit options</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', height: 40, alignItems: 'center', margin: 10 }}>
                        <MaterialCommunityIcons name="bank-outline" color={'#5b9cd9'} size={20} />
                        <View style={{ width: '90%' }}>
                            <Text style={{ color: 'black', marginLeft: 15 }}>Help Center</Text>
                            <Text style={{ marginLeft: 15 }}>Get loan of up to Rs.5Lack instantly</Text>
                        </View>
                        <MaterialCommunityIcons name="chevron-right" color={'black'} size={20} />

                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', height: 40, alignItems: 'center', margin: 10 }}>
                        <MaterialCommunityIcons name="credit-card-outline" color={'#5b9cd9'} size={20} />
                        <View style={{ width: '90%' }}>
                            <Text style={{ color: 'black', marginLeft: 15 }}>Bank Credit Card</Text>
                            <Text style={{ marginLeft: 15 }}>Apply & enter world of unlimited benefits!</Text>
                        </View>
                        <MaterialCommunityIcons name="chevron-right" color={'black'} size={20} />

                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', height: 40, alignItems: 'center', margin: 10 }}>
                        <MaterialCommunityIcons name="bag-personal-outline" color={'#5b9cd9'} size={20} />
                        <View style={{ width: '90%' }}>
                            <Text style={{ color: 'black', marginLeft: 15 }}>Pay Later</Text>
                            <Text style={{ marginLeft: 15 }}>Get prime benefits</Text>
                        </View>
                        <MaterialCommunityIcons name="chevron-right" color={'black'} size={20} />

                    </TouchableOpacity>
                </View>

                <View style={{ width: windowWidth, height: windowHeight / 3.5, backgroundColor: 'white', marginTop: 10 }}>
                    <Text style={{ color: 'black', fontSize: 16, margin: 10 }}>Account Setting</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', height: 40, alignItems: 'center', marginLeft: 10, marginRight: 10 }}>
                        <MaterialCommunityIcons name="account" color={'#5b9cd9'} size={20} />
                        <View style={{ width: '40%' }}>
                            <Text style={{ color: 'black', marginLeft: 15 }}>Edit Profile</Text>
                        </View>

                        <MaterialCommunityIcons name="chevron-right" color={'black'} size={20} style={{ marginLeft: '50%' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', height: 40, alignItems: 'center', marginLeft: 10, marginRight: 10 }}>
                        <MaterialCommunityIcons name="credit-card-outline" color={'#5b9cd9'} size={20} />
                        <View style={{ width: '40%' }}>
                            <Text style={{ color: 'black', marginLeft: 15 }}>Save Cards & Wallet</Text>
                        </View>
                        <MaterialCommunityIcons name="chevron-right" color={'black'} size={20} style={{ marginLeft: '50%' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', height: 40, alignItems: 'center', marginLeft: 10, marginRight: 10 }}>
                        <MaterialCommunityIcons name="map-marker-radius-outline" color={'#5b9cd9'} size={20} />
                        <View style={{ width: '40%' }}>
                            <Text style={{ color: 'black', marginLeft: 15 }}>Saved Addresses</Text>
                        </View>
                        <MaterialCommunityIcons name="chevron-right" color={'black'} size={20} style={{ marginLeft: '50%' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', height: 40, alignItems: 'center', marginLeft: 10, marginRight: 10 }}>
                        <MaterialCommunityIcons name="gamepad-circle-right" color={'#5b9cd9'} size={20} />
                        <View style={{ width: '40%' }}>
                            <Text style={{ color: 'black', marginLeft: 15 }}>Select Language</Text>
                        </View>
                        <MaterialCommunityIcons name="chevron-right" color={'black'} size={20} style={{ marginLeft: '50%' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', height: 40, alignItems: 'center', marginLeft: 10, marginRight: 10 }}>
                        <MaterialCommunityIcons name="bell-outline" color={'#5b9cd9'} size={20} />
                        <View style={{ width: '40%' }}>
                            <Text style={{ color: 'black', marginLeft: 15 }}>Notification Settings</Text>
                        </View>
                        <MaterialCommunityIcons name="chevron-right" color={'black'} size={20} style={{ marginLeft: '50%' }} />
                    </TouchableOpacity>
                </View>

                <View style={{ width: windowWidth, height: windowHeight / 6, backgroundColor: 'white', marginTop: 10 }}>
                    <Text style={{ color: 'black', fontSize: 16, margin: 10 }}>My Activity</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', height: 40, alignItems: 'center', marginLeft: 10, marginRight: 10 }}>
                        <MaterialCommunityIcons name="clipboard-edit-outline" color={'#5b9cd9'} size={20} />
                        <View style={{ width: '40%' }}>
                            <Text style={{ color: 'black', marginLeft: 15 }}>Reviews</Text>
                        </View>
                        <MaterialCommunityIcons name="chevron-right" color={'black'} size={20} style={{ marginLeft: '50%' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', height: 40, alignItems: 'center', marginLeft: 10, marginRight: 10 }}>
                        <MaterialCommunityIcons name="comment-multiple-outline" color={'#5b9cd9'} size={20} />
                        <View style={{ width: '40%' }}>
                            <Text style={{ color: 'black', marginLeft: 15 }}>Questions & Answers</Text>
                        </View>
                        <MaterialCommunityIcons name="chevron-right" color={'black'} size={20} style={{ marginLeft: '50%' }} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: windowWidth, height: windowHeight / 6, backgroundColor: 'white', marginTop: 10 }}>
                    <Text style={{ color: 'black', fontSize: 16, margin: 10 }}>Feedback & Information</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', height: 40, alignItems: 'center', marginLeft: 10, marginRight: 10 }}>
                        <MaterialCommunityIcons name="file-document-multiple-outline" color={'#5b9cd9'} size={20} />
                        <View style={{ width: '50%' }}>
                            <Text style={{ color: 'black', marginLeft: 15 }}>Terms, Policies and Licenses</Text>
                        </View>
                        <MaterialCommunityIcons name="chevron-right" color={'black'} size={20} style={{ marginLeft: '40%' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', height: 40, alignItems: 'center', marginLeft: 10, marginRight: 10 }}>
                        <MaterialCommunityIcons name="progress-question" color={'#5b9cd9'} size={20} />
                        <View style={{ width: '50%' }}>
                            <Text style={{ color: 'black', marginLeft: 15 }}>Browse FAQs</Text>
                        </View>
                        <MaterialCommunityIcons name="chevron-right" color={'black'} size={20} style={{ marginLeft: '40%' }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ height: 30, width: windowWidth - 50, borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderColor: 'grey', backgroundColor: 'white', margin:10 }}>
                    <Text style={{ color: 'red' }}>Logout</Text>
                </TouchableOpacity>
                <View style={{height:windowHeight/10}}></View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'lightgrey'
    }
})