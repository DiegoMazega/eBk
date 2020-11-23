import React, { useEffect, useState } from 'react';
import { Alert, FlatList, ScrollView, Text } from 'react-native';
import Product from '../../organisms/Product';
import { TopText, Wrapper } from './styles';
import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=quilting+';

export default function Store({ navigation }) {
    const [ebk, setEbk] = useState([]);
    useEffect(() => {
        axios.get(BASE_URL).then(
            function (response) {
                setEbk(response.data);
            }).catch(() => {
                Alert.alert("Erro ao Listar Dados!");
            })
    }, []);
    console.log(ebk);

    return (
        <Wrapper >
            <TopText> Popular </TopText>
            <FlatList 
                data={ebk}
                renderItem={(book)=> console.log('aaaaaaaaaaaaaaaa ->'+book.item)}
            />
        </Wrapper>
    );
}