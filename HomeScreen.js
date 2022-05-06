import React from 'react';
import {Button, View, Text} from 'react-native';
import styles from './styles.js';

function HomeScreen({navigation}) {
    return (
        <View style ={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button 
                title="Details"
                onPress={() => navigation.navigate("Details", {
                    id: 1,
                    description: 'This is where the description goes',
                })}
            />
            
        </View>

    );
}

export default HomeScreen;