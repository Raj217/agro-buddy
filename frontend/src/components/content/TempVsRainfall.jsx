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
import { Stack } from '@mui/material';
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

    // console.log(temperature);


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
                text: 'Chart.js Bar Chart',
            },
        },
    };

    return (
        <Stack width={1100} margin='auto' >
            <Bar options={options} data={data} />
        </Stack>
    );


}

export default TempVsRainfall;