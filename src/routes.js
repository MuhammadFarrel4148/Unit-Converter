const { lengthConverter } = require("./converter");

const routes = [
    {
        method: 'POST',
        path: '/length',
        handler: lengthConverter,
    },
    {
        method: 'POST',
        path: '/weight',
        handler: () => {}
    },
    {
        method: 'POST',
        path: '/temperature',
        handler: () => {}
    }
];

module.exports = routes
