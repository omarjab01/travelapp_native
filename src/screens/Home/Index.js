import React, { useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import Title from '../../components/Title/Index';

const Home = () => {

    const [title, setTitle] = useState('Titolo');


    useEffect(() => {
        setTimeout(() => {
            setTitle('titolo aggiornato2');
        }, 4000);
    }, []);

    console.log('texttt', title);

    return (
        <SafeAreaView>
            <View>
                <Title/>
            </View>
        </SafeAreaView>
    );
};

export default Home;
