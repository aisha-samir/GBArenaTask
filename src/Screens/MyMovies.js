import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, } from 'react-native'
import AppStyles from '../Config/styles'
import { calcHeight, calcWidth } from '../Config/Dimension'
import TopTabNavigation from '../Navigation/TopTabNavigation'
import { useSelector, useDispatch } from 'react-redux';
// import { GetShiftTime, UpdateEmployee } from '../Integration/api/ApisFunctions';
import { Loader } from '../Components/Loader';
import { FAB } from 'react-native-paper';
import Modal from 'react-native-modal';




const MyMovies = ({ navigation }) => {
    const dispatch = useDispatch();
    const generalState = useSelector(state => state.generalReducer)
    const presistState = useSelector(state => state.presistReducer)


    return (
        <SafeAreaView style={{ backgroundColor: '#fff', height: "100%", width: "100%", alignItems: "center" }}>
            {/* {generalState.Loading.ShiftTime && <Loader />} */}
            <FAB
                style={styles.fab}
                color="white"
                icon="plus"
                onPress={() => {
                    //  navigation.navigate("AddMoive")
                    console.log(navigation)

                }}
            />

        </SafeAreaView>
    );
}

export default MyMovies;

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