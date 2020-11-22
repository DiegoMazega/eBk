import React from 'react';
import { ScrollView } from 'react-native';
import Product from '../../organisms/Product';
import { TopText, Wrapper } from './styles';


export default function Store(){
    return(
        <Wrapper >
            <TopText> Popular </TopText>
            <ScrollView>
                <Product 
                    url='https://a-static.mlcdn.com.br/618x463/livro-harry-potter-e-a-crianca-amaldicoada-parte-um-e-dois/magazineluiza/223249500/a1d2ba4e6f06879a64d4917872488f2e.jpg'
                    title="Harry Potter e a Criança Amaldiçoada"
                    classification="INFANTO JUVENIL"
                    age="12 ANOS"
                />
                <Product 
                    url='https://images-na.ssl-images-amazon.com/images/I/51RlUeEoCAL._SX334_BO1,204,203,200_.jpg'
                    title="Cidade dos Ossos"
                    classification="FANTASIA/AVENTURA"
                    age="16 ANOS"
                />
                 <Product 
                    url='https://a-static.mlcdn.com.br/618x463/livro-harry-potter-e-a-crianca-amaldicoada-parte-um-e-dois/magazineluiza/223249500/a1d2ba4e6f06879a64d4917872488f2e.jpg'
                    title="Harry Potter e a Criança Amaldiçoada"
                    classification="INFANTO JUVENIL"
                    age="12 ANOS"
                />
                <Product 
                    url='https://images-na.ssl-images-amazon.com/images/I/51RlUeEoCAL._SX334_BO1,204,203,200_.jpg'
                    title="Cidade dos Ossos"
                    classification="FANTASIA/AVENTURA"
                    age="16 ANOS"
                />
            </ScrollView>    
        </Wrapper>
    );
}