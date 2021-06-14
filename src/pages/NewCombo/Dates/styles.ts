import { FormControlLabel } from '@material-ui/core';
import styled from 'styled-components';
import { FormControl } from '@material-ui/core';


export const DatesFormControl = styled(FormControl)`
    && {
        margin: 0.5rem 0;
        max-width: 22rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};


        & input {
            font-size: 1rem;
            color: ${({ theme }) => theme.colors.blueDark};
        }

        & > div { 
            display: flex;
            justify-content: space-between;
            margin-top: 0.5rem;

            & > label {
                margin-left: 0;
            }
        }

    }
`;

export const DateFormControlLabel = styled(FormControlLabel)`
    && {
        & > span {
            font-size: 0.875rem;
            color: ${props => props.theme.colors.blueDark };

        }

        &.disabled {
            & > span {
                color: ${({ theme }) => theme.colors.gray5};
            }
        }
        
        &.invalid-date {
            & span, input, svg {
                color: ${props => props.theme.colors.red };
            }
        }
    }
`;
