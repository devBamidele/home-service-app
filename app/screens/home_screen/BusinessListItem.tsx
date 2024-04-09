import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import AppText from '../../components/appText';
import Colors, { addOpacity } from '../../utils/Colors';

interface ListItemProps {
    item: BusinessList;
}

const BusinessListItem: FC<ListItemProps> = ({ item }) => {
    return (
        <TouchableOpacity style={styles.businessContainer}>
            <View >
                <Image source={{ uri: item?.images[0].url }} style={styles.businessImage} />

                <View style={styles.detailsContainer}>

                    <AppText fontWeight='regular' style={styles.businessName}>{item.name}</AppText>
                    <AppText style={styles.contactPerson}>{item.contactPerson}</AppText>

                    <View style={styles.categoryContainer}>
                        <AppText style={{fontSize: 13, padding: 3}} >{item.category.name}</AppText>

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
        borderRadius: 12,
        marginRight: 12,
    },
    businessItem: {
        marginHorizontal: 8,
    },
    detailsContainer: {
        marginLeft: 6,
        marginTop: 12,
    },
    businessName: {
        fontSize: 18,
    },
    businessImage: {
        height: 120,
        width: 213,
        borderRadius: 10,
    },

    contactPerson: {
        marginTop: 2,
        color: Colors.lightTextColor
    },

    categoryContainer: {
        marginTop: 4,
        backgroundColor: addOpacity(Colors.primary, 0.3),        
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'

    }
});


const renderBusinessItem = ({ item }: { item: BusinessList }) => (
    <BusinessListItem item={item} />
);


export default renderBusinessItem;



