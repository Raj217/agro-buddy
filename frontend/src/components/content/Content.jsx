import React from 'react';
import NPPData from './NPPData';
import PhVsRainfall from './PhVsRainfall';
import TempVsRainfall from './TempVsRainfall';
import Temperature from './Temperature';
import { useParams } from 'react-router-dom';

const Content = () => {
    const { crop } = useParams();
    console.log(crop);
    return (
        <div>
            <NPPData crop={crop} />
            <PhVsRainfall crop={crop} />
            <TempVsRainfall crop={crop} />
            <Temperature crop={crop} />
        </div>
    )
}

export default Content