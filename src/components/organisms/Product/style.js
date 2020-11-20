import styled from 'styled-components/native';

export const Container = styled.View `
    height: 300px;
    width: 350px; 
    background-color: #F4F4F4;
    margin-top: 50px;
    flex-direction: row;
`;
export const ProductAsideImageContainer = styled.View `
    flex-direction: column;
    max-width: 170px;
    margin-left: 10px;
`;

export const ProductTextTitle = styled.Text `
    color: #000;
    font-weight: bold;
    font-size: 15px; 
    margin-top: 10px   
`;

export const ProductSubTitleContainer = styled.View `
  margin-top: 10px 
`;

export const ProductTextSubTitle = styled.Text `
    color: #000;
    font-size: 15px;   
`;

export const ProductRatingContainer = styled.View `
  margin-top: 50px
  margin-right: 20px; 
`;

export const ProductDownloadContainer = styled.View `
  margin-top: 50px
  flex-direction: row;
  border-width: 2px;
  border-color: #F6BD56;
  border-style: solid;
  border-radius: 10px;
  max-width: 150px;
  justify-content: center;
  align-item: center;
`;

export const ProductDownloadText = styled.Text `
  color: #F6BD56;
  font-size: 13px;
  margin-left: 1px;
`;