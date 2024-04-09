import { FlatList, StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { getSlider } from '../../utils/GlobalApi';
import AppText from '../../components/appText';


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
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <SliderImage item={item} />
                    )}
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

    sliderImage: {
        width: 300,
        height: 169,
        borderRadius: 16,
    }
});

/*
const renderCategoryItem = ({ item }: { item: Category }) => {
        return (
            <View style={styles.categoryItem}>
                <AppText>{item.name}</AppText>
            </View>
        );
    };
*/

type SliderProps = { item: Slider }

const SliderImage: FC<SliderProps> = ({ item }) =>
(
    <View style={{ marginRight: 8 }}>
        <Image
            style={styles.sliderImage}
            source={{ uri: item.image.url }} />
    </View>
)
