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

module.exports = { lengthConverter, weightConverter };
