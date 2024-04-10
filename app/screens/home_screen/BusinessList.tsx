import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppText from '../../components/appText';
import Colors from '../../utils/Colors';
import { getBusinessList } from '../../utils/GlobalApi';
import renderBusinessItem from './BusinessListItem';

const BusinessList = () => {
    
    const [businessList, setBusinessList] = useState<BusinessList[] | undefined>();

    useEffect(() => {
        getBusinessLists();
    }, []);

    const getBusinessLists = () => {
        getBusinessList()
            .then((response) => {
                const businessListResponse = response as BusinessListResponse;
                setBusinessList(businessListResponse.businessLists);
            })
            .catch((err) => {
                console.log('Error fetching business lists:', err);
            });
    };

    return (
        <View style={{marginBottom: 10}}>
            <View style={styles.container}>
                <AppText fontWeight='medium' style={styles.heading}>
                    Latest Business
                </AppText>

                <AppText style={styles.subHeading}>
                    View All
                </AppText>
            </View>

            {businessList ? (
                <FlatList
                    horizontal={true}
                    data={businessList}
                    keyExtractor={(item) => item.id}
                    renderItem={renderBusinessItem}
                    showsHorizontalScrollIndicator={false}
                />
            ) : (
                <ActivityIndicator size="large" color="#0000ff" />
            )}
        </View>
    );
};

export default BusinessList;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'flex-end',
    },
    heading: {
        fontSize: 20,
    },
    subHeading: {
        fontSize: 16,
        color: Colors.primary,
    },

});
