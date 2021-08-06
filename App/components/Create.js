

import React from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import Task from './Task';

const Create = () => {
    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>MY TASKS</Text>

                <View style={styles.items}>
                    <Task text={'Task 1'} />
                    <Task text={'Task 2'} />
                </View>
            </View>
            <KeyboardAvoidingView behaviour={Platform.OS === "ios" ? "padding" : "height"} style={styles.writertaskwrapper}>
                <TextInput style={style.input} placeholder={'Write a  task'} />
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEAED'
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {


    }

})

export default Create;