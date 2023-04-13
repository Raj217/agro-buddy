import React from 'react';
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

import { CropContext } from '../../context/crops';
import { Stack, Typography } from '@mui/material'



function PhVsRainfall() {

    const { cropData } = React.useContext(CropContext);

    const pH = cropData?.crops?.map(obj => obj?.pH);
    const Temperature = cropData?.crops?.map(obj => obj?.temperature);

    const arr = [];
    var n = 0;
    if (pH.length >= 100) {
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
        <Stack width='80%' display='flex' alignItems='center' justifyContent='center' margin='auto' paddingTop='100px' paddingBottom='100px'>
            <Typography variant='h5' fontWeight={900}>
                pH vs Temperature
            </Typography>
            <Line options={options} data={data} />
        </Stack>
    );
}
export default PhVsRainfall;
