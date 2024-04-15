import { StyleSheet, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import AppText from '../../components/appText'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../utils/Colors'

const ProfileScreen = () => {

    const { user } = useUser();

    const profileMenu: ProfileItem[] = [
        {
            id: 1,
            name: 'Home',
            icon: 'home'
        },

        {
            id: 2,
            name: 'My Booking',
            icon: 'bookmark-sharp'
        },

        {
            id: 3,
            name: 'Contact us',
            icon: 'mail'
        },

        {
            id: 4,
            name: 'Logout',
            icon: 'log-out'
        },
    ]

    return (
        <SafeAreaView>
            <View>
                <View style={{ padding: 20, paddingTop: 30, backgroundColor: Colors.primary, }}>
                    <AppText fontWeight='bold' style={{ fontSize: 30, color: Colors.white }}>
                        Profile
                    </AppText>
                    <View style={styles.container}>
                        <Image
                            source={{ uri: user?.imageUrl }}
                            style={styles.userImage}
                        />
                        <AppText fontWeight='medium' style={{ fontSize: 26, marginTop: 8, color: Colors.white }}>{user?.fullName}</AppText>

                        <AppText fontWeight='medium' style={{ fontSize: 18, marginTop: 8, color: Colors.white }}>{user?.primaryEmailAddress?.emailAddress}</AppText>
                    </View>
                </View>

                <View style={{ paddingTop: 60, alignItems:"center" }}>
                    <FlatList
                        data={profileMenu}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (

                            <TouchableOpacity activeOpacity={0.6}>
                                <View style={{

                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                  
                                    marginBottom: 40,
                                }}>


                                    <Ionicons name={item.icon as 'home' | 'bookmark-sharp' | 'mail' | 'log-out'} size={35} color={Colors.primary} />

                                    <AppText style={{ fontSize: 20 }}>
                                        {item.name}
                                    </AppText>

                                </View>
                            </TouchableOpacity>

                        )}
                    />
                </View>


            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center',
        padding: 20,
    },

    userImage: {
        width: 90,
        height: 90,
        borderRadius: 99,
    }
})