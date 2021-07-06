import React, { createContext, useState, useContext }  from 'react';
import { ProductComboService } from '../../services/ProductCombo';
import { IChannelsState } from './types';

const INITIAL_VALUE: IChannelsState = {
    channels: undefined,
    loading: false,
    error: false
} 

const ChannelsContext = createContext<{ channelsState: IChannelsState, setChannelsState(newChannelState: IChannelsState): void  } | undefined>(undefined);

export const ChannelsProvider: React.FC = ({ children }) => {
    const [channelsState, setChannelsState] = useState<IChannelsState>(INITIAL_VALUE);

    return (
        <ChannelsContext.Provider 
            value={{ channelsState, setChannelsState }}
        >
            {children}
        </ChannelsContext.Provider>
    );
}

export function useChannelsState() {
    const context = useContext(ChannelsContext);
    
    if (!context) throw new Error("useChannelsState fail");
    const { channelsState, setChannelsState } = context;
    const comboSvc = new ProductComboService();


    const loadChannels = () => {
        setChannelsState({
            ...channelsState,
            loading: true,
            error: false,
        });

        comboSvc.getChannels()
        .then(channels => {
            setChannelsState({
                ...channelsState,
                loading: false,
                channels
            })
        })
        .catch(err => {
            console.log('loadChannels', err)
            setChannelsState({
                ...channelsState,
                loading: false,
                error: true,
            })
        });
    }


    return { channelsState, loadChannels };
}