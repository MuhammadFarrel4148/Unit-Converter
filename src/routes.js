const { lengthConverter, weightConverter } = require("./converter");

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
        handler: () => {}
    }
];

module.exports = routes
