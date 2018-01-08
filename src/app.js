const _ = require('lodash');
import * as IconTemplates from './iconTemplates';
import iconAttributions from './iconAttributions';
import makeZipdipCard from './makeZipdipCard';


let ZipTemplate = IconTemplates.zip,
    DipTemplate = IconTemplates.dip,
    PotatoChipTemplate = IconTemplates.potatoChip,
    MiracleWhipTemplate = IconTemplates.miracleWhip;

let app = document.querySelector('#app'),
    header = document.querySelector('header'),
    titleIcon = document.querySelector('#titleIcon'), //these id selectors test only right now
    nozipdips = document.querySelector('#no-zipdips'),
    generated = document.querySelector('#generated'),
    btnMakeZipdip = document.querySelector('#makeZipdip'),
    iconAttributionsEl = document.querySelector('#icon-attributions');

btnMakeZipdip.addEventListener('click', makeZipdip);

let titleIconTemplate = _.random(0,1,true) > .5 ? ZipTemplate : DipTemplate;
titleIcon.insertAdjacentHTML('beforeend', titleIconTemplate);

function makeZipdip(){
    let iconGroupCounts = [
        {
            constKey: 'ZIP',
            count: _.random(0,5,false)
        },
        {
            constKey: 'DIP',
            count: _.random(0,5,false)
        },
        {
            constKey: 'POTATO_CHIP',
            count: _.random(0,3,false)
        },
        {
            constKey:'MIRACLE_WHIP',
            count: _.random(0,1,false)
        },
    ];

    if(header.className.indexOf('faded') === -1){
        header.className += header.className ? ' faded' : 'faded';
    }
    nozipdips.className += nozipdips.className ? ' hidden' : 'hidden';

    //generateCounts() func here to tailor the randomness of each icon category...
    // zips will be more volatile (move 5s but also more 1s)
    // dips will be more consistent but more average (more 2s, 3s, and 4s than 1s and 5s)
    // potatochips will be based on the generated zips and dips and also some cyclic outside var (days of week/month, moon cycle etc.) and be limited to 3
    // miraclewhips will have a 1/100 chance (for now) and be limited to one per card
    generated.insertAdjacentHTML('beforeend', makeZipdipCard(iconGroupCounts));
}

iconAttributionsEl.insertAdjacentHTML('beforeend', iconAttributions());
