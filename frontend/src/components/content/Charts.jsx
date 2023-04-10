import React from 'react';
import { CropContext } from '../../context/crops';
import { Box } from '@mui/material'

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

function Charts() {
    const { cropData } = React.useContext(CropContext);
    console.log(cropData?.crops[0]?.name);

    const temperature = cropData?.crops?.map(obj => obj?.temperature);
    console.log(temperature.length)

    const multiplesOfFive = [];

    for (let i = 1; i <= temperature.length; i += (temperature.length / 10)) {
        multiplesOfFive.push(i);
    }

    const labels = multiplesOfFive;


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
        // <Box width={1400} display='flex' justifyContent='center' alignItems='center'>
        <Line width={100}
            height={50} data={data} options={options} />
        // </Box>
    )
}

export default Charts