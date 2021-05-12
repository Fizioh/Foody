import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY} from "../constants"

const OrderDelivery = ({ route, navigation }) => {

    const [restaurant, setRestaurant] = React.useState(null)
    const [streetName, setStreetName] = React.useState("")
    const [fromLocation, setFromLocation] = React.useState(null)
    const [toLocation, setToLocation] = React.useState(null)
    const [region, setRegion] = React.useState(null)

    React.useEffect(() => {
        let {restaurant, currentLocation} = route.params;

        let fromLoc = currentLocation.gps
        let toLoc = restaurant.location
        let street = currentLocation.streetName
        
        let mapRegion = {
            latitude: (fromLoc.latitude + toLoc.latitude) / 2,
            longitude: (fromLoc.longitude + toLoc.longitude) / 2,
            latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) / 2,
            longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2
        }

        setRestaurant(restaurant)
        setStreetName(street)
        setFromLocation(fromLoc)
        setToLocation(toLoc)
        setRegion(mapRegion)
    }, [])

    function renderMap(){
        const destinationMarker

        return (
        <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 35.6279,
         longitude: 139.7738,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
         {destinationMarker()}
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