import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, ProductAsideImageContainer, ProductTextTitle, ProductTextSubTitle, ProductSubTitleContainer, ContainerImage } from './styles';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

export default function Product({ id, userId, title, body, url, navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Description',
            { id: id, url: url, title: title, userId: userId, body: body
            })} underlayColor="white">

            <Container>
                
                <ContainerImage>
                    <Image source={{ uri: url }} style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: 'stretch'
                    }} />
                </ContainerImage>

                <ProductAsideImageContainer>
                    <ProductTextTitle>User Id: {userId}</ProductTextTitle>

                    <ProductSubTitleContainer>
                        <ProductTextSubTitle>Id: {id}</ProductTextSubTitle>
                        <ProductTextSubTitle>Title{title}</ProductTextSubTitle>
                    </ProductSubTitleContainer>

                </ProductAsideImageContainer>
            </Container>
        </TouchableOpacity>
    );
}

