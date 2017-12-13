import * as iconTemplates from './iconTemplates';
import iconRowTpl from './iconRow.hbs';

export default function makeIconRow(level, z, d, p, w){
    var rowOptions = {
        rowLabelClass: 'label',
        rowLevel: level,
        zipIcons: iconTemplates.zip.repeat(z),
        dipIcons: iconTemplates.dip.repeat(d),
        potatoChipIcons: iconTemplates.potatoChip.repeat(p),
        miracleWhipIcons: iconTemplates.miracleWhip.repeat(w)
    };
    return iconRowTpl(rowOptions);
};