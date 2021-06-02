import React, { useState } from 'react';
import { HeaderContainer, HeaderContent } from './styles';
import gerdauHeaderIcon from '../../assets/images/icons/gerdau_header.svg';
import { Tab } from '@material-ui/core';
import LoggedUser from './LoggedUser';
import { useHistory } from 'react-router-dom';
import { ERoutes } from '../../routes';

enum EHeaderTabs {
    HOME="home",
    NEW_COMBO="new_combo"
}

interface IHeaderTab {
    tab: EHeaderTabs;
    label: string;
    route: ERoutes;
}

const Header: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(EHeaderTabs.HOME);
    const history = useHistory();

    const myTabs: IHeaderTab[] = [
        { tab: EHeaderTabs.HOME, label: 'Home', route: ERoutes.HOME },
        { tab: EHeaderTabs.NEW_COMBO, label: 'Novo combo', route: ERoutes.NEW_COMBO }
    ];

    const onChangeTab = (tab: IHeaderTab) => {
        setSelectedTab(tab.tab);
        history.push(tab.route);
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
                            onChange={() => onChangeTab(tab)}
                        />
                    )}
                </div>
                
                <LoggedUser />

            </HeaderContent>
        </HeaderContainer>    
    );
}

export default Header;