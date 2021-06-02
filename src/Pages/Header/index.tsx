import React, { useEffect, useState } from 'react';
import { HeaderContainer, HeaderContent } from './styles';
import gerdauHeaderIcon from '../../assets/images/icons/gerdau_header.svg';
import { Tab } from '@material-ui/core';
import LoggedUser from './LoggedUser';
import { useHistory, useLocation } from 'react-router-dom';
import { ERoutes } from '../../routes';


interface IHeaderTab {
    tab: ERoutes;
    label: string;
}

const Header: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(ERoutes.HOME);
    const history = useHistory();
    const { pathname } = useLocation();

    useEffect(() => {
        const path = (`/${pathname.split('/')[1]}` as ERoutes);
        setSelectedTab(path);
    },[pathname]);

    const myTabs: IHeaderTab[] = [
        { tab: ERoutes.HOME, label: 'Home' },
        { tab: ERoutes.NEW_COMBO, label: 'Novo combo' }
    ];

    const onChangeTab = (tab: ERoutes) => {
        setSelectedTab(tab);
        history.push(tab);
    }

    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={gerdauHeaderIcon} alt="Gerdau"/>

                <div className="tabs">
                    {   myTabs.map((tab, idx) => 
                        <Tab
                            key={idx}
                            className="tab-button"
                            label={tab.label} 
                            selected={selectedTab === tab.tab}
                            onChange={() => onChangeTab(tab.tab)}
                        />
                    )}
                </div>
                
                <LoggedUser />

            </HeaderContent>
        </HeaderContainer>    
    );
}

export default Header;