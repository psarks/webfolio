import styled from "styled-components";
import slackimg from "../../images/casestudyimages/slack-1.svg";

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ listStart }) => (listStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  display: flex;
  flex: 1;
  padding-bottom: 100px;
  padding-top: 100px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 340px;
  background-color: blue;

  @media screen and (max-width: 768px) {
    padding-bottom: 5px;
  }
`;

export const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  max-width: 440px;
  padding-left: 30px;
  line-height: 100px;
  font-size: 48px;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  margin-left: 28px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;

export const Paragraph = styled.p`
  max-width: 555px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  font-size: 30px;
  line-height: 44px;
  font-family: "Caveat", cursive;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
  max-width: 100%;

  /*border: 0;
    max-width: 100%;
    top: 100px;
    display: inline-block;
    max-height: 500px;
    z-index:10400; 
    */
`;
