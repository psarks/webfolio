import React from "react";
import {
  Item,
  Inner,
  Pane,
  Header,
  Title,
  SubTitle,
  Image,
  Container,
} from "../casestudypage/casestudy.elements";

const CaseStudy = ({ children, direction = "row", ...restProps }) => {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

CaseStudy.Container = function CaseStudyContainer({ children, ...restProps }) {
  return <Container {...restProps}> {children}</Container>;
};

CaseStudy.Pane = function CaseStudyPane({ children, ...restProps }) {
  return <Pane {...restProps}> {children}</Pane>;
};

CaseStudy.Header = function CaseStudyHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};
CaseStudy.Title = function CaseStudyTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children}</Title>;
};

CaseStudy.SubTitle = function CaseStudySubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

CaseStudy.Image = function CaseStudyImage({ ...restProps }) {
  return <Image {...restProps} />;
};

export default CaseStudy;
