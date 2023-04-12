import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { CropContext } from '../../context/crops';


ChartJS.register(ArcElement, Tooltip, Legend);

import { Stack, Typography } from '@mui/material'


function NPPData() {

    const median = arr => {
        const mid = Math.floor(arr.length / 2),
            nums = [...arr].sort((a, b) => a - b);
        return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    };

    const { cropData } = React.useContext(CropContext);
    const Phosphorous = cropData?.crops?.map(obj => obj?.phosphorus);
    const Nitrogen = cropData?.crops?.map(obj => obj?.nitrogen);
    const Potassium = cropData?.crops?.map(obj => obj?.potassium);

    const PhosphorusMedian = median(Phosphorous);
    const NitrogenMedian = median(Nitrogen);
    const PotassiumMedian = median(Potassium);


    const data = {
        labels: ['Phosphorous', 'Nitrogen', 'Potassium'],
        datasets: [
            {
                label: 'Contents',
                data: [PhosphorusMedian, NitrogenMedian, PotassiumMedian],
                backgroundColor: [
                    'rgba(255, 48, 92, 0.5)',
                    'rgba(255, 186, 18, 0.5)',
                    'rgba(56, 160, 160, 0.5)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    return (
        <Stack width='40%' display='flex' alignItems='center' justifyContent='center' margin='auto' paddingTop='100px' paddingBottom='100px' >
            <Typography variant='h5' fontWeight={900}>Nitrogen, Phosphorous and Potassium content</Typography>
            <Pie data={data} />
        </Stack>
    );
}

export default NPPData
