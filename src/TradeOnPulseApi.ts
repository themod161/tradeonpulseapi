import axios, {AxiosInstance} from "axios";
import { ETradeOnPulseSupportedGames } from "./enums";
import { BooleanValue, INumberFilter, ITradeOnPulseCommissionSettings, ITradeOnPulseDepositRequestResponse, ITradeOnPulseDepositsListResponse, ITradeOnPulseMarketCurrency, ITradeOnPulseMarketResponse, ITradeOnPulseMarketResponseWithHistory, ITradeOnPulseMarketResponseWithoutHistory, ITradeOnPulsePaymentStatusResponse, ITradeOnPulseSteamCurrency, ITradeOnPulseSubscriptions, ITradeOnPulseUserData, ITradeOnPulseUserSubscriptionStatus, ITradeOnTableResponseItem, ITradeOnPulseSupportedMarkets, ITradeOnPulseOptions, PaginationKey, PaginationKeySortDirection, SalesCountFilters, SalesCountPeriod, SubscriptionsPeriod } from "../types";
import { defaultConfig } from "./markets";

export class TradeOnPulseApi {
    private token: string;
    private axios: AxiosInstance;

    constructor(token: string) {
        this.token = token.replace(/Bearer /, '');
        this.axios = axios.create({
            baseURL: 'https://api-pulse.tradeon.space/api/',
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json',
            },
        });
    }

    async getTable<
        Game extends ETradeOnPulseSupportedGames | typeof ETradeOnPulseSupportedGames[keyof typeof ETradeOnPulseSupportedGames],
        Market extends keyof ITradeOnPulseSupportedMarkets[Game],
        MarketType extends ITradeOnPulseSupportedMarkets[Game][Market],
        SecondMarket extends keyof ITradeOnPulseSupportedMarkets[Game],
        SecondMarketType extends ITradeOnPulseSupportedMarkets[Game][SecondMarket]
    >(
        game: Game,
        firstMarketOptions: {
            market: Market;
            firstMarketPriceType: MarketType;
            firstMarketCountFilter?: INumberFilter,
            firstMarketPriceFilter?: INumberFilter
        },
        secondMarketOptions: {
            market: SecondMarket;
            secondMarketPriceType: SecondMarketType;
            secondMarketCountFilter?: INumberFilter,
            secondMarketPriceFilter?: INumberFilter
        },
        options?: {
            "templateId"?: null | number | string,
            "marketHashNameFilter"?: null | string,
            "profitFilter"?: INumberFilter,
            "profitPercentFilter"?: INumberFilter,
            "counterStrikeItemTypeOptions"?: ITradeOnPulseOptions<Game>,
            "dotaItemTypeOptions"?: ITradeOnPulseOptions<Game>,
            "rustItemTypeOptions"?: ITradeOnPulseOptions<Game>,
            "salesCountPeriod"?: SalesCountPeriod,
            "salesCountFilters"?: SalesCountFilters<Game>[],
            "holdFilter"?: {
                minHold: number, 
                maxHold: number
            } | null,
            "isOverstock"?: BooleanValue,
            "paginationRequest"?: {
                "orderParameters": {
                    "key": PaginationKey,
                    "sortOrder": PaginationKeySortDirection
                } | null,
                "skipCount": number,
                "takeCount": number
            }
        }
    ) {
        if(!firstMarketOptions.firstMarketPriceType || !secondMarketOptions.secondMarketPriceType) {
            throw new Error("This marketplace does not support for this game");
        }
        if(!firstMarketOptions.market || !secondMarketOptions.market) {
            throw new Error("Market is not provided");
        }

        const defConfig = JSON.parse(JSON.stringify(defaultConfig));
        const config = {
            ...defConfig,
            firstMarketOptions,
            secondMarketOptions,
            ...options
        }
        
        const response = await this.axios.post<ITradeOnTableResponseItem<Game>>(
            `table/${game}/${new String(firstMarketOptions.market)}/${new String(secondMarketOptions.market)}/all`,
            config
        );
        return response.data;
    }

    async getAvailableMarkets(game: ETradeOnPulseSupportedGames) {
        const response = await this.axios.get<ITradeOnPulseMarketResponse[]>(`/table/supported-features/${game}/market-info`);
        return response.data;
    }

    async getMarketCurrencies() {
        const response = await this.axios.get<ITradeOnPulseMarketCurrency[]>('/table/supported-features/market-currency');
        return response.data;
    }
    async getSteamCurrencies() {
        const response = await this.axios.get<{
            rates: ITradeOnPulseSteamCurrency[]
        }>('/user/currency/Steam');

        return response.data;
    }

    async getUserData() {
        const response = await this.axios.get<ITradeOnPulseUserData>('/user/data');
        return response.data;
    }

    async getSubscriptions() {
        const response = await this.axios.get<ITradeOnPulseSubscriptions>('/user/subscription/price-info');
        return response.data;
    }
    async getUserSubscriptionStatus() {
        const response = await this.axios.get<ITradeOnPulseUserSubscriptionStatus>('/user/subscription/status');
        response.data.info.isExpired = Date.now() > response.data.info.expireTime;
        return response.data;
    }

    async extendUserSubscription(period: SubscriptionsPeriod, isAutoEnlargementEnabled = false) {
        const response = await this.axios.post(`/user/subscription/extend`, {
            period,
            isAutoEnlargementEnabled
        });
        return response.data;
    }
    async getAvailableDepositServices() {
        const response = await this.axios.get<ITradeOnPulseDepositsListResponse>('/payment/list');
        return response.data;
    }
    async requestDepositUrl(amount: number, paymentType: string) {
        const response = await this.axios.post<ITradeOnPulseDepositRequestResponse>('/payment/create', {
            amount,
            paymentType
        });

        return response.data;
    }

    async getPaymentStatus(paymentId: number) {
        const response = await this.axios.post<ITradeOnPulsePaymentStatusResponse>(`/payment/status`, {
            paymentId
        });
        return response.data;
    }

    async getCommissionSettings() {
        const response = await this.axios.get<ITradeOnPulseCommissionSettings[]>('/commission-settings');
        return response.data;
    }
    async resetCommissionSettings() {
        const response = await this.axios.get<ITradeOnPulseCommissionSettings[]>('/commission-settings');
        return response.data;
    }
    async updateCommissionSettings(settings: ITradeOnPulseCommissionSettings[]) {
        const response = await this.axios.put<ITradeOnPulseCommissionSettings>('/commission-settings', {
            chargeSettings: {
                marketSettings: settings
            }
        });
        return response.data;
    }
    async setCurrency(currency: string) {
        const response = await this.axios.post(`table/user/info/currency/set`, {
            currency
        });

        return response.data;
    }
}
export default TradeOnPulseApi;