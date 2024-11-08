import { ETradeOnPulseSupportedGames } from "./enums";
import { BooleanValue, INumberFilter, ITradeOnPulseCommissionSettings, ITradeOnPulseDepositRequestResponse, ITradeOnPulseDepositsListResponse, ITradeOnPulseMarketCurrency, ITradeOnPulseMarketResponse, ITradeOnPulsePaymentStatusResponse, ITradeOnPulseSteamCurrency, ITradeOnPulseSubscriptions, ITradeOnPulseUserData, ITradeOnPulseUserSubscriptionStatus, ITradeOnTableResponseItem, ITradeOnPulseSupportedMarkets, ITradeOnPulseOptions, PaginationKey, PaginationKeySortDirection, SalesCountFilters, SalesCountPeriod, SubscriptionsPeriod } from "../types";
export declare class TradeOnPulseApi {
    private token;
    private axios;
    constructor(token: string);
    getTable<Game extends ETradeOnPulseSupportedGames | typeof ETradeOnPulseSupportedGames[keyof typeof ETradeOnPulseSupportedGames], Market extends keyof ITradeOnPulseSupportedMarkets[Game], MarketType extends ITradeOnPulseSupportedMarkets[Game][Market], SecondMarket extends keyof ITradeOnPulseSupportedMarkets[Game], SecondMarketType extends ITradeOnPulseSupportedMarkets[Game][SecondMarket]>(game: Game, firstMarketOptions: {
        market: Market;
        firstMarketPriceType: MarketType;
        firstMarketCountFilter?: INumberFilter;
        firstMarketPriceFilter?: INumberFilter;
    }, secondMarketOptions: {
        market: SecondMarket;
        secondMarketPriceType: SecondMarketType;
        secondMarketCountFilter?: INumberFilter;
        secondMarketPriceFilter?: INumberFilter;
    }, options?: {
        "templateId"?: null | number | string;
        "marketHashNameFilter"?: null | string;
        "profitFilter"?: INumberFilter;
        "profitPercentFilter"?: INumberFilter;
        "counterStrikeItemTypeOptions"?: ITradeOnPulseOptions<Game>;
        "dotaItemTypeOptions"?: ITradeOnPulseOptions<Game>;
        "rustItemTypeOptions"?: ITradeOnPulseOptions<Game>;
        "salesCountPeriod"?: SalesCountPeriod;
        "salesCountFilters"?: SalesCountFilters<Game>[];
        "holdFilter"?: {
            minHold: number;
            maxHold: number;
        } | null;
        "isOverstock"?: BooleanValue;
        "paginationRequest"?: {
            "orderParameters": {
                "key": PaginationKey;
                "sortOrder": PaginationKeySortDirection;
            } | null;
            "skipCount": number;
            "takeCount": number;
        };
    }): Promise<ITradeOnTableResponseItem<Game>>;
    getAvailableMarkets(game: ETradeOnPulseSupportedGames): Promise<ITradeOnPulseMarketResponse[]>;
    getMarketCurrencies(): Promise<ITradeOnPulseMarketCurrency[]>;
    getSteamCurrencies(): Promise<{
        rates: ITradeOnPulseSteamCurrency[];
    }>;
    getUserData(): Promise<ITradeOnPulseUserData>;
    getSubscriptions(): Promise<ITradeOnPulseSubscriptions>;
    getUserSubscriptionStatus(): Promise<ITradeOnPulseUserSubscriptionStatus>;
    extendUserSubscription(period: SubscriptionsPeriod, isAutoEnlargementEnabled?: boolean): Promise<any>;
    getAvailableDepositServices(): Promise<ITradeOnPulseDepositsListResponse>;
    requestDepositUrl(amount: number, paymentType: string): Promise<ITradeOnPulseDepositRequestResponse>;
    getPaymentStatus(paymentId: number): Promise<ITradeOnPulsePaymentStatusResponse>;
    getCommissionSettings(): Promise<ITradeOnPulseCommissionSettings[]>;
    resetCommissionSettings(): Promise<ITradeOnPulseCommissionSettings[]>;
    updateCommissionSettings(settings: ITradeOnPulseCommissionSettings[]): Promise<ITradeOnPulseCommissionSettings>;
    setCurrency(currency: string): Promise<any>;
}
export default TradeOnPulseApi;
