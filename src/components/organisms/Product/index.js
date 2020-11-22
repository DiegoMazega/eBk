import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {Container, ProductAsideImageContainer, ProductTextTitle, ProductTextSubTitle, ProductSubTitleContainer, ProductRatingContainer, ProductDownloadContainer, ProductDownloadText} from './style';
import { AirbnbRating } from 'react-native-ratings';
import { AntDesign } from '@expo/vector-icons'; 

export default function Product({url, title, classification, age}){
    return(
            <TouchableOpacity onPress={console.log(title)} underlayColor="white">
                
                <Container>

                    <Image source={{uri: url}} style={{ 
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: 'contain'
                        }}
                    />

                        <ProductAsideImageContainer>
                            <ProductTextTitle>{title}</ProductTextTitle>

                            <ProductSubTitleContainer>
                                <ProductTextSubTitle>{classification}</ProductTextSubTitle>
                                <ProductTextSubTitle>{age}</ProductTextSubTitle>
                            </ProductSubTitleContainer>

                            <ProductRatingContainer>
                                <AirbnbRating
                                    count={5}
                                    defaultRating={0}
                                    size={20}
                                    selectedColor= '#F1C40F'
                                    showRating = {false}
                                />
                            </ProductRatingContainer>

                            <ProductDownloadContainer>
                                <AntDesign name="download" size={15} color="#FFF" style={
                                    {
                                        alignSelf: "center"
                                    }
                                } />
                                <ProductDownloadText>DOWNLOAD PRÉVIA</ProductDownloadText>
                            </ProductDownloadContainer>
                            
                        </ProductAsideImageContainer>
                </Container>
            </TouchableOpacity>
    );
}

