import styled from 'styled-components';
import { Button, TableRow } from '@material-ui/core';
import editIcon from '../../../../../assets/images/icons/edit.svg';
import editIconFilled from '../../../../../assets/images/icons/edit-filled.svg';
import duplicateIcon from '../../../../../assets/images/icons/duplicate.svg';
import duplicateIconFilled from '../../../../../assets/images/icons/duplicate-filled.svg';
import removeIcon from '../../../../../assets/images/icons/remove.svg';
import removeIconFilled from '../../../../../assets/images/icons/remove-filled.svg';

export const StyledTableRow = styled(TableRow)`
    && {
        &.even {
            background-color: ${({ theme }) => theme.colors.gray2};
        }

        &:last-child {
            border-bottom: 1px solid ${({ theme }) => theme.colors.gray6};
        }

        &.remove-combo {
            animation: removeOpacity 0.75s ease-out;
            @keyframes removeOpacity {
                0% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            }
        }

        transition: all 0.25s ease-in-out;
        &.duplicated-combo {
            border: 2px solid ${({ theme }) => theme.colors.blue3};
            background: ${({ theme }) => theme.colors.gray} 0% 0% no-repeat padding-box;
        }
    }
`;

export const ActionButton = styled(Button)`
    && {
        padding: 0.5rem;
        min-width: 2rem;
        height: 1.5rem;
        background-repeat: no-repeat;
        background-position: center;
    }
`;

export const EditButton = styled(ActionButton)`
    && {
        background-image: url(${editIcon});

        &:hover {
            background-image: url(${editIconFilled});
        }
    }
`;

export const DuplicateButton = styled(ActionButton)`
    && {
        background-image: url(${duplicateIcon});

        &:hover {
            background-image: url(${duplicateIconFilled});
        }
    }
`;

export const RemoveButton = styled(ActionButton)`
    && {
        background-image: url(${removeIcon});

        &:hover {
            background-image: url(${removeIconFilled});
        }
    }
`;

