import styled from 'styled-components';

export const HeaderContainer = styled.nav`
    position: fixed;
    height: 4rem;
    z-index: 9;
    top: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.blue2};
    box-shadow: ${props => props.theme.commoms.boxShadow};
    display: flex;
    padding: 0 1.5rem;
`;

export const HeaderContent = styled.div`
    height: 100%;
    margin: auto;
    width: ${({ theme }) => theme.breakpoints.laptopL};
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > img {
        height: 2.5rem;
    }

    & > div.tabs {
        align-self: flex-end;
        & > .tab-button {
            font-weight: 700;
            &.Mui-selected {
                border-bottom: 0.25rem solid ${({ theme }) => theme.colors.white};
            }
            & > .MuiTab-wrapper {
                font-size: 1rem;
                text-transform: none;
            }
        }
    }
`;
