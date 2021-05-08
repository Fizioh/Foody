import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { icons, COLORS, SIZES, FONTS } from '../constants'

const Restaurant = ({ route, navigation }) => {

    const [restaurant, setRestaurant] = React.useState(null);
    const [currentLocation, setCurrentLocation] = React.useState(null);

    React.useEffect(() => {
        let {item, currentLocation} = route.params;

        setRestaurant(item)
        setCurrentLocation(currentLocation)

    })

    function renderHeader(){
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding *2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image 
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            top: 30,
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                {/* Restaurant Name Section */}
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding *3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray3
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{restaurant?.name}</Text>
                    </View>

                </View>

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
})

export default Restaurant;