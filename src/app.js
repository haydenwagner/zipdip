const _ = require('lodash');
import * as IconTemplates from './iconTemplates';
import iconAttributions from './iconAttributions';
import makeZipdipCard from './makeZipdipCard';

let ZipTemplate = IconTemplates.zip,
    DipTemplate = IconTemplates.dip,
    PotatoChipTemplate = IconTemplates.potatoChip,
    MiracleWhipTemplate = IconTemplates.miracleWhip;

let app = document.querySelector('#app'),
    titleIcon = document.querySelector('#titleIcon'), //these id selectors test only right now
    nozipdips = document.querySelector('#no-zipdips'),
    generated = document.querySelector('#generated'),
    btnMakeZipdip = document.querySelector('#makeZipdip'),
    iconAttributionsEl = document.querySelector('#icon-attributions');

btnMakeZipdip.addEventListener('click', makeZipdip);

let titleIconTemplate = _.random(0,1,true) > .5 ? ZipTemplate : DipTemplate;
titleIcon.insertAdjacentHTML('beforeend', titleIconTemplate);

function makeZipdip(){
    nozipdips.className += nozipdips.className ? ' hidden' : 'hidden';
    generated.insertAdjacentHTML('beforeend', makeZipdipCard(2,2,0,0));
}

iconAttributionsEl.insertAdjacentHTML('beforeend', iconAttributions());
