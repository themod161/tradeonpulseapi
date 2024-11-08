"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeOnPulseApi = void 0;
const axios_1 = __importDefault(require("axios"));
const markets_1 = require("./markets");
class TradeOnPulseApi {
    constructor(token) {
        this.token = token.replace(/Bearer /, '');
        this.axios = axios_1.default.create({
            baseURL: 'https://api-pulse.tradeon.space/api/',
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json',
            },
        });
    }
    getTable(game, firstMarketOptions, secondMarketOptions, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!firstMarketOptions.firstMarketPriceType || !secondMarketOptions.secondMarketPriceType) {
                throw new Error("This marketplace does not support for this game");
            }
            if (!firstMarketOptions.market || !secondMarketOptions.market) {
                throw new Error("Market is not provided");
            }
            const defConfig = JSON.parse(JSON.stringify(markets_1.defaultConfig));
            const config = Object.assign(Object.assign(Object.assign({}, defConfig), { firstMarketOptions,
                secondMarketOptions }), options);
            const response = yield this.axios.post(`table/${game}/${new String(firstMarketOptions.market)}/${new String(secondMarketOptions.market)}/all`, config);
            return response.data;
        });
    }
    getAvailableMarkets(game) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axios.get(`/table/supported-features/${game}/market-info`);
            return response.data;
        });
    }
    getMarketCurrencies() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axios.get('/table/supported-features/market-currency');
            return response.data;
        });
    }
    getSteamCurrencies() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axios.get('/user/currency/Steam');
            return response.data;
        });
    }
    getUserData() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axios.get('/user/data');
            return response.data;
        });
    }
    getSubscriptions() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axios.get('/user/subscription/price-info');
            return response.data;
        });
    }
    getUserSubscriptionStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axios.get('/user/subscription/status');
            response.data.info.isExpired = Date.now() > response.data.info.expireTime;
            return response.data;
        });
    }
    extendUserSubscription(period_1) {
        return __awaiter(this, arguments, void 0, function* (period, isAutoEnlargementEnabled = false) {
            const response = yield this.axios.post(`/user/subscription/extend`, {
                period,
                isAutoEnlargementEnabled
            });
            return response.data;
        });
    }
    getAvailableDepositServices() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axios.get('/payment/list');
            return response.data;
        });
    }
    requestDepositUrl(amount, paymentType) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axios.post('/payment/create', {
                amount,
                paymentType
            });
            return response.data;
        });
    }
    getPaymentStatus(paymentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axios.post(`/payment/status`, {
                paymentId
            });
            return response.data;
        });
    }
    getCommissionSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axios.get('/commission-settings');
            return response.data;
        });
    }
    resetCommissionSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axios.get('/commission-settings');
            return response.data;
        });
    }
    updateCommissionSettings(settings) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axios.put('/commission-settings', {
                chargeSettings: {
                    marketSettings: settings
                }
            });
            return response.data;
        });
    }
    setCurrency(currency) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axios.post(`table/user/info/currency/set`, {
                currency
            });
            return response.data;
        });
    }
}
exports.TradeOnPulseApi = TradeOnPulseApi;
exports.default = TradeOnPulseApi;
