import { Skeleton } from '@material-ui/lab';
import React from 'react';
import { Container, SkeletonContainer } from './styles';

interface ICardItemProps {
    contentTitle: string;
    icon: JSX.Element;
    onClickIconAction?(): void
    loading: boolean;
    title?: string;
    cardSelected?: boolean;
}

const CardItem: React.FC<ICardItemProps> = ({ contentTitle, icon, onClickIconAction, loading, title, cardSelected }) => {
    return (
        <>
            {   !loading &&
                <Container
                    title={title ? title : ''}
                    style={{cursor: onClickIconAction ? 'pointer' : 'unset'}}
                    onClick={() => onClickIconAction ? onClickIconAction() : undefined}
                    className={cardSelected ? 'cardSelected' : ''}
                >
                            <div className="icon-box">
                                <>{ icon }</>
                            </div>
                            <div className="card-content">
                                { contentTitle }
                            </div>
                </Container>
            }

            {   loading &&
                <SkeletonContainer>
                    <Skeleton animation="pulse" width={'100%'} height={'5rem'}/>
                </SkeletonContainer>
            }
        </> 
    );
}

export default CardItem;