import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, } from 'react-native'
import AppStyles from '../Config/styles'
import { calcHeight, calcWidth } from '../Config/Dimension'
import TopTabNavigation from '../Navigation/TopTabNavigation'
import { useSelector, useDispatch } from 'react-redux';
// import { GetShiftTime, UpdateEmployee } from '../Integration/api/ApisFunctions';
import { Loader } from '../Components/Loader';







const AddMoive = ({ navigation }) => {
    const dispatch = useDispatch();
    const generalState = useSelector(state => state.generalReducer)
    const presistState = useSelector(state => state.presistReducer)


    return (
        <SafeAreaView style={{ backgroundColor: '#fff', height: "100%", width: "100%", alignItems: "center" }}>
            {/* {generalState.Loading.ShiftTime && <Loader />} */}


        </SafeAreaView>
    );
}

export default AddMoive;

const styles = StyleSheet.create({


})