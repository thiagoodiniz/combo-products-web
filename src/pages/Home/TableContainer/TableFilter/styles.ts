import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.gray3};
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray6};
`;
