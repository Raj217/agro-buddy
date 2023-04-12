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
    const Rainfall = cropData?.crops?.map(obj => obj?.rainfall);

    const arr = [];
    var n = 0;
    if (pH.length > 100) {
        n = pH.length;
    }
    else {
        n = 100;
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
                label: 'Rainfall',
                data: Rainfall,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
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
                text: 'Chart.js Line Chart',
            },
        },
    };

    return (
        <Stack width={1100} margin='auto' >
            <Line options={options} data={data} />
        </Stack>
    );
}
export default PhVsRainfall;
