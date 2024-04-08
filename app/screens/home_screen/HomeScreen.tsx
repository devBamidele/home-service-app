import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './Header'
import Slider from './Slider'
import Category from './Category'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View>
                <Header/>

                <View style={styles.viewStyle}><Slider/></View>

                <View style={styles.viewStyle}><Category/></View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    viewStyle : {paddingHorizontal: 18, paddingTop: 16}
})