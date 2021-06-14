import React from 'react';
import CardItem from './CardItem';
import { Container } from './styles';
import plus from '../../../assets/images/icons/plus.svg';
import registerCombos from '../../../assets/images/icons/register-combos.svg';
import trophy from '../../../assets/images/icons/trophy.svg';
import { useHistory } from 'react-router-dom';
import { ERoutes } from '../../../routes';
import { IProductComboData } from '../../../services/ProductCombo/types';

interface ICardsProps {
    combos: IProductComboData[];
    loading: boolean;
    error: boolean;
}

const Cards: React.FC<ICardsProps> = ({ combos, loading, error }) => {
    const history = useHistory();

    return (
        <Container>
            <CardItem 
                contentTitle={"Criar novo combo"} 
                icon={<img src={plus} alt="Add combo" />}
                onClickIconAction={() => history.push(ERoutes.NEW_COMBO)}
                loading={false}
            />
            
            <CardItem 
                contentTitle={`${combos.length} combos cadastrados`} 
                icon={<img src={registerCombos} alt="Registered combos" />}
                loading={loading}
            />
            <CardItem 
                contentTitle={`${combos.filter(combo => combo.active).length} combos ativos`} 
                icon={<img src={trophy} alt="Active combos" />} 
                loading={loading}
            />
        </Container>
    );
}

export default Cards;