import React, { FC } from "react";
import { View } from "react-native";
import AppText from "../../components/appText";
import CircleAvatar from "../../components/circleAvatar";

type CategoryProps = { item: Category }

const CategoryIcon: FC<CategoryProps> = ({ item }) => (
    <View style={{alignItems: "center", flex: 1}}>
        <CircleAvatar
            source={{ uri: item.icon.url }}
            size={60}
        />

        <AppText  style={{fontSize: 15, marginTop: 6,}}>
            {item.name}
        </AppText>
    </View>
)

const renderCategoryIcon = ({ item }: { item: Category }) => (
    <CategoryIcon item={item} />
);


export default renderCategoryIcon;


