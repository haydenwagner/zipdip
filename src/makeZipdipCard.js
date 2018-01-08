//const Handlebars = require('handlebars');
import * as iconTemplates from './iconTemplates';
import zipdipCardTpl from './zipdipCard.hbs';
import constants from './constants';


// Handlebars.registerHelper("ifGreaterThanOne", function(count){
//     return count > 1;
// });

/**
 * @function zipdip#makeZipdipCard
 * Takes group counts for the different icons and generates an object
 * to pass to a handlebars card template to generate an html zipdip card.
 * @param {Object[]} iconGroupCounts Randomly generate iconGroupCounts for each icon category
 * @param {String} iconGroupCounts[].constKey Key in the const file for this group
 * @param {Number} iconGroupCounts[].count Number of icons for this group
 * @returns template of the generated card
 */
export default function makeZipdipCard(iconGroupCounts){
    let templateConfig = {
        iconGroups: []
    };

    _.each(iconGroupCounts, function generateIconGroupOptions(iconGroup){
        let constKey = iconGroup.constKey,
            count = iconGroup.count;

        console.log(constants.ICONS.TEMPLATE_NAMES[constKey]);
        console.log(iconTemplates[constants.ICONS.TEMPLATE_NAMES[constKey]]);

        templateConfig.iconGroups.push({
            label: constants.ICONS.SCREEN_LABELS[constKey],
            count: count,
            iconTemplates: iconTemplates[constants.ICONS.TEMPLATE_NAMES[constKey]].repeat(count),
            greaterThanOne: count > 1 //messy but need boolean saved on obj for Handlebars until I can figure out how to add a helperFunction properly
        })
    });

    return zipdipCardTpl(templateConfig);
};