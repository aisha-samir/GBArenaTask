import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, RefreshControl, FlatList, ActivityIndicator } from 'react-native'
import AppStyles from '../Config/styles'
import { calcHeight, calcWidth } from '../Config/Dimension'
import TopTabNavigation from '../Navigation/TopTabNavigation'
import { useSelector, useDispatch } from 'react-redux';
import { GetAllMovies } from '../Integration/api/ApisFunctions';
import { Loader } from '../Components/Loader';







const AllMovies = ({ navigation }) => {
    const dispatch = useDispatch();
    const generalState = useSelector(state => state.generalReducer)
    const presistState = useSelector(state => state.presistReducer)
    const [page, setPage] = useState(1)
    const [refreshing, setRefreshing] = useState(false);
    const [data, setdata] = useState(null)
    useEffect(() => {
        dispatch(GetAllMovies(data, page))
    }, [page])
    useEffect(() => {
        console.log("kruhfujemkl===========", generalState)
        if (generalState.data.GetAllMovies) {
            setdata(generalState.data.GetAllMovies)
        }
        console.log("afterrrrrrr===========", data)
    }, [generalState])

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setdata(0)
        setdata(null)
        dispatch(GetAllMovies(page))
        setTimeout(() => setRefreshing(false), 1000)
    }, [refreshing]);


    return (
        <SafeAreaView style={{ backgroundColor: 'red', height: "100%", width: "100%", alignItems: "center" }}>
            {generalState.Loading.GetAllMovies && <Loader />}
            {data != null &&
                <FlatList
                    refreshControl={
                        <RefreshControl refreshing={refreshing}
                            onRefresh={onRefresh}
                            colors={[AppStyles.Color.DARK_THEM]}
                            progressViewOffset={calcHeight(100)}
                        />
                    }
                    onEndReachedThreshold={0.01}
                    onEndReached={() => {
                        let newpage = page + 1
                        setPage(newpage)
                    }
                    }
                    ListFooterComponent={() => {
                        return (
                            <ActivityIndicator size={"large"} color={AppStyles.Color.DARK_THEM} />
                        )
                    }}
                    showsVerticalScrollIndicator={false}
                    style={{ width: "100%", }}
                    contentContainerStyle={{ paddingBottom: calcHeight(50), paddingTop: calcHeight(20) }}
                    data={data}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.card}>
                                <Text>kdjwelj</Text>
                            </View>
                        )
                    }}
                />
            }
        </SafeAreaView>
    );
}

export default AllMovies;

const styles = StyleSheet.create({
    card: {
        height: calcHeight(150),
        width: calcWidth(150),
        backgroundColor: "red",
        marginVertical: calcHeight(10),
        borderRadius: calcHeight(8)
    }

})