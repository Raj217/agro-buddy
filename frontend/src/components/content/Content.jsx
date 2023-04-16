import React from 'react';
import NPPData from './NPPData';
import PhVsRainfall from './PhVsRainfall';
import TempVsRainfall from './TempVsRainfall';
import Temperature from './Temperature';

const Content = () => {
    return (
        <div>
            <NPPData />
            {/* <PhVsRainfall />
            <TempVsRainfall />
            <Temperature /> */}
        </div>
    )
}

export default Content