import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import Colors from '../utils/Colors'
import AppText from './appText'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';

type dismissPage = () => void;

interface PageHeadingProps {
    header: string
    dismissPage?: dismissPage,
}

const PageHeading: FC<PageHeadingProps> = ({ header, dismissPage }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <Ionicons
                name={"arrow-back"}
                size={27}
                color={Colors.black}
                onPress={() => dismissPage ? dismissPage() : navigation.goBack()} />
            <AppText fontWeight='medium' style={{ fontSize: 25 }} >{header}</AppText>
        </View>
    )
}

export default PageHeading

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
})