//const Handlebars = require('handlebars');
import * as iconTemplates from './iconTemplates';
import zipdipCardTpl from './zipdipCard.hbs';


// Handlebars.registerHelper("ifGreaterThanOne", function(count){
//     return count > 1;
// });

export default function makeZipdipCard(z, d, p, w){

    var rowOptions = {
        zipCount: z,
        zipGreaterThanOne: z > 1,
        zipIcons: iconTemplates.zip.repeat(z),
        dipCount: d,
        dipIcons: iconTemplates.dip.repeat(d),
        potatoChipCount: p,
        potatoChipIcons: iconTemplates.potatoChip.repeat(p),
        miracleWhipCount: w,
        miracleWhipIcons: iconTemplates.miracleWhip.repeat(w)
    };
    return zipdipCardTpl(rowOptions);
};