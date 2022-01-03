import styled from '@emotion/styled';

export const UImenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    li {
      display: flex;
      margin: 20px;
      cursor: pointer;
      .other {
        margin-right: 15px;
      }
    }
  }
`;
