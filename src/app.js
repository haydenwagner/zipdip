import dip from './dip.js';

let app = document.querySelector('#app'),
    topAxis = document.querySelector('#top-axis'),
    leftAxis = document.querySelector('#left-axis'),
    chartContent = document.querySelector('#chart-content');



chartContent.insertAdjacentHTML('beforeend', dip());
