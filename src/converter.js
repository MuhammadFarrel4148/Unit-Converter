const { lengthConversion, weightConversion } = require("./database");

const lengthConverter = async(request, h) => {
    const { valueLength, convertFrom, convertTo } = request.payload;

    try {
        if(!valueLength || !convertFrom || !convertTo) {
            const response = h.response({
                status: 'fail',
                message: 'error, isi semua nilai',
            });
            response.code(400);
            return response;
        };

        if(typeof valueLength !== 'number' || typeof convertFrom !== 'string' || typeof convertTo !== 'string') {
            const response = h.response({
                status: 'fail',
                message: 'input tidak valid, masukkan data dengan benar',
            });
            response.code(400);
            return response;
        };

        if(convertFrom === convertTo) {
            const response = h.response({
                status: 'success',
                result: `${valueLength} ${convertFrom}`,
            });
            response.code(200);
            return response;
        };
        
        const convertMm = valueLength * lengthConversion[convertFrom];
        const result = convertMm / lengthConversion[convertTo];

        const response = h.response({
            status: 'success',
            result: `${result} ${convertTo}`,
        });
        response.code(200);
        return response;

    } catch(error) {
        const response = h.response({
            status: 'fail',
            message: 'Invalid length converter',
        });
        response.code(400);
        return response;
    };
};

const weightConverter = async(request, h) => {
    const { valueWeight, convertFrom, convertTo } = request.payload;

    try {
        if(!valueWeight || !convertFrom || !convertTo) {
            const response = h.response({
                status: 'fail',
                message: 'error, isi semua nilai',
            });
            response.code(400);
            return response;
        };

        if(typeof valueWeight !== 'number' || typeof convertFrom !== 'string' || typeof convertTo !== 'string') {
            const response = h.response({
                status: 'fail',
                message: 'input tidak valid, masukkan data dengan benar',
            });
            response.code(400);
            return response;
        };

        if(convertFrom === convertTo) {
            const response = h.response({
                status: 'success',
                result: `${valueWeight} ${convertFrom}`,
            });
            response.code(200);
            return response;
        };

        const convertMg = valueWeight * weightConversion[convertFrom];
        const result = convertMg / weightConversion[convertTo];

        const response = h.response({
            status: 'success',
            result: `${result} ${convertTo}`,
        });
        response.code(200);
        return response;

    } catch(error) {
        const response = h.response({
            status: 'fail',
            message: 'Invalid weight converter',
        });
        response.code(400);
        return response;
    };
};

const temperatureConverter = async(request, h) => {
    const { valueTemperature, convertFrom, convertTo } = request.payload;
    let result;

    try {
        if(!valueTemperature || !convertFrom || !convertTo) {
            const response = h.response({
                status: 'fail',
                message: 'error, isi semua nilai',
            });
            response.code(400);
            return response;
        };

        if(typeof valueTemperature !== 'number' || typeof convertFrom !== 'string' || typeof convertTo !== 'string') {
            const response = h.response({
                status: 'fail',
                message: 'input tidak valid, masukkan data dengan benar',
            });
            response.code(400);
            return response;
        };

        if(convertFrom === convertTo) {
            const response = h.response({
                status: 'success',
                result: `${valueTemperature} ${convertFrom}`,
            });
            response.code(200);
            return response;
        };

        switch(convertFrom) {
            case 'Celsius':
                result = valueTemperature;
                break;
            case 'Farenheit':
                result = (valueTemperature - 32) * (5/9);
                break;
            case 'Kelvin':
                result = valueTemperature - 273.15;
                break;
        };

        if(convertTo == 'Farenheit') {
            result = (result * (9/5)) + 32;
        } else if(convertTo == 'Kelvin') {
            result += 273.15;
        };

        const response = h.response({
            status: 'success',
            result: `${result} ${convertTo}`,
        });
        response.code(200);
        return response;

    } catch(error) {
        const response = h.response({
            status: 'fail',
            message: 'Invalid temperature converter',
        });
        response.code(400);
        return response;
    };
};

module.exports = { lengthConverter, weightConverter, temperatureConverter };
