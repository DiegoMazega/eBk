import React from 'react';
import { Image } from 'react-native';
import {Container, ProductAsideImageContainer, ProductTextTitle, ProductTextSubTitle, ProductSubTitleContainer, ProductRatingContainer, ProductDownloadContainer, ProductDownloadText} from './style';
import { Rating } from 'react-native-ratings';
import { AntDesign } from '@expo/vector-icons'; 

export default function Product({url, title, classification, age}){
    return(
            <Container>
                <Image source={{uri: url}} width='200px' style={{
                    height: '100%', 
                    width: '180px', 
                    }}
                    resizeMode='cover'
                    />
                    <ProductAsideImageContainer>
                        <ProductTextTitle>{title}</ProductTextTitle>
                        <ProductSubTitleContainer>
                            <ProductTextSubTitle>{classification}</ProductTextSubTitle>
                            <ProductTextSubTitle>{age}</ProductTextSubTitle>
                        </ProductSubTitleContainer>
                        <ProductRatingContainer>
                            <Rating
                                type='custom'
                                ratingCount={5}
                                imageSize={30}
                                tintColor= '#F4F4F4'
                                ratingColor= '#f1c40f'
                                startingValue= '0'
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
    );
}

