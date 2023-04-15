import React, { useContext } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { CropContext } from '../../context/crops';


ChartJS.register(ArcElement, Tooltip, Legend);

import { Stack, Typography } from '@mui/material'


const NPPData = ({ crop }) => {

    const { crops } = useContext(CropContext);

    const Phosphorous = crops?.get(crop)?.preview?.phosphorous;
    const Nitrogen = crops?.get(crop)?.preview?.nitrogen;
    const Potassium = crops?.get(crop)?.preview?.potassium;


    const data = {
        labels: ['Phosphorous', 'Nitrogen', 'Potassium'],
        datasets: [
            {
                data: [Phosphorous, Nitrogen, Potassium],
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
        <Stack
            sx={{ width: { md: '35%', sm: '45%', xs: '60%' } }}
            display='flex' alignItems='center' justifyContent='center' margin='auto' paddingTop='100px' paddingBottom='100px' >
            <Typography variant='h5' fontWeight={900}>Nitrogen, Phosphorous and Potassium content</Typography>
            <Pie data={data} />
        </Stack>
    );
}

export default NPPData
