import styled from '@emotion/styled';

export const UImenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    li {
      display: flex;
      margin: 10px 50px;
      cursor: pointer;
      .other {
        margin-right: 15px;
      }
      a:hover {
        transition: 0.5s;
        transform: scale(1.5);
      }
    }
  }
`;
