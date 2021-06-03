import React from 'react';
import CardItem from './CardItem';
import { Container } from './styles';
import plus from '../../../assets/images/icons/plus.svg';
import registerCombos from '../../../assets/images/icons/register-combos.svg';
import trophy from '../../../assets/images/icons/trophy.svg';
import { useHistory } from 'react-router-dom';
import { ERoutes } from '../../../routes';

const Cards: React.FC = () => {
    const history = useHistory();

    return (
        <Container>
            <CardItem 
                contentTitle={"Criar novo combo"} 
                icon={<img src={plus} alt="Add combo" />}
                onClickIconAction={() => history.push(ERoutes.NEW_COMBO)}
            />
            
            <CardItem 
                contentTitle={"48 combos cadastrados"} 
                icon={<img src={registerCombos} alt="Registered combos" />}
            />
            <CardItem 
                contentTitle={"3 combos ativos"} 
                icon={<img src={trophy} alt="Active combos" />} 
            />
        </Container>
    );
}

export default Cards;