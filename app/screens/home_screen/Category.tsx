import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import AppText from '../../components/appText'
import Colors from '../../utils/Colors'
import { getCategory } from '../../utils/GlobalApi'
import CircleAvatar from '../../components/circleAvatar'
import CategoryIcon from '../../components/categoryIcon'

const Category = () => {


    const [category, setcategory] = useState<Category[] | undefined>(undefined);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        getCategory()
            .then((response) => {
                const categoryResponse = response as CategoryResponse;

                setcategory(categoryResponse.categories);
            })
            .catch((err) => {
                console.log('Error fetching categories:', err);
            })
    }

    return (
        <View>
            <View style={styles.container}>
                <AppText
                    fontWeight='medium'
                    style={styles.heading}>
                    Categories
                </AppText>


                <AppText
                    style={styles.subHeading}>
                    View All
                </AppText>

            </View>


            {category ? (<FlatList
                numColumns={4}
                data={category}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    (
                        <CategoryIcon item={item} />
                    )
                )}

            />) : (<ActivityIndicator size="large" color="#0000ff" />)}

        </View>

    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 16,
        alignItems: 'flex-end'
    },

    heading: {
        fontSize: 20,

    },

    subHeading: {
        fontSize: 16,
        color: Colors.primary,
    }
});