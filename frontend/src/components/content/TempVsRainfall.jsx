import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Stack, Typography } from '@mui/material';
import { CropContext } from '../../context/crops';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function TempVsRainfall() {


    const { cropData } = React.useContext(CropContext);
    const temperature = cropData?.crops?.map(obj => obj?.temperature);
    const humidity = cropData?.crops?.map(obj => obj?.humidity);
    const rainfall = cropData?.crops?.map(obj => obj?.rainfall);


    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Temperature',
                data: temperature,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Rainfall',
                data: rainfall,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Humidity',
                data: humidity,
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
        <Stack width='80%' display='flex' alignItems='center' justifyContent='center' margin='auto' paddingTop='100px' paddingBottom='100px' >
            <Typography variant='h5' fontWeight={900}>Temperature, Rainfall and Humidity graph</Typography>
            <Bar options={options} data={data} />
        </Stack>
    );

}

export default TempVsRainfall;