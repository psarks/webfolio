import React from "react";
import CaseStudy from "../casestudypage/CaseStudy";
import casestudyData from "../casestudypage/casestudy.json";

const infoCaseStudy = () => {
  return (
    <>
      <CaseStudy.Container>
        {casestudyData.map((item) => (
          <CaseStudy key={item.id} direction={item.direction}>
            <CaseStudy.Pane>
              <CaseStudy.Header>{item.header}</CaseStudy.Header>
              <CaseStudy.Title>{item.title}</CaseStudy.Title>
              <CaseStudy.SubTitle>{item.subTitle}</CaseStudy.SubTitle>
            </CaseStudy.Pane>
            <CaseStudy.Pane>
              <CaseStudy.Image src={item.image} alt={item.alt} />
            </CaseStudy.Pane>
          </CaseStudy>
        ))}
      </CaseStudy.Container>
    </>
  );
};

export default infoCaseStudy;
