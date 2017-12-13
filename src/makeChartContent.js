var _ = require('lodash');
import iconChartMatrix from './iconChartMatrix';
import makeIconRow from './iconRow';
import constants from './constants';

var content = '';
export default function makeChartContent(){
    _.each(iconChartMatrix.LEVELS, function makeRow(level,key){
        content += makeIconRow(key,
            level[constants.ICONS.ZIP],
            level[constants.ICONS.DIP],
            level[constants.ICONS.POTATO_CHIP],
            level[constants.ICONS.MIRACLE_WHIP]);
    });

    return content;
};
