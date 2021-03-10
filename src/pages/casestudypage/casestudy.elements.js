import styled from "styled-components/macro";

export const Item = styled.div`
  display: flex;

  padding: 80px 5%;
  background-color: #85e0ff;

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
  font-size: 100px;
  font-family: "Roboto", sans-serif;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 70px;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-family: "Brygada 1918", serif;
  line-height: 1.1;
  margin-bottom: 8px;
  text-align: center;

  @media (max-width: 660px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: 35px;
  font-family: "David Libre", serif;

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
