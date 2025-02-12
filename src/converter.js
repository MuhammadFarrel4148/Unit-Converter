const { lengthConversion, weightConversion } = require("./database");

const lengthConverter = async(request, h) => {
    const { valueLength, convertFromLength, convertToLength } = request.payload;
    
    try {
        if(!valueLength || !convertFromLength || !convertToLength) {
            const response = h.response({
                status: 'fail',
                message: 'error, isi semua nilai',
            });
            response.code(400);
            return response;
        };

        if(typeof valueLength !== 'number' || typeof convertFromLength !== 'string' || typeof convertToLength !== 'string') {
            const response = h.response({
                status: 'fail',
                message: 'input tidak valid, masukkan data dengan benar',
            });
            response.code(400);
            return response;
        };

        let rounding = Math.round(valueLength * 100) / 100;

        if(convertFromLength === convertToLength) {
            const response = h.response({
                status: 'success',
                result: `${rounding} ${convertFromLength}`,
            });
            response.code(200);
            return response;
        };
        
        const convertMm = rounding * lengthConversion[convertFromLength];
        let result = convertMm / lengthConversion[convertToLength];
        result = Math.round(result * 100) / 100;

        const response = h.response({
            status: 'success',
            result: `${result} ${convertToLength}`,
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
    const { valueWeight, convertFromWeight, convertToWeight } = request.payload;

    try {
        if(!valueWeight || !convertFromWeight || !convertToWeight) {
            const response = h.response({
                status: 'fail',
                message: 'error, isi semua nilai',
            });
            response.code(400);
            return response;
        };

        if(typeof valueWeight !== 'number' || typeof convertFromWeight !== 'string' || typeof convertToWeight !== 'string') {
            const response = h.response({
                status: 'fail',
                message: 'input tidak valid, masukkan data dengan benar',
            });
            response.code(400);
            return response;
        };

        let rounding = Math.round(valueWeight * 100) / 100;

        if(convertFromWeight === convertToWeight) {
            const response = h.response({
                status: 'success',
                result: `${rounding} ${convertFromWeight}`,
            });
            response.code(200);
            return response;
        };

        const convertMg = rounding * weightConversion[convertFromWeight];
        let result = convertMg / weightConversion[convertToWeight];
        result = Math.round(result * 100) / 100;

        const response = h.response({
            status: 'success',
            result: `${result} ${convertToWeight}`,
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
    const { valueTemperature, convertFromTemperature, convertToTemperature } = request.payload;
    let result;

    try {
        if(!valueTemperature || !convertFromTemperature || !convertToTemperature) {
            const response = h.response({
                status: 'fail',
                message: 'error, isi semua nilai',
            });
            response.code(400);
            return response;
        };

        if(typeof valueTemperature !== 'number' || typeof convertFromTemperature !== 'string' || typeof convertToTemperature !== 'string') {
            const response = h.response({
                status: 'fail',
                message: 'input tidak valid, masukkan data dengan benar',
            });
            response.code(400);
            return response;
        };

        let rounding = Math.round(valueTemperature * 100) / 100;

        if(convertFromTemperature === convertToTemperature) {
            const response = h.response({
                status: 'success',
                result: `${rounding} ${convertFromTemperature}`,
            });
            response.code(200);
            return response;
        };

        switch(convertFromTemperature) {
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

        if(convertToTemperature == 'Farenheit') {
            result = (result * (9/5)) + 32;
        } else if(convertTo == 'Kelvin') {
            result += 273.15;
        };

        result = Math.round(result * 100) / 100;

        const response = h.response({
            status: 'success',
            result: `${result} ${convertToTemperature}`,
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
