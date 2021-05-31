import React, { useState } from 'react';
import { HeaderContainer, HeaderContent } from './styles';
import gerdauHeaderIcon from '../../assets/images/icons/gerdau_header.svg';
import { Tab } from '@material-ui/core';

enum EHeaderTabs {
    HOME="home",
    NEW_COMBO="new_combo"
}

interface IHeaderTab {
    tab: EHeaderTabs;
    label: string;
}

const Header: React.FC = () => {

    const [selectedTab, setSelectedTab] = useState(EHeaderTabs.HOME);

    const myTabs: IHeaderTab[] = [
        { tab: EHeaderTabs.HOME, label: 'Home' },
        { tab: EHeaderTabs.NEW_COMBO, label: 'Novo combo' }
    ];

    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={gerdauHeaderIcon} alt="user"/>

                <div className="tabs">
                    {   myTabs.map((tab, idx) => 
                        <Tab
                            key={idx}
                            className="tab-button"
                            label={tab.label} 
                            selected={selectedTab === tab.tab}
                            onChange={() => setSelectedTab(tab.tab)}
                        />
                    )}
                </div>

                <div>
                    Thiago
                </div>

            </HeaderContent>
        </HeaderContainer>    
    );
}

export default Header;