import React, { useContext } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

import { Stack, Typography } from '@mui/material';
import { CropContext } from '../../context/crops';

function PhVsRainfall({ crop }) {
    const { crops } = useContext(CropContext);

    const pH = crops?.get(crop)?.details?.map(detail => detail.pH);
    const Temperature = crops?.get(crop)?.details?.map(detail => detail.temperature);

    const arr = [];
    var n = 0;
    if (pH?.length >= 100) {
        n = pH.length;
    }
    else {
        n = 50;
    }
    for (let i = 1; i <= n; i += 3) {
        arr.push(i);
    }

    const labels = arr;


    const data = {
        labels,
        datasets: [
            {
                label: 'pH',
                data: pH,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },

            {
                label: 'Temperature',
                data: Temperature,
                borderColor: 'rgb(0, 238, 0)',
                backgroundColor: 'rgba(0,238,0, 0.5)',
            },
        ],
    };


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,

            },
        },
    };

    return (
        <Stack
            sx={{ width: { md: '75vw', sm: '85vw', xs: '95vw' } , paddingTop:'20px'}}
            display='flex' alignItems='center' justifyContent='center' margin='auto' paddingTop='100px' paddingBottom='100px'>
            <Typography variant='h5' fontWeight={900}>
                pH vs Temperature
            </Typography>
            <Line options={options} data={data} />
        </Stack>
    );
}
export default PhVsRainfall;
