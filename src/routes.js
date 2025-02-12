const { lengthConverter, weightConverter, temperatureConverter } = require("./converter");

const routes = [
    {
        method: 'POST',
        path: '/length',
        handler: lengthConverter,
    },
    {
        method: 'POST',
        path: '/weight',
        handler: weightConverter,
    },
    {
        method: 'POST',
        path: '/temperature',
        handler: temperatureConverter,
    }
];

module.exports = routes
