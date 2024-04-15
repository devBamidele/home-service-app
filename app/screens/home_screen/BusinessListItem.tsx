import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import AppText from '../../components/appText';
import Colors from '../../utils/Colors';
import { Business } from '../../types/BusinessListResponse';
import { useNavigation } from '@react-navigation/native';


interface BusinessItemProps {
    item: Business;
}

const BusinessListItem: FC<BusinessItemProps> = ({ item }) => {

    const navigation = useNavigation();

    const goToDetailsScreen = () => {
        navigation.navigate('Business-Details', { business: item });
    }

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={styles.businessContainer}
            onPress={goToDetailsScreen}
        >
            <View >
                <Image source={{ uri: item?.images[0].url }} style={styles.businessImage} />

                <View style={styles.detailsContainer}>

                    <AppText
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        fontWeight='medium'
                        style={styles.businessName}>
                        {item.name}
                    </AppText>

                    <AppText style={styles.contactPerson}>{item.contactPerson}</AppText>

                    <View style={styles.categoryContainer}>
                        <AppText fontWeight='medium' style={{ fontSize: 11, padding: 3, color: Colors.primary }} >{item.category.name}</AppText>

                    </View>

                </View>

            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    businessContainer: {
        backgroundColor: Colors.white,
        padding: 10,
        paddingBottom: 16,
        borderRadius: 14,
        marginRight: 12,
    },
    businessItem: {
        marginHorizontal: 8,
    },
    detailsContainer: {
        marginLeft: 6,
        marginTop: 10,

    },
    businessName: {
        fontSize: 17,
        width: 150
    },
    businessImage: {
        height: 100,
        width: 160,
        borderRadius: 10,
    },

    contactPerson: {
        marginTop: 2,
        color: Colors.lightTextColor,
        fontSize: 13,
    },

    categoryContainer: {
        marginTop: 3,
        backgroundColor: Colors.primary_light,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        paddingHorizontal: 4,
    }
});


const renderBusinessItem = ({ item }: { item: Business }) => (
    <BusinessListItem item={item} />
);


export default renderBusinessItem;



