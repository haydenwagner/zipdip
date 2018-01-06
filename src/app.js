import * as IconTemplates from './iconTemplates';
import iconAttributions from './iconAttributions';
import makeChartContent from './makeChartContent';
// import iconChartMatrix from './iconChartMatrix';

let ZipTemplate = IconTemplates.zip,
    DipTemplate = IconTemplates.dip,
    PotatoChipTemplate = IconTemplates.potatoChip,
    MiracleWhipTemplate = IconTemplates.miracleWhip;
let app = document.querySelector('#app'),
    topAxis = document.querySelector('#top-axis'),
    leftAxis = document.querySelector('#left-axis'),
    chartContent = document.querySelector('#chart-content'),
    iconAttributionsEl = document.querySelector('#icon-attributions'),
    titleIcon = document.querySelector('#titleIcon'); //these id selectors test only right now
    // dip = document.querySelector('#dip'),
    // potatoChip = document.querySelector('#potato-chip'),
    // miracleWhip = document.querySelector('#miracle-whip'),
    // paperClip = document.querySelector('#paper-clip'),

let titleIconTemplate = _.random(0,1,true) > .5 ? ZipTemplate : DipTemplate;
titleIcon.insertAdjacentHTML('beforeend', titleIconTemplate);


    //PaperClipTemplate = IconTemplates.paperClip;

// chartContent.insertAdjacentHTML('beforeend', makeChartContent());



// zip.insertAdjacentHTML('beforeend', ZipTemplate);
// zip.insertAdjacentHTML('beforeend', ZipTemplate);
// zip.insertAdjacentHTML('beforeend', ZipTemplate);
// dip.insertAdjacentHTML('beforeend', DipTemplate);
// dip.insertAdjacentHTML('beforeend', DipTemplate);
// potatoChip.insertAdjacentHTML('beforeend', PotatoChipTemplate);
// miracleWhip.insertAdjacentHTML('beforeend', MiracleWhipTemplate);
//paperClip.insertAdjacentHTML('beforeend', PaperClipTemplate);

iconAttributionsEl.insertAdjacentHTML('beforeend', iconAttributions());
