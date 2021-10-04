import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Platform } from 'react-native'
import AppStyles from '../Config/styles'
import { calcHeight, calcWidth } from '../Config/Dimension'
import { getAppLanguage, setAppLanguage, strings } from '../Config/language/localLanguagesController'
import TopTabNavigation from '../Navigation/TopTabNavigation'
import { useSelector, useDispatch } from 'react-redux';
// import { GetShiftTime, UpdateEmployee } from '../Integration/api/ApisFunctions';
// import moment from 'moment';
import { Loader } from '../Components/Loader';







const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const generalState = useSelector(state => state.generalReducer)
    const presistState = useSelector(state => state.presistReducer)
    const [shift, setShift] = useState(null)



    // useEffect(() => {
    //     if (generalState.data.ShiftTime) {
    //         setShift(generalState.data.ShiftTime)
    //     }
    // }, [generalState.data])


    return (
        <SafeAreaView style={{ backgroundColor: '#fff', height: "100%", width: "100%", alignItems: "center", }}>
            {/* {generalState.Loading.ShiftTime && <Loader />} */}


            <TopTabNavigation navigation={navigation} />

        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    image: {
        height: calcHeight(75),
        width: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
        marginVertical: calcHeight(10)
    },
    dateView: {
        height: calcHeight(60),
        width: "100%",
        backgroundColor: "#155079",
        marginBottom: calcHeight(16),
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    dateText: {
        fontFamily: AppStyles.Fonts.Bold,
        fontSize: calcWidth(17),
        color: "#fff"
    },

})