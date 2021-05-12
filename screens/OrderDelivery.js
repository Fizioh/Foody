import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const OrderDelivery = () => {

    function renderMap(){
        return (
        <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>
   )
    }

    return (
        <View style={{ flex: 1 }}>
            {renderMap()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });

export default OrderDelivery;