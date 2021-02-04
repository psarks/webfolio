import React from 'react';
import { homeObjThree, homeObjFour } from './Data';
import { InfoPhoto} from '../../components';


 const Photography = () => {
    
    return (
        <>
        <InfoPhoto {...homeObjThree}/>
        <InfoPhoto {...homeObjFour}/>
           
        </>
    )
}


export default Photography;
