import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { BusinessItemProps } from '../home_screen/BusinessListItem'


const BusinessCategory: FC<BusinessItemProps> = ({ item }) => {
    return (
        <View>
            <Text>BusinessCategory</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

const renderBusinessCategory = ({ item }: { item: Business }) => (
    <BusinessCategory item={item} />
)

export default renderBusinessCategory;