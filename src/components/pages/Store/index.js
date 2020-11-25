import React, { useEffect, useState } from 'react';
import { Alert, FlatList, View, Text } from 'react-native';
import Product from '../../organisms/Product';
import { TopText, Wrapper } from './styles';
import axios from 'axios';
import  {url1, url2} from '../../models/Ebk'

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';


export default function Store({ navigation }) {

    const [placeHolder, setPlaceHolder] = useState([]);

    function makeBuild({ item, index }) {
        return (
            <Product
                body={item.body}
                id={item.id}
                navigation={navigation}
                title={item.title}
                userId={item.userId}
                url= {(index%2 == 0 ) ? url1 : url2}
            />
        );
    };

    useEffect(() => {
        axios.get(BASE_URL).then(
            function (response) {
                const data = response.data;
                setPlaceHolder(data)
            }).catch(() => {
                Alert.alert("Erro ao Listar Dados!");
            })
    });
    return (
        <Wrapper >
            <TopText> JsonPlaceholder </TopText>
            <FlatList
                data={placeHolder}
                renderItem={makeBuild}
                keyExtractor={(item, index) => index.toString()}
            />
        </Wrapper>
    );
}