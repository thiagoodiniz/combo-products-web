import React from 'react';
import { Container } from './styles';

interface ICardItemProps {
    contentTitle: string;
    icon: JSX.Element;
    onClickIconAction?(): void
}

const CardItem: React.FC<ICardItemProps> = ({ contentTitle, icon, onClickIconAction }) => {
    return (
        <Container 
            style={{cursor: onClickIconAction ? 'pointer' : 'unset'}}
            onClick={onClickIconAction}
        >
            <div className="icon-box">
                <>{ icon }</>
            </div>
            <div className="card-content">
                { contentTitle }
            </div>
        </Container>
    );
}

export default CardItem;