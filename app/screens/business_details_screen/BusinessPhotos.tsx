import { StyleSheet, Image, View } from 'react-native'
import React, { FC } from 'react'
import AppText from '../../components/appText'
import { FlatList } from 'react-native-gesture-handler'

interface BusinessPhotosProps {
    business: Business,
}

const BusinessPhotos: FC<BusinessPhotosProps> = ({ business }) => {
    return (
        <View>
            <AppText fontWeight='medium' style={{ fontSize: 20, marginBottom: 12 }} >
                Photos
            </AppText>

            <FlatList
                data={business.images}
                numColumns={2}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item.url }}
                        style={styles.image}
                    />
                )} />

        </View>
    )
}

export default BusinessPhotos

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 120,
        flex: 1,
        borderRadius: 16,
        margin: 7
    }
})