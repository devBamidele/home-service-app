import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { FC } from 'react'
import { BusinessItemProps } from '../home_screen/BusinessListItem'
import Colors from '../../utils/Colors'
import AppText from '../../components/appText'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'

const BusinessCategory: FC<BusinessItemProps> = ({ item }) => {

    const navigation = useNavigation();

    const goToDetailsScreen = () => {
        navigation.navigate('Business-Details', {business : item});
    }

    return (
        <Pressable onPress={goToDetailsScreen}>
            <View style={styles.container}>
                <Image
                    source={{ uri: item.images[0].url }}
                    style={styles.mainImage}
                />
                <View style={styles.textContainer}>
                    <AppText style={styles.contactPerson}>
                        {item.contactPerson}
                    </AppText>
                    <AppText fontWeight='medium' style={styles.name}>
                        {item.name}
                    </AppText>
                    <View style={styles.addressContainer}>
                        <Ionicons
                            style={{ marginLeft: -4 }}
                            name={"location"}
                            size={24}
                            color={Colors.primary}
                             />
                        <AppText numberOfLines={1} ellipsizeMode="tail" style={styles.address}>
                            {item.address}
                        </AppText>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        padding: 10,
        paddingRight: 30,
        borderRadius: 14,
        marginTop: 16,
        gap: 10,
        alignItems: 'center'
    },

    mainImage: {
        width: 100,
        height: 100,
        borderRadius: 12,
    },

    textContainer: {
        gap: 6,
        flex: 1,
    },

    contactPerson: {
        fontSize: 15,
        color: Colors.lightTextColor
    },

    name: {
        fontSize: 19,

    },

    addressContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },

    address: {
        fontSize: 16,
        color: Colors.lightTextColor
    }
})

const renderBusinessCategory = ({ item }: { item: Business }) => (
    <BusinessCategory item={item} />
)

export default renderBusinessCategory;
