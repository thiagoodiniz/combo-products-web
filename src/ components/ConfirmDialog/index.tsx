import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';
import React from 'react';
import { ConfirmButton } from './styles';

interface IConfirmDialogProps {
    title: JSX.Element;
    onCancel(): void;
    onConfirm(): void;
    canShowDialog: boolean;
}

const ConfirmDialog: React.FC<IConfirmDialogProps> = ({ title, onCancel, onConfirm, canShowDialog }) => {
    return (
        <Dialog
            open={canShowDialog}
            onClose={onCancel}
        >
            <DialogContent style={{margin: '1rem 0'}}>
                <>{title}</>
            </DialogContent>
            <DialogActions>
                <Button
                    style={{textTransform: 'none'}}
                    autoFocus 
                    onClick={onCancel} 
                    color="secondary"
                    variant="contained"
                >
                    Não
                </Button>
                <ConfirmButton
                    style={{textTransform: 'none'}}
                    onClick={onConfirm} 
                    color="primary"
                    variant="contained"
                >
                    Sim
                </ConfirmButton>
            </DialogActions>
    </Dialog>
    );
}

export default ConfirmDialog;