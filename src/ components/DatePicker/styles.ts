import styled from 'styled-components';
import { KeyboardDatePicker as MaterialDatePicker } from '@material-ui/pickers';

export const CustomDatePicker = styled(MaterialDatePicker)`
    && {
        & > div {
            margin: 0;
            border: 2px solid ${({ theme }) => theme.colors.gray6};
            border-radius: 0.25rem;
            padding: 0 0.25rem;

            &::before, &::after {
                content: none;
            }

            & > input {
                font-size: 0.875rem;
                color: ${({ theme }) => theme.colors.blueDark};
                outline: none;
                height: unset;
                box-sizing: border-box;
                max-width: 5rem;
                padding: 0 0.5rem;
                border: none;
            }

            & > div.MuiInputAdornment-root > button {
                padding: 0;

                & svg {
                    width: 1rem;
                    height: 1rem;
                }
            }
        }

        &.hideBorder {
            & > div {
                border: none;

                & input {
                    padding: 0 0 0 0.5rem;
                }
                & .MuiInputAdornment-positionEnd {
                    margin: 0 0.5rem 0 0;
                }
            }
        }

        &.error {
            & > div {
                border: 1px solid ${({ theme }) => theme.colors.red};
            }
        }
    }
`;
