import React, { FC } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Pressable } from "react-native";

interface SliderProps { item: Slider }

const SliderImage: FC<SliderProps> = ({ item }) =>
(
    <Pressable style={{ marginRight: 8 }}>
        <Image
            style={styles.sliderImage}
            source={{ uri: item.image.url }} />
    </Pressable>
)

const styles = StyleSheet.create({
    sliderImage: {
        width: 300,
        height: 169,
        borderRadius: 16,
    }
})

const renderSliderImage = ({ item }: { item: Slider }) => (
    <SliderImage item={item} />
);


export default renderSliderImage;