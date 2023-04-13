import React from 'react';
import { CropContext } from '../../context/crops';
import { Stack, Typography } from '@mui/material'

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

function Temperature() {
    const { cropData } = React.useContext(CropContext);

    const temperature = cropData?.crops?.map(obj => obj?.temperature);

    const arr = [];
    var n = 0;
    if (temperature.length >= 100) {
        n = temperature.length;
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
                label: 'Temperature values',
                data: temperature,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
        <Stack width='80%' display='flex' alignItems='center' justifyContent='center' margin='auto' paddingTop='100px' paddingBottom='100px' >
            <Typography fontWeight={900} variant='h5'>Temperature</Typography>
            <Line data={data} options={options} />
        </Stack>

    )
}

export default Temperature