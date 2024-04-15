import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import AppText from '../../components/appText'
import Colors from '../../utils/Colors'

type OnMessageFunction = () => void;
type OnBookNowFunction = () => void;


interface BusinessContactProps {
    onMessage?: OnMessageFunction;
    onBookNow?: OnBookNowFunction;
}

const BusinessContact: FC<BusinessContactProps> = ({ onBookNow, onMessage }) => {
    return (
        <View style={styles.mainContainer}>

            <TouchableOpacity onPress={onMessage} activeOpacity={0.6} style={styles.messageButton}>
                <AppText fontWeight='medium' style={styles.messageButtonText}>
                    Message
                </AppText>
            </TouchableOpacity>

            <TouchableOpacity onPress={onBookNow} activeOpacity={0.6} style={styles.sendNowButton}>
                <AppText fontWeight='medium' style={styles.sendNowText}>
                    Book Now
                </AppText>
            </TouchableOpacity>

        </View>
    )
}

export default BusinessContact

const styles = StyleSheet.create({

    mainContainer: {
        padding: 4,
        paddingBottom: 6,
        flexDirection: "row",
        gap: 8,
        zIndex: 2,
        bottom: 113,
        backgroundColor: Colors.backgroundColor
    },

    sendNowButton: {
        borderColor: Colors.primary,
        backgroundColor: Colors.primary,
        padding: 10,
        borderWidth: 1,
        textAlign: "center",
        borderRadius: 99,
        flex: 1,
    },

    sendNowText: {
        textAlign: "center",
        fontSize: 18,
        color: Colors.white,
    },

    messageButtonText: {
        textAlign: "center",
        fontSize: 18,
        color: Colors.primary
    },

    messageButton: {
        borderColor: Colors.primary,
        backgroundColor: Colors.white,
        padding: 10,
        borderWidth: 1,
        textAlign: "center",
        borderRadius: 99,
        flex: 1,
    },
})