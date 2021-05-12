import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { COLORS, icons, images, SIZES, FONTS } from '../constants';

const Home = ({navigation}) => {
    const initialCurrentLocation = {
        streetName: "Odaiba",
        gps: {
            latitude: 35.6279, 
            longitude: 139.7738,
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Riz",
            icon: icons.rice_bowl,
        },
        {
            id: 2,
            name: "Nouilles",
            icon: icons.noodle,
        },
        {
            id: 3,
            name: "Hot Dogs",
            icon: icons.hotdog,
        },
        {
            id: 4,
            name: "Salades",
            icon: icons.salad,
        },
        {
            id: 5,
            name: "Burgers",
            icon: icons.hamburger,
        },
        {
            id: 6,
            name: "Pizza",
            icon: icons.pizza,
        },
        {
            id: 7,
            name: "Snacks",
            icon: icons.fries,
        },
        {
            id: 8,
            name: "Sushi",
            icon: icons.sushi,
        },
        {
            id: 9,
            name: "Desserts",
            icon: icons.donut,
        },
        {
            id: 10,
            name: "Boissons",
            icon: icons.drink,
        },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Wendy's",
            rating: 4.8,
            categories: [5, 7],
            priceRating: affordable,
            photo: images.burger_restaurant_1,
            duration: "30 - 45 min",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Coco"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Crispy Chicken Burger",
                    photo: images.crispy_chicken_burger,
                    description: "Crispy Chicken Burger avec crudités",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Crispy Chicken Burger avec sauce Biggy",
                    photo: images.honey_mustard_chicken_burger,
                    description: "Crispy Chicken Burger avec sauce Biggy Burger",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Barquette de frites",
                    photo: images.baked_fries,
                    description: "Frites croustillantes avec sauce au choix",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            id: 2,
            name: "Domino's",
            rating: 4.8,
            categories: [2, 4, 6],
            priceRating: expensive,
            photo: images.pizza_restaurant,
            duration: "15 - 20 min",
            location: {
                latitude: 1.556306570595712,
                longitude: 110.35504616746915,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Mario"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Pizza Hawaienne",
                    photo: images.hawaiian_pizza,
                    description: "Pizza aux gout des îles",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 5,
                    name: "Pizza Bocconcini",
                    photo: images.pizza,
                    description: "Pizza au gout italiano",
                    calories: 250,
                    price: 20
                },
                {
                    menuId: 6,
                    name: "Pizza Margherita",
                    photo: images.tomato_pasta,
                    description: "Pasta classique",
                    calories: 100,
                    price: 10
                },
                {
                    menuId: 7,
                    name: "Salade méditerranéene",
                    photo: images.salad,
                    description: "Salade au gout exotique",
                    calories: 100,
                    price: 10
                }
            ]
        },
        {
            id: 3,
            name: "MaxiChicken",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.hot_dog_restaurant,
            duration: "20 - 25 min",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "Chef"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Menu 14",
                    photo: images.chicago_hot_dog,
                    description: "Spécialité du chef",
                    calories: 100,
                    price: 20
                }
            ]
        },
        {
            id: 4,
            name: "Shinjuku",
            rating: 4.8,
            categories: [8],
            priceRating: expensive,
            photo: images.japanese_restaurant,
            duration: "10 - 15 min",
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Astuhiko"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Sushi sets",
                    photo: images.sushi,
                    description: "Fresh salmon, sushi rice, fresh juicy avocado",
                    calories: 100,
                    price: 50
                }
            ]
        },
        {
            id: 5,
            name: "Noodles",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.noodle_shop,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Kolo Mee",
                    photo: images.kolo_mee,
                    description: "Noodles with char siu",
                    calories: 200,
                    price: 5
                },
                {
                    menuId: 11,
                    name: "Sarawak Laksa",
                    photo: images.sarawak_laksa,
                    description: "Vermicelli noodles, cooked prawns",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 12,
                    name: "Nasi Lemak",
                    photo: images.nasi_lemak,
                    description: "A traditional Malay rice dish",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 13,
                    name: "Nasi Briyani with Mutton",
                    photo: images.nasi_briyani_mutton,
                    description: "A traditional Indian rice dish with mutton",
                    calories: 300,
                    price: 8
                },

            ]
        },
        {

            id: 6,
            name: "Otacos Sucré",
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: images.kek_lapis_shop,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Teh C Peng",
                    photo: images.teh_c_peng,
                    description: "Three Layer Teh C Peng",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 13,
                    name: "ABC Ice Kacang",
                    photo: images.ice_kacang,
                    description: "Shaved Ice with red beans",
                    calories: 100,
                    price: 3
                },
                {
                    menuId: 14,
                    name: "Kek Lapis",
                    photo: images.kek_lapis,
                    description: "Layer cakes",
                    calories: 300,
                    price: 20
                }
            ]

        }


    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id){
        let category = categories.filter(a => a.id == id)

        if(category.length > 0)
            return category[0].name

        return ""
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader(){
        return (
            <View style={{ flexDirection: 'row', height: 50}}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding *2,
                        justifyContent: 'center'
                    }}
                >
                    <Image 
                        source={icons.nearby}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <View
                            style={{
                                width: '70%',
                                height: '100%',
                                backgroundColor: COLORS.lightGray3,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: SIZES.radius
                            }}
                        >
                            <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                        </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image 
                        source={icons.basket}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories(){
        const renderItem = ({item}) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: SIZES.padding, 
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: 'center',
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image 
                            source={item.icon}
                            resizeMode='contain'
                            style={{
                                top: 10,
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>
                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>

                </TouchableOpacity> 
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2}}>
                <Text style={{... FONTS.h1 }}>Catégories</Text>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2}}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({item}) => (
                <TouchableOpacity
                style={{marginBottom: SIZES.padding * 2}}
                onPress={() => navigation.navigate("Restaurant", {
                        item,
                        currentLocation
                })}
                >
                    <View
                        style={{
                            marginBottom: SIZES.padding
                        }}
                    >
                        <Image 
                            source={item.photo}
                            resizeMode="cover"
                            style={{
                                width: "100%",
                                height: 200,
                                borderRadius: SIZES.radius
                            }}
                        />
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                height: 50,
                                width: SIZES.width * 0.3,
                                backgroundColor: COLORS.white,
                                borderTopRightRadius: SIZES.radius,
                                borderBottomLeftRadius: SIZES.radius,
                                alignItems: 'center',
                                justifyContent: 'center',
                                ...styles.shadow
                            }}
                        >
                            <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                        </View>
                    </View>
                            {/* Restaurant Info */}
                            <Text style={{...FONTS.body2 }}>{item.name}</Text>
                        <View
                            style={{
                                marginTop: SIZES.padding,
                                flexDirection: 'row'
                            }}
                        > 
                        {/* Notes */}
                            <Image 
                                source={icons.star}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.primary,
                                    marginRight: 10
                                }}
                            />
                            <Text style={{...FONTS.body3}}>{item.rating}</Text>
                            {/* Categories */}

                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginLeft: 10
                                }}
                                >
                                {
                                    item.categories.map((categoryId) =>{
                                        return (
                                            <View
                                                style={{ flexDirection: 'row'}}
                                                key={categoryId}
                                            >
                                                <Text style={{ ...FONTS.body3 }}>
                                                    {getCategoryNameById(categoryId)}</Text>
                                                    <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                            </View>
                                        )
                                    })
                                }

                                {/* Prix */}
                                {
                                    [1, 2, 3].map((priceRating) => (
                                        <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgrey
                                            }}
                                        ></Text>
                                    ))
                                }
                            </View>
                        </View>
                </TouchableOpacity>
        )

        return (
            <FlatList 
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()} 
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
        marginTop: 28,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }

})

export default Home;