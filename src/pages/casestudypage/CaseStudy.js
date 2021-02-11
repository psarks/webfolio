import React from 'react';
import { homeObjFive} from './Data'
import { InfoSection } from '../../components'
import {Wrapper, Paragraph} from './casestudy.elements'


const Casestudy = () => {
    return (
        <>
         <InfoSection {...homeObjFive}/>
         <Wrapper>
             <Paragraph>
             <strong>Background</strong> <br/> <br/>
                    
                    Working in general can be tough not everyone will have their 
                    dream job. The work environment everyone goes through will 
                    be different and so I want to enhance the way we are organized, 
                    in Slack, and take away some of the clutter. Meaning, being 
                    able to add certain folders in the channels that can organize 
                    projects alot cleaner, adding tags on previous conversations 
                    to help locate them quicker or just to help them get located. 
                    It would not end there, when you work from home it does not 
                    mean you work near your new project you just landed, it could 
                    mean you live anywhere, even across the world. In the channel 
                    section I think it is ideal for individuals who are remote 
                    employees to include a location privilege folder in the channel 
                    section. This folder can be named by the project or location or 
                    anything they see fit. Also, for locations, having a geolocation 
                    set could help automatically set off notifications and when a 
                    message is being sent to the individual a reply message can be 
                    sent back saying “out of the office”. This could really help 
                    individuals when they are on the move and the messenger getting 
                    notified helps with business. Overall, businesses should care 
                    about making the adjustments in Slack because it will make the 
                    work experience from home less difficult and or overwhelming for 
                    teams and individuals.
                    <br/> <br/>
                    <strong>Project collaborators need a better organization feature 
                        with a delay in notifications so they can have seamless productivity 
                        at a point in time they are currently busy</strong>
             </Paragraph>
         </Wrapper>

        </>
    )
}

export default Casestudy;