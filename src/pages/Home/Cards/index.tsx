import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import { Container } from './styles';
import plus from '../../../assets/images/icons/plus.svg';
import registerCombos from '../../../assets/images/icons/register-combos.svg';
import trophy from '../../../assets/images/icons/trophy.svg';
import { useHistory } from 'react-router-dom';
import { ERoutes } from '../../../routes';
import { IProductComboData } from '../../../services/ProductCombo/types';
import { isComboActive } from '../../../utils';

interface ICardsProps {
    combos: IProductComboData[];
    loading: boolean;
    error: boolean;
}

const Cards: React.FC<ICardsProps> = ({ combos, loading, error }) => {
    const history = useHistory();
    const [activeCombos, setActiveCombos] = useState(0);

    const iniActiveCombos = () => {
        let count = 0;
        combos.forEach(combo => {   
            if(isComboActive(combo)) {
                count++;
            }
        });
        setActiveCombos(count);
    }

    useEffect(() => {
        if(combos) {
            iniActiveCombos();
        }
    });

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
                contentTitle={`${activeCombos} combos ativos`} 
                icon={<img src={trophy} alt="Active combos" />} 
                loading={loading}
            />
        </Container>
    );
}

export default Cards;