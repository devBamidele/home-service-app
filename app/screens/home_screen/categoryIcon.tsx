import React, { FC } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import AppText from "../../components/appText";
import CircleAvatar from "../../components/circleAvatar";
import { useNavigation } from "@react-navigation/native";

type CategoryProps = { item: Category }

const CategoryIcon: FC<CategoryProps> = ({ item }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Business-list")}
            activeOpacity={0.6}
            style={styles.container}>

            <View style={styles.innerContainer}>
                <CircleAvatar
                    source={{ uri: item.icon.url }}
                    size={60}
                />
                <AppText style={styles.text}>
                    {item.name}
                </AppText>
            </View>
        </TouchableOpacity>
    )
}

const renderCategoryIcon = ({ item }: { item: Category }) => (
    <CategoryIcon item={item} />
);


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    innerContainer: {
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        marginTop: 6,
    },
});


export default renderCategoryIcon;