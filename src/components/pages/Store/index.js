import React from 'react';
import { ScrollView } from 'react-native';
import Product from '../../organisms/Product';
import { TopText, Wrapper } from './styles';


export default function Store({navigation}){
    return(
        <Wrapper >
            <TopText> Popular </TopText>
            <ScrollView>
                <Product 
                    url='https://a-static.mlcdn.com.br/618x463/livro-harry-potter-e-a-crianca-amaldicoada-parte-um-e-dois/magazineluiza/223249500/a1d2ba4e6f06879a64d4917872488f2e.jpg'
                    title="Harry Potter e a Criança Amaldiçoada"
                    classification="INFANTO JUVENIL"
                    age="12 ANOS"
                    navigation= {navigation}
                    author= "J. K. Rowling"
                    origin= "Inglaterra"
                    originalTitle= "Harry Potter and the Cursed Child"
                    description="Sempre foi díficil ser Harry Potter e não é mais fácil agora que ele é um sobrecarregado funcionário do Ministério da Magia, marido e pai de três crianças em idade escolar. Enquanto Harry lida  com um passado que se recusa a ficar para trás, seu filho mais novo, Alvo, deve lutar com o peso de um legado de família que ele nunca quis. À medida que passado e presente se fundem de forma ameaçadora, ambos, pai e filho, aprendem uma incômoda verdade: às vezes  as trevas vêm de lugares inesperados."
                    price="25,90"
                />
                <Product 
                    url='https://images-na.ssl-images-amazon.com/images/I/51RlUeEoCAL._SX334_BO1,204,203,200_.jpg'
                    title="Cidade dos Ossos"
                    classification="FANTASIA/AVENTURA"
                    age="16 ANOS"
                    navigation= {navigation}
                    author= "Cassandra Clare"
                    origin= "Estados Unidos"
                    originalTitle= "The Mortal Instruments: City of Bones"
                    description="Descubra o universo dos Caçadores de Sombras neste primeiro volume da aclamada série Os Instrumentos Mortais e “prepare-se para se viciar” (Entertainment Weekly)“A nova rainha da fantasia” ― The Wall Street Journal Clary Fray, 15 anos, decide passar a noite em uma boate em Nova York. O maior de seus problemas provavelmente seria lidar com o truculento segurança da porta, certo? Errado. Clary testemunha um crime, e não um crime qualquer: um assassinato cometido por três adolescentes cobertos por enigmáticas tatuagens, brandindo armas esquisitas. Para completar, o corpo da vítima desaparece no ar.Clary quer ligar para a polícia; quer gritar; quer chamar seu amigo, Simon, que ficou na boate enquanto ela teve a infeliz ideia de perseguir o menino bonitinho de cabelo azul... Mas como explicar a eles que ninguém mais na rua enxerga os assassinos, apenas ela? Como provar que houve um crime se não há rastro algum do sangue do garoto morto ― aliás, era mesmo um menino?Mas ela nem tem tempo de tomar uma decisão; logo os assassinos se apresentam para a estranha mundana que não deveria vê-los, mas vê. Jace, Alec e Isabelle são Caçadores de Sombras, guerreiros cuja missão é proteger o mundo que conhecemos de demônios e outras criaturas. Vampiros que saem da linha, lobisomens descontrolados, monstros cheios de veneno? É por aí mesmo. E depois desse primeiro contato com o Mundo de Sombras, e com Jace ― um Caçador que tem a aparência de um anjo, mas a língua tão afiada quanto Lúcifer ―, a vida de Clary nunca mais será a mesma. Mesmo.Sombrio, engraçado e sexy, Cidade dos Ossos é o primeiro volume da série Os Instrumentos Mortais, de Cassandra Clare, que virou um verdadeiro fenômeno mundial e vendeu mais de 50 milhões de exemplares."
                    price="25,90"
                />
                 <Product 
                    url='https://a-static.mlcdn.com.br/618x463/livro-harry-potter-e-a-crianca-amaldicoada-parte-um-e-dois/magazineluiza/223249500/a1d2ba4e6f06879a64d4917872488f2e.jpg'
                    title="Harry Potter e a Criança Amaldiçoada"
                    classification="INFANTO JUVENIL"
                    age="12 ANOS"
                    navigation= {navigation}
                    author= "J. K. Rowling"
                    origin= "Inglaterra"
                    originalTitle= "Harry Potter and the Cursed Child"
                    description="Sempre foi díficil ser Harry Potter e não é mais fácil agora que ele é um sobrecarregado funcionário do Ministério da Magia, marido e pai de três crianças em idade escolar. Enquanto Harry lida  com um passado que se recusa a ficar para trás, seu filho mais novo, Alvo, deve lutar com o peso de um legado de família que ele nunca quis. À medida que passado e presente se fundem de forma ameaçadora, ambos, pai e filho, aprendem uma incômoda verdade: às vezes  as trevas vêm de lugares inesperados."
                    price="25,90"
                />
                <Product 
                    url='https://images-na.ssl-images-amazon.com/images/I/51RlUeEoCAL._SX334_BO1,204,203,200_.jpg'
                    title="Cidade dos Ossos"
                    classification="FANTASIA/AVENTURA"
                    age="16 ANOS"
                    navigation= {navigation}
                    author= "Cassandra Clare"
                    origin= "Estados Unidos"
                    originalTitle= "The Mortal Instruments: City of Bones"
                    description="Descubra o universo dos Caçadores de Sombras neste primeiro volume da aclamada série Os Instrumentos Mortais e “prepare-se para se viciar” (Entertainment Weekly)“A nova rainha da fantasia” ― The Wall Street Journal Clary Fray, 15 anos, decide passar a noite em uma boate em Nova York. O maior de seus problemas provavelmente seria lidar com o truculento segurança da porta, certo? Errado. Clary testemunha um crime, e não um crime qualquer: um assassinato cometido por três adolescentes cobertos por enigmáticas tatuagens, brandindo armas esquisitas. Para completar, o corpo da vítima desaparece no ar.Clary quer ligar para a polícia; quer gritar; quer chamar seu amigo, Simon, que ficou na boate enquanto ela teve a infeliz ideia de perseguir o menino bonitinho de cabelo azul... Mas como explicar a eles que ninguém mais na rua enxerga os assassinos, apenas ela? Como provar que houve um crime se não há rastro algum do sangue do garoto morto ― aliás, era mesmo um menino?Mas ela nem tem tempo de tomar uma decisão; logo os assassinos se apresentam para a estranha mundana que não deveria vê-los, mas vê. Jace, Alec e Isabelle são Caçadores de Sombras, guerreiros cuja missão é proteger o mundo que conhecemos de demônios e outras criaturas. Vampiros que saem da linha, lobisomens descontrolados, monstros cheios de veneno? É por aí mesmo. E depois desse primeiro contato com o Mundo de Sombras, e com Jace ― um Caçador que tem a aparência de um anjo, mas a língua tão afiada quanto Lúcifer ―, a vida de Clary nunca mais será a mesma. Mesmo.Sombrio, engraçado e sexy, Cidade dos Ossos é o primeiro volume da série Os Instrumentos Mortais, de Cassandra Clare, que virou um verdadeiro fenômeno mundial e vendeu mais de 50 milhões de exemplares."
                    price="25,90"
                />
            </ScrollView>    
        </Wrapper>
    );
}