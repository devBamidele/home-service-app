import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'
import AppText from '../../components/appText'
import Colors from '../../utils/Colors';

interface AboutMeProps {
    business: Business,
}

const BusinessAboutMe: FC<AboutMeProps> = ({ business }) => {
    const [isReadMore, setIsReadMore] = useState(false);

    return (
        <View>
            <AppText fontWeight='medium' style={{ fontSize: 20, marginBottom: 12 }} >
                About me
            </AppText>

            <AppText numberOfLines={isReadMore ? 25 : 5} ellipsizeMode="tail" style={styles.about}>
                {business.about}
            </AppText>

            <TouchableOpacity activeOpacity={0.5} onPress={() => setIsReadMore(!isReadMore)}>
                <AppText style={styles.readMore}>
                    {isReadMore ? 'Show less' : 'Show more'}
                </AppText>
            </TouchableOpacity>
        </View>
    )
}

export default BusinessAboutMe

const styles = StyleSheet.create({

    readMore: {
        fontSize: 16,
        color: Colors.primary,
    },

    about: {
        fontSize: 16,
        color: Colors.lightTextColor,
        lineHeight: 28,
    },
})