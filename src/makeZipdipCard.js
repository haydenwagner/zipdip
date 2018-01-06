import * as iconTemplates from './iconTemplates';
import zipdipCardTpl from './zipdipCard.hbs';

export default function makeZipdipCard(z, d, p, w){
    var rowOptions = {
        zipIcons: iconTemplates.zip.repeat(z),
        dipIcons: iconTemplates.dip.repeat(d),
        potatoChipIcons: iconTemplates.potatoChip.repeat(p),
        miracleWhipIcons: iconTemplates.miracleWhip.repeat(w)
    };
    return zipdipCardTpl(rowOptions);
};