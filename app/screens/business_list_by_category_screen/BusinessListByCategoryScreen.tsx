import { StyleSheet, View, ActivityIndicator, FlatList, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../utils/Colors';
import AppText from '../../components/appText';
import { getBusinessListByCategory } from '../../utils/GlobalApi';

import renderBusinessCategory from './businessCategory';

interface ScreenProps {
    category: string
}

const BusinessListByCategoryScreen = () => {

    const [businesses, setBusinesses] = useState<Business[] | undefined>()

    const params = useRoute().params as ScreenProps;

    const navigation = useNavigation();

    const pop = () => navigation.goBack();

    useEffect(() => { 
        getBusinesses();
    }, []);

    const getBusinesses = () => {
        getBusinessListByCategory(params?.category)
            .then((response) => {
                const businessResponse = response as BusinessListResponse;

                setBusinesses(businessResponse.businessLists);
            })
            .catch((err) => {
                console.log('Error getting lists by category:', err);
            })
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Ionicons name={"arrow-back"} size={27} color={Colors.black} onPress={pop} />
                    <AppText fontWeight='medium' style={{ fontSize: 25 }} >{params.category}</AppText>
                </View>

                {
                    businesses ? (
                        <FlatList
                        data={businesses}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderBusinessCategory}
                        />
                    ) : (
                        <ActivityIndicator size="large" color="#0000ff" />
                    )}
                    
            </View>
        </SafeAreaView>
    )
}

export default BusinessListByCategoryScreen

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 18,
        paddingTop: 14
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

})