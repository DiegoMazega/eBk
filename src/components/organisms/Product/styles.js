import styled from 'styled-components/native';

export const Container = styled.View `
    height: 100px;
    width: 350px;
    max-width: 350px; 
    background-color: #F4F4F4;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: row;
`;

export const ContainerImage = styled.View `
  width: 100px;
  max-width: 100px;
`;

export const ProductAsideImageContainer = styled.View `
    flex-direction: column;
    max-width: 200px;
    margin-left: 10px;
    justify-content: space-around;
`;

export const ProductTextTitle = styled.Text `
    color: #000;
    font-weight: bold;
    font-size: 12px;   
`;

export const ProductSubTitleContainer = styled.View `
`;

export const ProductTextSubTitle = styled.Text `
    color: #000;
    font-size: 10px;   
`;