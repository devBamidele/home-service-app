import { StyleSheet, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors, { addOpacity } from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';
import BusinessPhotos from './BusinessPhotos';
import BusinessAboutMe from './BusinessAboutMe';
import DetailsComponent from './DetailsComponent';


interface BusinessDetailsScreenProps {
  business: Business
}

const BusinessDetailsScreen = () => {

  const params = useRoute().params as BusinessDetailsScreenProps;

  const [business, setBusiness] = useState<Business>(params.business);

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      {business && (
        <ScrollView>
          <Pressable>
            <View>
              <Pressable
                onPress={() => navigation.goBack()}
                style={styles.backButton}>

                <Ionicons
                  name={"arrow-back"}
                  color={Colors.white}
                  size={30}
                />

              </Pressable>

              <Image
                source={{ uri: business.images[0].url }}
                style={{ width: '100%', height: 300 }}
              ></Image>

              <View style={{ marginHorizontal: 18, marginVertical: 20, gap: 7 }}>

                <DetailsComponent business={business}/>                

                <View style={styles.separator} />

                <BusinessAboutMe business={business} />

                <View style={styles.separator} />

                <BusinessPhotos business={business} />

              </View>

            </View>
          </Pressable>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export default BusinessDetailsScreen

const styles = StyleSheet.create({
  separator: {
    marginVertical: 22,
    height: 1,
    backgroundColor: addOpacity(Colors.lightTextColor, 0.4),
    borderWidth: 0.1,
  },

  backButton: {
    position: "absolute",
    zIndex: 1,
    top: 16,
    left: 16,
  },
 
})