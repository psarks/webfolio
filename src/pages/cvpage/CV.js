import React from 'react';
import {homeObjSix, homeObjFive} from './Data';
import { InfoCV} from '../../components';




const CV = () => {
    return (
        <>
            
            <InfoCV {...homeObjSix}/>
            <InfoCV {...homeObjFive}/>
            
        
        </>
    )
}

export default CV;