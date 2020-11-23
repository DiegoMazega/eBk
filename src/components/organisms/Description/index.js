import React, { useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { TitleContainer, TitleText, InfoContainer, Wrapper, DescriptionProductAsideImageContainer, DescriptionProductTextSubTitle, DescriptionProductTextTitle, DescriptionContainer, Text, TextSubTitle, PreviewContainer, DownloadContainer, DownloadText, PriceContainer, PriceSubContainer, PriceSubContainerText, PriceSubContainerValue, PriceSubContainerTextValue, PriceSubContainerSubTextValue, ShopContainer, ShopContainerText, FavoriteContainer, CircularContainer } from './styles';
import { AntDesign as Icon } from '@expo/vector-icons';

export default function Description({ route }) {

    const[favorite, setFavorite] = useState(false);

    const { url, title, classification, author, origin, originalTitle, description, price } = route.params;

    return (
        <>
            <TitleContainer>
                <TitleText>{title}</TitleText>
            </TitleContainer>
            <ScrollView>
                <Wrapper>
                    <InfoContainer>
                        <Image source={{ uri: url }} style={{
                            flex: 1,
                            width: null,
                            height: null,
                            resizeMode: 'stretch'
                        }}
                        />
                        <DescriptionProductAsideImageContainer>
                            <DescriptionProductTextTitle>Título Original</DescriptionProductTextTitle>
                            <DescriptionProductTextSubTitle>{originalTitle}</DescriptionProductTextSubTitle>

                            <DescriptionProductTextTitle>Gênero</DescriptionProductTextTitle>
                            <DescriptionProductTextSubTitle>{classification}</DescriptionProductTextSubTitle>

                            <DescriptionProductTextTitle>Autor</DescriptionProductTextTitle>
                            <DescriptionProductTextSubTitle>{author}</DescriptionProductTextSubTitle>

                            <DescriptionProductTextTitle>Origem</DescriptionProductTextTitle>
                            <DescriptionProductTextSubTitle>{origin}</DescriptionProductTextSubTitle>
                        </DescriptionProductAsideImageContainer>
                    </InfoContainer>

                    <DescriptionContainer>
                        <Text>Descrição</Text>
                        <TextSubTitle>{description}</TextSubTitle>
                    </DescriptionContainer>

                    <PreviewContainer>
                        <Text>Prévia</Text>
                        <TextSubTitle>Tenha acesso ao primeiro capítulo do livro por tempo determinado e aproveite sua experiência</TextSubTitle>
                    </PreviewContainer>

                    <DownloadContainer>
                        <Icon name="download" size={15} color="#000" style={
                            {
                                alignSelf: "center"
                            }
                        } />
                        <DownloadText>DOWNLOAD PRÉVIA</DownloadText>
                    </DownloadContainer>

                    <PriceContainer>
                        <Text>E-book Kindle</Text>
                        <PriceSubContainer>
                            <PriceSubContainerText>R$</PriceSubContainerText>
                            <PriceSubContainerValue>
                                <PriceSubContainerTextValue>{price}</PriceSubContainerTextValue>
                                <PriceSubContainerSubTextValue>COMPRANDO NO CRÉDITO</PriceSubContainerSubTextValue>
                            </PriceSubContainerValue>
                        </PriceSubContainer>
                    </PriceContainer>

                    <ShopContainer>
                        <Icon name="shoppingcart" size={24} color="black" />
                        <ShopContainerText>COMPRAR AGORA</ShopContainerText>
                    </ShopContainer>

                    <FavoriteContainer>
                        <CircularContainer>
                            <Icon name={favorite? 'heart': 'hearto'} size={24} color="white" 
                                onPress={()=> setFavorite(!favorite)}
                            />
                        </CircularContainer>
                    </FavoriteContainer>
                </Wrapper>
            </ScrollView>
        </>
    )
}