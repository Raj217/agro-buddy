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
    // console.log(cropData?.crops[0]?.name);

    const temperature = cropData?.crops?.map(obj => obj?.temperature);
    // console.log(temperature.length)

    const arr = [];
    var n = 0;
    if (temperature.length > 100) {
        n = temperature.length;
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
        <Stack width={1100} margin='auto' >
            <Line data={data} options={options} />
        </Stack>

    )
}

export default Temperature