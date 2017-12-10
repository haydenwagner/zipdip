import constants from './constants';

export default {
    'bad':{
        [constants.ICONS.ZIP]: 1,
        [constants.ICONS.DIP]: 0,
        [constants.ICONS.POTATO_CHIP]: 1,
        [constants.ICONS.MIRACLE_WHIP]: 0,
    },
    'neutral':{
        [constants.ICONS.ZIP]: 1,
        [constants.ICONS.DIP]: 2,
        [constants.ICONS.POTATO_CHIP]: 3,
        [constants.ICONS.MIRACLE_WHIP]: 0,
    },
    'good':{
        [constants.ICONS.ZIP]: 3,
        [constants.ICONS.DIP]: 1,
        [constants.ICONS.POTATO_CHIP]: 2,
        [constants.ICONS.MIRACLE_WHIP]: 0,
    }
};