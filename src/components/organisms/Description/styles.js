import styled from 'styled-components/native';

export const TitleContainer = styled.View `
    width: 100%;
    flex-direction: row;
    justify-content: center;
    background-color: #FFF;
`;

export const TitleText = styled.Text `
    color: #F6BD56;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    max-width: 300px;
`;

export const Wrapper = styled.SafeAreaView `
    flex: 1;
    background-color: #FFF;
    align-items: center;
`;

export const InfoContainer = styled.View `
    height: 300px;
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

export const PreviewContainer = styled.View `
    width: 360px;
    max-width: 360px; 
    margin-top: 20px;
    flex-direction: column;
`;

export const DownloadContainer = styled.View `
  margin-top: 20px
  flex-direction: row;
  border-width: 2px;
  border-color: #F6BD56;
  border-style: solid;
  border-radius: 10px;
  width: 200px;
  max-width: 200px;
  justify-content: center;
`;

export const DownloadText = styled.Text `
  color: #F6BD56;
  font-size: 10px;
  margin-left: 10px;
`;

export const PriceContainer = styled.View `
    width: 360px;
    max-width: 360px; 
    margin-top: 20px;
    flex-direction: column;
`;

export const PriceSubContainer = styled.View `
    width: 360px;
    height: 100px;
    max-width: 360px; 
    margin-top: 10px;
    flex-direction: row;
    justify-content: center;
    background-color: #F4F4F4;
`;

export const PriceSubContainerText = styled.Text `
  color: #000;
  font-size: 8px;
  font-weight: bold;
  align-self: center;
`;

export const PriceSubContainerValue = styled.View ` 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PriceSubContainerTextValue = styled.Text `
  color: #000;
  font-size: 22px;
  font-weight: bold;
`;


export const PriceSubContainerSubTextValue = styled.Text `
  color: #000;
  font-size: 5px;
`;

export const ShopContainer = styled.View `
  margin-top: -13px;
  flex-direction: row;
  background-color: #F7aB21;
  border-width: 2px;
  border-color: #F7aB21;
  border-style: solid;
  border-radius: 10px;
  width: 200px;
  max-width: 200px;
  justify-content: center;
  align-items: center;
`;

export const ShopContainerText = styled.Text `
  color: #000;
  font-size: 10px;
  margin-left: 10px;
  font-weight: bold;
`;

export const FavoriteContainer = styled.View `
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: 10px;
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