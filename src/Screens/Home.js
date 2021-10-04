import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Platform } from 'react-native'
import AppStyles from '../Config/styles'
import { calcHeight, calcWidth } from '../Config/Dimension'
import TopTabNavigation from '../Navigation/TopTabNavigation'
import { FAB } from 'react-native-paper';






const Home = ({ navigation }) => {


    return (
        <SafeAreaView style={{ backgroundColor: '#fff', height: "100%", width: "100%", alignItems: "center", }}>

            <TopTabNavigation navigation={navigation} />
            <FAB
                style={styles.fab}
                color="white"
                icon="plus"
                onPress={() => {
                    navigation.navigate("AddMoive")
                    console.log(navigation)

                }}
            />
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    fab: {
        backgroundColor: AppStyles.Color.DARK_THEM,
        position: 'absolute',
        color: 'white',
        margin: 16,
        right: 0,
        bottom: 0,
    },

})