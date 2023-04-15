import React, { useContext } from 'react';
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

function Temperature({ crop }) {

    const { crops } = useContext(CropContext);

    const Temperature = crops?.get(crop)?.details?.map(detail => detail.temperature);

    console.log(Temperature);

    const arr = [];
    var n = 0;
    if (Temperature?.length >= 100) {
        n = Temperature.length;
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
                data: Temperature,
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
        <Stack
            sx={{ width: { md: '60%', sm: '70%', xs: '80%' } }}
            display='flex' alignItems='center' justifyContent='center' margin='auto' paddingTop='100px' paddingBottom='100px' >
            <Typography fontWeight={900} variant='h5'>Temperature</Typography>
            <Line data={data} options={options} />
        </Stack>

    )
}

export default Temperature