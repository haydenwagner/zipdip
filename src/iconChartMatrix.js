import constants from './constants';

export default {
    LEVELS: {
        BAD: {
            [constants.ICONS.ZIP]: 1,
            [constants.ICONS.DIP]: 0,
            [constants.ICONS.POTATO_CHIP]: 1,
            [constants.ICONS.MIRACLE_WHIP]: 0,
        },
        NEUTRAL: {
            [constants.ICONS.ZIP]: 1,
            [constants.ICONS.DIP]: 2,
            [constants.ICONS.POTATO_CHIP]: 3,
            [constants.ICONS.MIRACLE_WHIP]: 0,
        },
        GOOD: {
            [constants.ICONS.ZIP]: 3,
            [constants.ICONS.DIP]: 1,
            [constants.ICONS.POTATO_CHIP]: 2,
            [constants.ICONS.MIRACLE_WHIP]: 0,
        },
        GREAT: {
            [constants.ICONS.ZIP]: 2,
            [constants.ICONS.DIP]: 2,
            [constants.ICONS.POTATO_CHIP]: 3,
            [constants.ICONS.MIRACLE_WHIP]: 1,
        },
        GOOD: {
            [constants.ICONS.ZIP]: 2,
            [constants.ICONS.DIP]: 1,
            [constants.ICONS.POTATO_CHIP]: 2,
            [constants.ICONS.MIRACLE_WHIP]: 3,
        }
    },
    TEMPLATE_MAP:{
        [constants.ICONS.ZIP]: 'zip',
        [constants.ICONS.DIP]: 'dip',
        [constants.ICONS.POTATO_CHIP]: 'potatoChip',
        [constants.ICONS.MIRACLE_WHIP]: 'miracleWhip'
    }

};