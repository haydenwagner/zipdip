import * as templates from './iconTemplates';
import iconAttributions from './icon-templates/iconAttributions.hbs';

export default function(){
    return iconAttributions({
        zipIcon: templates.zip,
        dipIcon: templates.dip,
        potatoChipIcon: templates.potatoChip,
        miracleWhipIcon: templates.miracleWhip,
    });
};