import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getSlider } from '../../utils/GlobalApi';
import AppText from '../../components/appText';
import renderSliderImage from './SliderImage';


const Slider = () => {

    const [sliders, setSliders] = useState<Slider[] | undefined>(undefined);

    useEffect(() => {
        getSliders();
    }, []);

    const getSliders = () => {
        getSlider()
            .then((response) => {
                const sliderResponse = response as SliderResponse;

                setSliders(sliderResponse.sliders);
            })
            .catch((err) => {
                console.log('Error fetching sliders:', err);
            });
    };

    return (
        <View>
            <AppText
                fontWeight='medium'
                style={styles.heading}>
                Offers for you
            </AppText>

            {sliders ? (
                <FlatList
                    horizontal={true}
                    data={sliders}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderSliderImage}
                />
            ) : (
                <ActivityIndicator size="large" color="#0000ff" />
            )}


        </View>
    );
};

export default Slider;

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        marginBottom: 16,
    },

   
});
