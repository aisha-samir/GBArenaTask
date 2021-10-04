import * as React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { calcHeight, calcWidth } from '../Config/Dimension'
import AppStyles from '../Config/styles'
import MyMovies from '../Screens/MyMovies'
import AllMovies from '../Screens/AllMovies'
import { strings } from '../Config/language/localLanguagesController';




export default function TobTabNavigation({ navigation, route }) {
    const [index, setIndex] = React.useState(0);


    const [routes] = React.useState([
        { key: 'AllMovies', title: 'All Movies' },
        { key: 'MyMovies', title: 'My Movies' },

    ]);
    React.useEffect(() => {
        console.log("----------------------->", navigation)
    }, [])
    const renderScene = SceneMap({
        AllMovies: AllMovies,
        MyMovies: MyMovies,
    });
    let renderTabBar = (props) => {
        return (
            <View>
                {/* <Header navigation={navigation} /> */}
                <View style={styles.tabBar}>

                    {props.navigationState.routes.map((route, i) => {
                        return (
                            <TouchableOpacity
                                style={[
                                    styles.tabItem,
                                    index == i && {
                                        backgroundColor: AppStyles.Color.DARK_THEM,
                                        borderTopLeftRadius: calcWidth(40),
                                        borderTopRightRadius: calcWidth(40),
                                        borderBottomLeftRadius: calcWidth(40),
                                        borderBottomRightRadius: calcWidth(40),
                                    },
                                    // i == 0 && {
                                    //     borderTopLeftRadius: calcWidth(40),
                                    //     borderBottomLeftRadius: calcWidth(40),
                                    // },
                                    // i == 1 && {
                                    //     borderTopRightRadius: calcWidth(40),
                                    //     borderBottomRightRadius: calcWidth(40),
                                    // },
                                ]}
                                onPress={() => setIndex(i)}>
                                <Text
                                    style={[styles.textBar, index == i && { color: '#fff' }]}>
                                    {route.title}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        );
    };
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
            initialLayout={{ width: calcWidth(375) }}
            style={{ width: calcWidth(375), backgroundColor: "#fff" }}

        />
    );
}

const styles = StyleSheet.create({

    tabBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: calcHeight(16),
        backgroundColor: '#FFFF',
        width: calcWidth(325),
        height: calcHeight(48),
        alignSelf: 'center',
        borderRadius: calcWidth(24),
        borderWidth: 1,
        borderColor: AppStyles.Color.TEXT_GRAY,
        padding: 5,
        justifyContent: "space-around",
        marginTop: calcHeight(20)
    },
    tabItem: {
        width: calcWidth(158),
        alignItems: 'center',
        justifyContent: "center",
    },
    textBar: {
        fontFamily: AppStyles.Fonts.Bold,
        fontSize: calcWidth(17),
        color: AppStyles.Color.TEXT_GRAY,
    },
});