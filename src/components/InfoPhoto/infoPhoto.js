import React from 'react';
import { Link } from 'react-router-dom'

import { SliderData } from '../../components/ImageSlider/SliderData';
import { ImageSlider } from '../../components';
/*import {ReactTypical} from "@deadcoder0904/react-typical";
<Img src={img} alt={alt}/>*/

import { Container, Button } from '../../globalStyles'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper} from './infoPhoto.elements'


const InfoPhoto = ({primary, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, headline, lightText, topLine, img, alt, start}) => {
    return (
        <>
          <InfoSec lightBg={lightBg}>
              <Container>
                <InfoRow imgStart ={imgStart}>
                    <InfoColumn>
                      <TextWrapper>
                        <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        <Link to='/bucketlist'>
                            <Button big fontBig primary={primary}>
                                {buttonLabel}
                            </Button>
                        </Link>
                      </TextWrapper> 
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                        <ImageSlider slides={SliderData}/> 
                            
                        </ImgWrapper>
                        
                    </InfoColumn>
                </InfoRow>
              </Container>
        </InfoSec>  
        </>
    )
}

export default InfoPhoto;