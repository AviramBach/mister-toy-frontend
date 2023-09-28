import { Doughnut } from 'react-chartjs-2';

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
// import faker from 'faker';
import { ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const dataPie = {
    labels: ['Dolls', 'Action fiquers', 'Borad Games', 'Baby Toys', 'Models', 'Lego'],
    datasets: [
        {
            label: 'Sales per product',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
        },
    ],
};





ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Mister Toy global sales',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
export const data = {
    labels,
    datasets: [
        {
            label: '2022',
            data: [40, 70, 30, 40, 50, 60, 30],
            borderColor: 'rgb(200, 99, 132)',
            backgroundColor: 'rgba(200, 99, 132, 0.5)',
        },
        {
            label: '2023',
            data: [20, 60, 80, 45, 95, 110, 120],
            borderColor: 'rgb(20, 50, 180)',
            backgroundColor: 'rgba(20, 50, 180, 0.5)',
        },
    ],
};

export function DashBorad() {
    return (
        <div className='dashborad-container'>
            <Line className='lineChart' options={options} data={data} />
            
            <div className='pieChart'>
                <h1>Here you can find our statistics!
                this is our journy to be the world's best toys seller</h1>
                <Pie data={dataPie} />

            </div>
        </div>
    )
}

