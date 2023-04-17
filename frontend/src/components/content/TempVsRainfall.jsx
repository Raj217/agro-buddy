import React, { useContext } from 'react';
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

function TempVsRainfall({ crop }) {


    const { crops } = useContext(CropContext);

    const Humidity = crops?.get(crop)?.details?.map(detail => detail.humidity);
    const Temperature = crops?.get(crop)?.details?.map(detail => detail.temperature);
    const Rainfall = crops?.get(crop)?.details?.map(detail => detail.rainfall);


    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Temperature',
                data: Temperature,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Rainfall',
                data: Rainfall,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Humidity',
                data: Humidity,
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
            display='flex' alignItems='center' justifyContent='center' margin='auto' paddingTop='100px' paddingBottom='100px' >
            <Typography variant='h5' fontWeight={900}>Temperature, Rainfall and Humidity graph</Typography>
            <Bar options={options} data={data} />
        </Stack>
    );

}

export default TempVsRainfall;