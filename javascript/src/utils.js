const { cardMapper } = require("./cardMapper");

const getCardValue = (card) => {
    return cardMapper[card].value;
};

const getCardText = (card) => {
    return cardMapper[card].text;
};

exports.getCardValue = getCardValue;
exports.getCardText = getCardText;
