import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Container, AddItemButton, TagsContainer } from './styles';
import plusIcon from '../../../assets/images/icons/plus-small.svg';
import { ISkuQuantItem } from '../../../context/Combos/types';

interface ISkuQuantProps {
    tagList: ISkuQuantItem[];
    updateTagList(newTagList: ISkuQuantItem[]): void;
    disabled: boolean;
}

const SkuQuant: React.FC<ISkuQuantProps> = ({ tagList, updateTagList, disabled }) => {

    const [sku, setSku] = useState('');
    const [quantity, setQuantity] = useState('');

    const onAddTag = () => {
        if(sku && quantity){
            const newTag: ISkuQuantItem = { sku, quantity };
            updateTagList([...tagList, newTag]);
            setSku('');
            setQuantity('');
        }
    }

    const onRemoveTag = (idx: number) => {
        document.getElementsByClassName(`tag-${idx}`)[0].classList.add('remove-tag');
        setTimeout(() => {
            document.getElementsByClassName(`tag-${idx}`)[0].classList.remove('remove-tag');
            updateTagList(tagList.filter((_, i) => i !== idx));
        }, 400);
    }

    return (
        <>
            <Container>
                <TextField
                    className="gpd-item-field"
                    label="SKU"
                    value={sku}
                    onChange={(e: any) => setSku(e.target.value)}
                    disabled={disabled}

                />
                <TextField
                    className="gpd-item-field"
                    label="Quantidade"
                    value={quantity}
                    onChange={(e: any) => setQuantity(e.target.value)}
                    disabled={disabled}
                />

                <AddItemButton 
                    onClick={onAddTag} 
                    disabled={!sku || !quantity || disabled}
                    >
                    <img src={plusIcon} className="plus" alt="plus button"/>
                </AddItemButton>
            </Container>

            {   tagList.length > 0 &&
                <TagsContainer>
                    {   tagList.map((tag, idx) => 
                        <div className={`tag tag-${idx}`} key={idx}>
                            <span>{ `${tag.sku} - ${tag.quantity}` }</span>
                            
                            {   !disabled &&
                                <Button title="remover" onClick={() => onRemoveTag(idx)}>x</Button>    
                            }
                        </div>
                    )}
                </TagsContainer>
            }
        </>
    );
}

export default SkuQuant;