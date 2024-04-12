import { StyleSheet, View, ActivityIndicator, FlatList, RefreshControl, } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';


import Colors from '../../utils/Colors';
import AppText from '../../components/appText';
import renderBusinessCategory from './BusinessCategory';
import { getBusinessListByCategory } from '../../utils/GlobalApi';
import PageHeading from '../../components/pageHeading';
import { Header } from '@react-navigation/stack';

interface BusinessCategoryScreenProps {
    category: string;
}

const BusinessesbusinessesByCategoryScreen = () => {

    const [businesses, setBusinesses] = useState<Business[] | undefined>();
    const [refreshing, setRefreshing] = useState(false);

    const params = useRoute().params as BusinessCategoryScreenProps;
    const navigation = useNavigation();

    const getBusinesses = () => {
        setRefreshing(true);

        getBusinessListByCategory(params?.category)
            .then((response) => {
                const businessResponse = response as BusinessListResponse;

                setBusinesses(businessResponse.businessLists);
            })
            .catch((err) => {
                console.log('Error getting lists by category:', err);
            })
            .finally(() => {
                setRefreshing(false);
            });
    }

    const onRefresh = useCallback(() => {
        getBusinesses();
    }, []);

    useEffect(() => {
        getBusinesses();
    }, []);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <PageHeading header={params.category} />

                {businesses ? businesses.length > 0 ? (
                    <FlatList
                        data={businesses}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderBusinessCategory}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                    />
                ) : (
                    <AppText style={styles.emptyText}>
                        No items found
                    </AppText>
                ) : (
                    <ActivityIndicator size="small" color="#0000ff" />
                )}

            </View>
        </SafeAreaView>
    )
}

export default BusinessesbusinessesByCategoryScreen

const styles = StyleSheet.create({

    emptyText: {
        textAlign: "center",
        marginTop: '70%',
        fontSize: 18,
        color: Colors.black
    },

    container: {
        paddingHorizontal: 18,
        paddingTop: 14,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

})