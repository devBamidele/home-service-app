import { useUser } from '@clerk/clerk-expo';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getUserBookings } from '../../utils/GlobalApi';
import AppText from '../../components/appText';
import { BusinessCategory } from '../business_list_by_category_screen/BusinessCategory';
import Colors from '../../utils/Colors';
import { UserBooking, UserBookingResponse } from '../../types/UserBooking';

const BookingScreen = () => {
    const { user } = useUser();

    const [bookingList, setBookingList] = useState<UserBooking[]>();
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        user && getBookings();
    }, []);

    const onRefresh = useCallback(() => {
        getBookings();
    }, []);

    const getBookings = async () => {
        setRefreshing(true);

        const email = user?.primaryEmailAddress?.emailAddress ?? '';

        getUserBookings(email)
            .then((response) => {
                const userBookingsResponse = response as UserBookingResponse;

                setBookingList(userBookingsResponse.bookings);
            })
            .catch((err) => {
                console.log('Error fetching userBookings:', err);
            })
            .finally(() => {
                setRefreshing(false);
            });
    };

    return (
        <SafeAreaView>
            <View style={{ padding: 20 }}>
                <AppText fontWeight='medium' style={{ fontSize: 26 }}>
                    My Bookings
                </AppText>

                <View>
                    {bookingList ? (
                        bookingList.length > 0 ? (
                            <FlatList
                                data={bookingList}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    <BusinessCategory item={item?.businessList} booking={item} />
                                )}
                                refreshControl={
                                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                                }
                            />
                        ) : (
                            <AppText style={styles.emptyText}>
                                No items found
                            </AppText>
                        )
                    ) : (
                        <ActivityIndicator size="small" color="#0000ff" />
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default BookingScreen;

const styles = StyleSheet.create({
    emptyText: {
        textAlign: "center",
        marginTop: '70%',
        fontSize: 18,
        color: Colors.black
    },
});
