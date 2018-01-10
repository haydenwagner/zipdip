const _ = require('lodash');
import * as IconTemplates from './iconTemplates';
import iconAttributions from './iconAttributions';
import makeZipdipCard from './makeZipdipCard';
import colors from './colors';


let ZipTemplate = IconTemplates.zip,
    DipTemplate = IconTemplates.dip,
    PotatoChipTemplate = IconTemplates.potatoChip,
    MiracleWhipTemplate = IconTemplates.miracleWhip;

let app = document.querySelector('#app'),
    header = document.querySelector('header'),
    titleIcon = document.querySelector('#titleIcon'), //these id selectors test only right now
    nozipdips = document.querySelector('#no-zipdips'),
    currentCardContainer = document.querySelector('#currentCard'),
    oldCardContainer = document.querySelector('#oldCard'),
    btnMakeZipdip = document.querySelector('#makeZipdip'),
    recentlyGeneratedCounter = document.querySelector('#recentlyGeneratedCounter'),
    generatedCounter = document.querySelector('#generatedCounter'),
    iconAttributionsEl = document.querySelector('#icon-attributions');

let numGenerated = 0;

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
    if(nozipdips.className.indexOf('hidden') === -1) {
        nozipdips.className += nozipdips.className ? ' hidden' : 'hidden';
    }

    //save currentCardContainer contents
    //todo move to beginning of oldCardContainer
    oldCardContainer.insertAdjacentHTML('afterbegin', currentCardContainer.innerHTML);
    currentCardContainer.innerHTML = '';

    //generateCounts() func here to tailor the randomness of each icon category...
    // zips will be more volatile (move 5s but also more 1s)
    // dips will be more consistent but more average (more 2s, 3s, and 4s than 1s and 5s)
    // potatochips will be based on the generated zips and dips and also some cyclic outside var (days of week/month, moon cycle etc.) and be limited to 3
    // miraclewhips will have a 1/100 chance (for now) and be limited to one per card
    var zipdipCardContent = document.createElement('html');
    zipdipCardContent.innerHTML = makeZipdipCard(iconGroupCounts);
    console.info(colors[_.random(0,colors.length - 1,false)]);
    zipdipCardContent.querySelector('.zipdip-card-icons-area').style.background = colors[_.random(0,colors.length - 1,false)];
    currentCardContainer.appendChild(zipdipCardContent);
    numGenerated++;
    //show chip if not shown
    if(numGenerated === 2){
        recentlyGeneratedCounter.style.visibility = 'initial';
    }
    //update chip
    generatedCounter.innerHTML = numGenerated - 1;
}

iconAttributionsEl.insertAdjacentHTML('beforeend', iconAttributions());
