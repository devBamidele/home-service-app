import React, { FC } from "react";
import { View } from "react-native";
import AppText from "./appText";
import CircleAvatar from "./circleAvatar";

type CategoryProps = { item: Category }

const CategoryIcon: FC<CategoryProps> = ({ item }) => (
    <View style={{alignItems: "center", flex: 1}}>
        <CircleAvatar
            source={{ uri: item.icon.url }}
            size={60}
        />

        <AppText style={{fontSize: 15, marginTop: 6, fontFamily:'outfit-medium'}}>
            {item.name}
        </AppText>
    </View>
)


export default CategoryIcon;