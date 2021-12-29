import styled from "@emotion/styled";

export const Card = styled.div`
    border: 3px solid var(--color-stroke);
    padding: 2.5rem;
    border-radius: 3px;
    margin: 10px;
    & .card-header{
        display: flex;
        margin-bottom: 1rem;
        padding-top: 0px;
        align-items: center;
    }
    & .card-copy {
        margin-bottom: 0px;
    }
`;