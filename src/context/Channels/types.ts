
export interface IChannelsState {
    channels: IChannel[] | undefined;
    loading: boolean;
    error: boolean;
}

export interface IChannel {
    name: string;
    channel_id: string;
}