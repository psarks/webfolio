import React from 'react';
import { homeObjThree, homeObjFour } from './Data';
import { InfoPhoto, InfoSection} from '../../components';


 const Photography = () => {
    
    return (
        <>
        <InfoPhoto {...homeObjThree}/>
        <InfoSection {...homeObjFour}/>
           
        </>
    )
}


export default Photography;
