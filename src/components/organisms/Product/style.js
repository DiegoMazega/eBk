import styled from 'styled-components/native';

export const Container = styled.View `
    height: 200px;
    width: 350px;
    max-width: 360px; 
    background-color: #F4F4F4;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: row;
`;

export const ProductAsideImageContainer = styled.View `
    flex-direction: column;
    max-width: 200px;
    margin-left: 10px;
`;

export const ProductTextTitle = styled.Text `
    color: #000;
    font-weight: bold;
    font-size: 12px; 
    margin-top: 10px   
`;

export const ProductSubTitleContainer = styled.View `
  margin-top: 10px 
`;

export const ProductTextSubTitle = styled.Text `
    color: #000;
    font-size: 10px;   
`;

export const ProductRatingContainer = styled.View `
  margin-top: 10px
  margin-right: 70px; 
`;

export const ProductDownloadContainer = styled.View `
  margin-top: 20px
  flex-direction: row;
  border-width: 2px;
  border-color: #F6BD56;
  border-style: solid;
  border-radius: 10px;
  max-width: 190px;
  justify-content: space-around;
`;

export const ProductDownloadText = styled.Text `
  color: #F6BD56;
  font-size: 10px;
  margin-left: 1px;
`;
