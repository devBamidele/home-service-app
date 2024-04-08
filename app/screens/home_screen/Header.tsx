import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, NativeSyntheticEvent, TextInputContentSizeChangeEventData } from 'react-native'
import { useUser } from '@clerk/clerk-expo';
import Colors from '../../utils/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, {useRef, useState} from 'react';
import AppText from '../../components/appText';

const Header = () => {

    //const { user, isLoaded } = useUser();

    const userData = {
        imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        fullName: 'Bamidele Ajewole'
    }

    const [focused, setFocused] = useState<Boolean>(false);

    return (
        <View style={styles.container}>
            <View style={styles.profileFirstRow}>
                <View style={styles.profileContainer}>

                    <Image source={{ uri: userData.imageUrl }} style={styles.userImage} />

                    <View>
                        <AppText style={styles.welcomeText} >Welcome,</AppText>
                        <AppText fontWeight="medium" style={styles.userName}>{userData.fullName}</AppText>
                    </View>
                </View>

                <Ionicons name={'bookmark-outline'} size={27} color={Colors.white} />
            </View>

            <View style={styles.profileSecondRow}>
                <TextInput
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    style={[styles.textInputStyle, focused && {
                        elevation: 16,
                        shadowColor: Colors.black,
                    }]}
                    placeholderTextColor={Colors.hintTextColor}
                    selectionColor={Colors.black}
                    placeholder='Search'
                />
                <TouchableOpacity style={[styles.serchButton]}>
                    <Ionicons name={'search'} size={19} color={Colors.primary} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        padding: 20,
        paddingTop: 30,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        gap: 18,
        elevation: 6,
        shadowColor: Colors.black,
    },

    profileFirstRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    profileSecondRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },

    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    userImage: {
        width: 50,
        height: 50,
        borderRadius: 99,
    },

    welcomeText: {
        color: Colors.white,
        fontSize: 15,
    },

    userName: {
        color: Colors.white,
        fontSize: 20,
    },

    textInputStyle: {
        backgroundColor: Colors.white,
        paddingVertical: 9,
        borderRadius: 8,
        fontSize: 16,
        paddingLeft: 16,
        flex: 1,
        fontFamily: 'outfit-regular'
    },

    serchButton: {
        backgroundColor: Colors.white,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40

    }


})