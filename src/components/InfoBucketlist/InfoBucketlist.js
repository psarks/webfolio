import React from "react";
import {
  InfoRow,
  ImgWrapper,
  Img,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
  Paragraph,
} from "./bucketlist.elements";
import lightbulb from "../../images/lightbulb.svg";
import { Container } from "../../globalStyles";

const Bucketlist = ({
  listStart,
  start,
  alt,
  lightText,
  headline,
  lightTextDesc,
  description,
  paragraph,
  lightTextParag,
}) => {
  return (
    <>
      <Container>
        <InfoRow listStart={listStart}>
          <InfoColumn>
            <TextWrapper start={start}>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
            </TextWrapper>
          </InfoColumn>
          <InfoColumn>
            <Paragraph>
              1. Publish a Book <br />
              2. Watch a Champions League game LIVE <br /> 3. Rowing <br />
              4. Design a website that can help others <br /> 5. Make a
              difference in the world <br />
              6. Get my U.S Citizenship <br /> 7. Be able to travel outside of
              the United States{" "}
            </Paragraph>
          </InfoColumn>
        </InfoRow>
      </Container>
    </>
  );
};

export default Bucketlist;
