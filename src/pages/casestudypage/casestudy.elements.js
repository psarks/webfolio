import styled from "styled-components/macro";

export const Item = styled.div`
  display: flex;
  border-bottom: 2px solid #222;
  padding: 80px 5%;
  background-color: #85e0ff;
  color: black;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  /*passing prop direction*/
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1800px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  font-size: 50px;
  width: 50%;
  padding: 50px;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Header = styled.div`
  font-size: 50px;
`;

export const Title = styled.h1`
  font-size: 40px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 660px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item} :last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
