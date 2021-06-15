import React, { useState } from 'react';
import { Button, MenuItem, TextField } from '@material-ui/core';
import { Container, AddGPDButton, TagsContainer } from './styles';
import plusIcon from '../../../assets/images/icons/plus-small.svg';
import { gpds, IGpd, IGpdSkuQuantItem } from '../../../services/ProductCombo/types';

interface IGpdSkuQuantProps {
    tagList: IGpdSkuQuantItem[];
    updateTagList(newTagList: IGpdSkuQuantItem[]): void;
    disabled: boolean;
}

const getGPDLabel = (id: string): string => {
    return gpds.find(gpd => gpd.id === id)?.label || '';
}

const GpdSkuQuant: React.FC<IGpdSkuQuantProps> = ({ tagList, updateTagList, disabled }) => {

    const [gpd, setGpd] = useState<IGpd>();
    const [sku, setSku] = useState('');
    const [quantity, setQuantity] = useState('');

    const onAddTag = () => {
        if(gpd && sku && quantity){
            const newTag: IGpdSkuQuantItem = { gpd: gpd.id, sku, quantity };
            updateTagList([...tagList, newTag]);
            setGpd(undefined);
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
                    select
                    className="gpd-item-field"
                    label="GPD"
                    value={gpd ? gpd.id : ''}
                    onChange={(e: any) => {
                        const selectedGPD = gpds.find(item => item.id === e.target.value) as IGpd;
                        setGpd(selectedGPD)
                    }}
                    disabled={disabled}
                >
                    {gpds.map((gpd, idx) =>
                        <MenuItem key={idx} value={gpd.id}>
                            {gpd.label}
                        </MenuItem>
                    )}
                </TextField>

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

                <AddGPDButton 
                    onClick={onAddTag} 
                    disabled={!gpd || !sku || !quantity || disabled}
                    >
                    <img src={plusIcon} className="plus" alt="plus button"/>
                </AddGPDButton>
            </Container>

            {   tagList.length > 0 &&
                <TagsContainer>
                    {   tagList.map((tag, idx) => 
                        <div className={`tag tag-${idx}`} key={idx}>
                            <span>{ `${getGPDLabel(tag.gpd)} - ${tag.sku} - ${tag.quantity}` }</span>
                            
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

export default GpdSkuQuant;