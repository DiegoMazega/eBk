import React, { useEffect, useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { TitleContainer, TitleText, InfoContainer, Wrapper, DescriptionProductAsideImageContainer, DescriptionProductTextSubTitle, DescriptionProductTextTitle, DescriptionContainer, Text, TextSubTitle, CircularContainer, FavoriteContainer } from './styles';
import { AntDesign as Icon } from '@expo/vector-icons';
import { ContainerImage } from '../Product/styles';

export default function Description({ route }) {

    const [favorite, setFavorite] = useState(false);

    const { id, url, title, userId, body } = route.params;



    return (
        <>
            <TitleContainer>
                <TitleText>DESCRIÇÃO</TitleText>
            </TitleContainer>
            <Wrapper>

                <InfoContainer>

                    <ContainerImage>
                        <Image source={{ uri: url }} style={{
                            flex: 1,
                            width: null,
                            height: null,
                            resizeMode: 'stretch'
                        }}
                        />
                    </ContainerImage>
                    <DescriptionProductAsideImageContainer>
                        <DescriptionProductTextTitle>Título Original</DescriptionProductTextTitle>
                        <DescriptionProductTextSubTitle>{title}</DescriptionProductTextSubTitle>


                        <DescriptionProductTextTitle>User Id</DescriptionProductTextTitle>
                        <DescriptionProductTextSubTitle>{userId}</DescriptionProductTextSubTitle>

                        <DescriptionProductTextTitle>Id</DescriptionProductTextTitle>
                        <DescriptionProductTextSubTitle>{id}</DescriptionProductTextSubTitle>
                    </DescriptionProductAsideImageContainer>
                </InfoContainer>

                <DescriptionContainer>
                    <Text>Descrição</Text>
                    <TextSubTitle>{body}</TextSubTitle>
                </DescriptionContainer>

                <FavoriteContainer>
                    <CircularContainer>
                        <Icon name={favorite ? 'heart' : 'hearto'} size={24} color="red"
                            onPress={()=> setFavorite(!favorite)}
                        />
                    </CircularContainer>
                </FavoriteContainer>

            </Wrapper>
        </>
    )
}