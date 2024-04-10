import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './Header'
import Slider from './Slider'
import Category from './Category'
import BusinessList from './BusinessList'

const HomeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Header />

                <ScrollView showsVerticalScrollIndicator={false}>

                    <Pressable style={styles.viewStyle}>
                        <View><Slider /></View>
                        <View><Category /></View>
                        <View><BusinessList /></View>
                    </Pressable>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    viewStyle: {
        paddingHorizontal: 18,
        paddingTop: 16,
        gap: 14
    }
})