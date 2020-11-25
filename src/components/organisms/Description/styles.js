import styled from 'styled-components/native';

export const TitleContainer = styled.View `
    width: 100%;
    flex-direction: row;
    justify-content: center;
    background-color: #FFF;
`;

export const ContainerImage = styled.View `
  height: 500px;
  max-height: 500px;
`;

export const TitleText = styled.Text `
    color: #F6BD56;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    max-width: 300px;
`;

export const Wrapper = styled.SafeAreaView `
    height: 100%;
    background-color: #FFF;
    align-items: center;
`;

export const InfoContainer = styled.View `
    height: 150px;
    width: 360px;
    max-width: 360px; 
    margin-top: 20px;
    flex-direction: row;
`;

export const DescriptionProductAsideImageContainer = styled.View `
    flex-direction: column;
    max-width: 200px;
    margin-left: 10px;
`;

export const DescriptionProductTextTitle = styled.Text `
    color: #000;
    font-weight: bold;
    font-size: 15px;   
`;

export const DescriptionProductTextSubTitle = styled.Text `
    color: #000;
    font-size: 12px;   
`;

export const DescriptionContainer = styled.View `
    width: 360px;
    max-width: 360px; 
    margin-top: 20px;
    flex-direction: column;
`;


export const Text = styled.Text `
    color: #000;
    font-weight: bold;
    font-size: 15px;   
`;

export const TextSubTitle = styled.Text `
    color: #000;
    font-size: 12px;   
`;

export const FavoriteContainer = styled.View `
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 50px;
`;

export const CircularContainer = styled.View `
    margin-right: 20px;
    background-color: #000;
    border-width: 2px;
    border-color: #000;
    border-style: solid;
    border-radius: 50px;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
`;