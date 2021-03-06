import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import { Container } from './styles';
import plus from '../../../assets/images/icons/plus.svg';
import registerCombos from '../../../assets/images/icons/register-combos.svg';
import trophy from '../../../assets/images/icons/trophy.svg';
import { useHistory } from 'react-router-dom';
import { ERoutes } from '../../../routes';
import { isComboActive } from '../../../utils';
import { useCombosState } from '../../../context/Combos';
import { IProductComboData } from '../../../context/Combos/types';

interface ICardsProps {
    combos: IProductComboData[];
    filterByActiveCombos(): void;
    isFilteredByActiveCombos: boolean;
}

const Cards: React.FC<ICardsProps> = ({ combos, filterByActiveCombos, isFilteredByActiveCombos }) => {
    const history = useHistory();
    const [activeCombos, setActiveCombos] = useState(0);
    const { combosState } = useCombosState();

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
                loading={combosState.loading}
            />
            <CardItem 
                contentTitle={`${activeCombos} combos ativos`} 
                icon={<img src={trophy} alt="Active combos" />} 
                loading={combosState.loading}
                onClickIconAction={filterByActiveCombos}
                title={isFilteredByActiveCombos ? 'Clique para remover o filtro' : 'Clique para filtrar por combos ativos'}
                cardSelected={isFilteredByActiveCombos}
            />
        </Container>
    );
}

export default Cards;