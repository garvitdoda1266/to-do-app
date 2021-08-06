

import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Dimensions } from 'react-native';
import Tab from './Tab';

const { width } = Dimensions.get('screen');

const TabBar = ({ state, navigation }) => {
    const [selected, setSelected] = useState('Home');
    const { routes } = state;
    const renderColor = (currentTab) => (currentTab === selected ? 'red' :
        'black');
    const handlePress = (activeTab, index) => {
        if (state.index !== index) {
            setSelected(activeTab);
            navigation.navigate(activeTab);
        }

    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {
                    routes.map((route, index) => <Tab tab={route}
                        icon={route.params.icon}
                        onPress={() => handlePress(route.name, index)}
                        color={renderColor(route.name)}
                        key={route.key} />)
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 20,
        width,
        height: 65,

        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: 280,
        justifyContent: 'space-between',
        borderRadius: 100,


    }
})

export default TabBar;