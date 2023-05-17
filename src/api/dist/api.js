"use strict";
exports.__esModule = true;
exports.instance = void 0;
var axios_1 = require("axios");
exports.instance = axios_1["default"].create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {
        'API-KEY': '8686a600-1432-4fe7-a787-e5f10049effb'
    }
});
