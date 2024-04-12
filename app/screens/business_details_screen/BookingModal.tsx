import React, { FC, useEffect, useState } from 'react';
import { Modal, StyleSheet, View, Dimensions, TouchableOpacity, ScrollView, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import PageHeading from '../../components/pageHeading';
import CalendarPicker from "react-native-calendar-picker";
import Colors from '../../utils/Colors';
import AppText from '../../components/appText';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { createBooking } from '../../utils/GlobalApi';
import DismissKeyboardHoc from '../../components/dismisskeyboard.hoc';
import { useUser } from '@clerk/clerk-expo';
import format from '../../utils/dateFormatter';

type dismissModal = () => void;

interface BookingModalProps {
    showModal: boolean;
    dismissModal: dismissModal;
    businessId: string;
}

const BookingModal: FC<BookingModalProps> = ({ showModal, dismissModal, businessId }) => {

    const [timeList, settimeList] = useState<{ time: string }[]>([]);

    const [selectedTime, setSelectedTime] = useState<string>()

    const [selectedDate, setSelectedDate] = useState<Date>();

    const [note, setNote] = useState('');

    const { user } = useUser();

    const createBookings = async () => {

        if (!selectedTime || !selectedDate) {
            ToastAndroid.show('Please select data and time', ToastAndroid.LONG);

            return;
        }


        const data: Booking = {
            userName: user?.fullName ?? 'No name provided',
            userEmail: user?.primaryEmailAddress?.emailAddress ?? 'No email provided',
            date: format(selectedDate),
            time: selectedTime,
            businessId: businessId,
            bookingStatus: BookingStatus.Booked,
            note: note,
        }

        createBooking(data)
            .then((response) => {
                ToastAndroid.show('Booking created successfully', ToastAndroid.SHORT);

                dismissModal();
            })
            .catch((err) => {
                console.log('Error creating booking:', err);
            })
    }

    useEffect(() => {
        getTime();
    }, [])

    const calWidth = Dimensions.get('window').width * 0.75;

    const getTime = () => {
        const timeList = [];

        for (let i = 9; i <= 12; i++) {
            timeList.push({ time: `${i}${i === 12 ? ' Noon' : ' AM'}` });
            timeList.push({ time: `${i}:30${i === 12 ? ' PM' : ' AM'}` });
        }

        for (let i = 1; i <= 4; i++) {
            timeList.push({ time: `${i}:00 PM` });
            timeList.push({ time: `${i}:30 PM` });
        }

        settimeList(timeList);
    };


    return (
        <Modal animationType='slide' visible={showModal} >
            <DismissKeyboardHoc>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <KeyboardAvoidingView style={styles.container}>
                        <PageHeading header={'Booking'} dismissPage={dismissModal} />
                        <AppText fontWeight="medium" style={{ fontSize: 21, marginTop: 32, }}>
                            Select Date
                        </AppText>
                        <View style={styles.calenderContainer}>
                            <CalendarPicker
                                onDateChange={setSelectedDate}
                                width={calWidth}
                                minDate={Date.now()}
                                todayBackgroundColor={Colors.black}
                                todayTextStyle={{ color: Colors.white }}
                                selectedDayColor={Colors.primary}
                                selectedDayTextColor={Colors.white}
                            />
                        </View>
                        <View style={{ marginTop: 16 }}>
                            <AppText fontWeight="medium" style={{ fontSize: 21, marginTop: 12, marginBottom: 12 }}>
                                Select Time Slot
                            </AppText>
                            <FlatList
                                horizontal={true}
                                data={timeList}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        activeOpacity={0.6}
                                        style={{ marginRight: 10 }}
                                        onPress={() => setSelectedTime(item.time)}
                                    >
                                        <AppText
                                            style={[selectedTime == item.time ? styles.selectedText : styles.unSelectedText]}
                                        >
                                            {item.time}
                                        </AppText>
                                    </TouchableOpacity>
                                )} />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <AppText fontWeight="medium" style={{ fontSize: 21, marginTop: 12, marginBottom: 12 }}>
                                Any Suggeston Note
                            </AppText>
                            <TextInput
                                onChangeText={setNote}
                                placeholder='Notes'
                                numberOfLines={4}
                                style={styles.noteTextArea} />
                            <TouchableOpacity
                                onPress={createBookings}
                                activeOpacity={0.6}
                                style={{ marginTop: 15 }} >
                                <AppText fontWeight='medium' style={styles.confirmButton} > Confirm & Book</AppText>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </DismissKeyboardHoc>
        </Modal>
    );
};

export default BookingModal;


const sharedTextStyle = {
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingHorizontal: 18,
    borderRadius: 99,
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    calenderContainer: {
        backgroundColor: Colors.primary_light,
        padding: 20,
        borderRadius: 15,
        marginTop: 12,
    },
    selectedText: {
        ...sharedTextStyle,
        color: Colors.white,
        backgroundColor: Colors.primary,
    },
    unSelectedText: {
        ...sharedTextStyle,
        color: Colors.primary,
    },

    noteTextArea: {
        borderWidth: 1,
        borderRadius: 15,
        textAlignVertical: "top",
        padding: 16,
        fontSize: 16,
        fontFamily: "outfit-regular",
        borderColor: Colors.primary,
    },

    confirmButton: {
        textAlign: 'center',
        fontSize: 17,
        backgroundColor: Colors.primary,
        color: Colors.white,
        borderRadius: 99,
        padding: 12,
        elevation: 2
    }
});


