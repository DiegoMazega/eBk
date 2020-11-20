import React from 'react';
import Product from '../../organisms/product';
import { TopText, Wrapper } from './styles';


export default function Store(){
    return(
        <Wrapper >
            <TopText> Popular </TopText>
            <Product 
            url='https://a-static.mlcdn.com.br/618x463/livro-harry-potter-e-a-crianca-amaldicoada-parte-um-e-dois/magazineluiza/223249500/a1d2ba4e6f06879a64d4917872488f2e.jpg'
            title="Harry Potter e a Criança Amaldiçoada"
            classification="INFANTO JUVENIL"
            age="12 ANOS"
            />
        </Wrapper>
    );
}