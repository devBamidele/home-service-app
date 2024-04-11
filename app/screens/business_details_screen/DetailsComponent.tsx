import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import AppText from '../../components/appText'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../utils/Colors';

interface BusinessPhotosProps {
    business: Business,
}

const DetailsComponent: FC<BusinessPhotosProps> = ({ business }) => {
    return (
        <View style={{gap: 7}}>
            <AppText fontWeight="bold" style={{ fontSize: 25, letterSpacing: 0.3 }}>
                {business.name}
            </AppText>

            <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
                <AppText fontWeight='medium' style={styles.contactPerson}>
                    {business.contactPerson}
                </AppText>

                <AppText style={{ fontSize: 20 }}>
                    🌟
                </AppText>

                <View style={styles.categoryContainer}>
                    <AppText fontWeight='medium' style={{
                        fontSize: 13,
                        padding: 3,
                        color: Colors.primary
                    }} >
                        {business.category.name}
                    </AppText>

                </View>

            </View>

            <View style={styles.addressContainer}>
                <Ionicons
                    style={{ marginLeft: -4 }}
                    name={"location"}
                    size={24}
                    color={Colors.primary}
                />
                <AppText numberOfLines={1} ellipsizeMode="tail" style={styles.address}>
                    {business.address}
                </AppText>
            </View>
        </View>
    )
}

export default DetailsComponent

const styles = StyleSheet.create({
    categoryContainer: {
        marginTop: 3,
        backgroundColor: Colors.primary_light,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        paddingHorizontal: 5,
    },

    addressContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },

    address: {
        fontSize: 17,
        color: Colors.lightTextColor
    },

    contactPerson: {
        fontSize: 20,
        color: Colors.primary
    },

})
