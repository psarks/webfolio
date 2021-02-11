import React from 'react'
import { InfoBucketlist } from  '../../components';
import { bucketData } from './Data';



const Bucketlist = () => {
    return (
        <>
            <InfoBucketlist {...bucketData}/>
        </>
    )
}

export default Bucketlist;
