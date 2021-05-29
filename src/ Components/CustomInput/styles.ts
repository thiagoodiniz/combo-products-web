import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid #727583;
    margin-bottom: 1rem;
    position: relative;

    & > input {
        border: none;
        background: none;
        outline: none;
        height: 2rem;
        width: 100%;
        padding: 0 1rem 0 2rem;
        font-size: 0.875rem;

        &::placeholder {
            opacity: 0.7;
        }
    }

    & > .icon-content {
        position: absolute;
    }
`;
