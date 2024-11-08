import { ETradeOnPulseSupportedGames } from "./src/enums";

export type SupportedPriceTypesWithHistory =
    | 'Sell'
    | 'Buy'
    | 'Average1d'
    | 'Average7d'
    | 'Average30d'
    | 'Average90d'
    | 'Median1d'
    | 'Median7d'
    | 'Median30d'
    | 'Median90d'
    | 'Range30Percent7d'
    | 'Range50Percent7d'
    | 'Range70Percent7d'
    | 'Range90Percent7d'
    | 'Range30Percent30d'
    | 'Range50Percent30d'
    | 'Range70Percent30d'
    | 'Range90Percent30d';

export type SupportedPriceTypesWithoutHistory = 'SellWithHold' | 'SellWithoutHold';

export interface ITradeOnPulseMarketResponseBase {
    market: string;
    marketIcon: string;
    shortName: string;
    isSupported: boolean;
    isNew: boolean;
    haveOverstock: boolean;
}

export interface ITradeOnPulseMarketResponseWithHistory extends ITradeOnPulseMarketResponseBase {
    isSupportHistory: true;
    supportedPriceTypes: SupportedPriceTypesWithHistory[];
}

export interface ITradeOnPulseMarketResponseWithoutHistory extends ITradeOnPulseMarketResponseBase {
    isSupportHistory: false;
    supportedPriceTypes: SupportedPriceTypesWithoutHistory[];
}

export type ITradeOnPulseMarketResponse =
    | ITradeOnPulseMarketResponseWithHistory
    | ITradeOnPulseMarketResponseWithoutHistory;

export interface INumberFilter {
    minValue?: null | number;
    maxValue?: null | number;
}
export type NumberFilter = INumberFilter | undefined;

export type BooleanValue = boolean | null;


export type Unique<T extends string[]> = T extends [infer F, ...infer R extends string[]]
    ? F extends R[number]
    ? R
    : [F, ...Unique<R>]
    : T;

export interface ITradeOnTableResponseItemType {
    dota: {
        marketHashName: string,
        itemType: string,
        itemQuality: string,
        itemRarity: string
    },
    rust: {
        marketHashName: string,
        itemType: string,
        itemCategory: string
    },
    "counter-strike": {
        marketHashName: string;
        isStatTrak: boolean;
        isSouvenir: boolean;
        itemTypeName: string;
        skinName: string;
    }
}
export interface ITradeOnTableResponseItem<T extends keyof ITradeOnTableResponseItemType> {
    itemName: ITradeOnTableResponseItemType[T];
    imageUrl: string;
    firstMarket: {
        id: number;
        price: number;
        realPrice: number;
        overriddenPrice: number | null;
        realPriceCurrency: string;
        bestOfferCount: number;
        totalOffersCount: number;
        historyUpdateTime: number;
        offersUpdateTime: number;
        overstockInfo: any | null;
        holdInfoResponse: any | null;
    };
    secondMarket: {
        id: number;
        price: number;
        realPrice: number;
        overriddenPrice: number | null;
        realPriceCurrency: string;
        bestOfferCount: number;
        totalOffersCount: number;
        historyUpdateTime: number;
        offersUpdateTime: number;
        overstockInfo: any | null;
        holdInfoResponse: any | null;
    };
    profit: number;
    profitPercent: number;
    isFavorite: boolean;
    itemPopularity: Array<{
        market: string;
        salesCount: number;
        marketItemUrl: string;
    }>;
}

export interface ITradeOnPulseMarketCurrency {
    "currency": string,
    "shortName": string,
    "longName": string,
    "asciiSymbol": string,
    "symbol": string
}
export interface ITradeOnPulseSteamCurrency {
    "currency": string,
    "rate": number,
    "isOverriden": boolean
}
export interface ITradeOnPulseUserData {
    "userId": number,
    "userName": string,
    "balance": {
        "standard": number,
        "bonus": number,
        "total": number
    },
    "profilePictureResponse": {
        "id": number,
        "imageUrl": string
    },
    "email": string,
    "settings": {
        "selectionTime": number,
        "countDisplayMode": string
    }
}

export interface ITradeOnPulseSubscriptions {
    "price1Month": number,
    "fullPrice1Month": number,
    "price1MonthWithoutPromo": number,
    "price1MonthDiscount": number,
    "price3Month": number,
    "fullPrice3Month": number,
    "price3MonthWithoutPromo": number,
    "price3MonthDiscount": number,
    "price6Month": number,
    "fullPrice6Month": number,
    "price6MonthWithoutPromo": number,
    "price6MonthDiscount": number
}

export interface ITradeOnPulseUserSubscriptionStatus {
    "info": {
        "period": SubscriptionsPeriod,
        "expireTime": number,
        "isExpired": boolean,
        "isAutoEnlargementEnabled": boolean
    }
}
export interface ITradeOnPulseDepositsListItem {
    paymentType: string;
    name: string;
    imageUrl: string;
    minAmount: number;
    maxAmount: number;
    commission: number;
}
export interface ITradeOnPulseDepositsListResponse {
    crypto: ITradeOnPulseDepositsListItem[];
    fiat: ITradeOnPulseDepositsListItem[];
    additional: ITradeOnPulseDepositsListItem[];
}

export interface ITradeOnPulseDepositRequestResponse {
    "paymentId": number,
    "paymentUrl": string
}

export interface ITradeOnPulsePaymentStatusResponse {
    amount: number,
    status: string
}

export interface ITradeOnPulseCommissionSettings {
    "market": string,
    "commission": number,
    "bonus": number
}

export type TradeOnPulseSupportedGames = typeof ETradeOnPulseSupportedGames[keyof typeof ETradeOnPulseSupportedGames];

export interface ITradeOnPulseSupportedMarkets {
    dota: {
        Steam: 'Buy' | 'Sell' | 'Guaranteed' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        Tm: 'Buy' | 'Sell' | 'Guaranteed' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        Buff: '',
        Waxpeer: '',
        Dmarket: 'Buy' | 'SellWithHold' | 'SellWithoutHold' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        CsMoneyTrade: '',
        CsMoneyMarket: '',
        Bitskins: 'Sell' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        LootFarm: 'SellWithHold' | 'SellWithoutHold' | 'Buy',
        TradeItStore: '',
        TradeItTrade: '',
        GgSwap: '',
        CsFloat: '',
        LisSkins: 'SellWithoutHold' | 'SellWithHold',
        Skinport: 'SellWithoutHold' | 'SellWithHold' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        ShadowPay: '',
        SkinSwapMarket: '',
        SkinSwapTrade: '',
        CsTradeTrade: 'SellWithoutHold' | 'SellWithHold',
        CsTradeMarket: 'Sell',
        CsDeals: 'SellWithHold' | 'SellWithoutHold' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        C5GameMarket: 'Sell' | 'Buy' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        AvanMarket: 'SellWithHold' | 'SellWithoutHold'
    },
    rust: {
        Steam: 'Buy' | 'Sell' | 'Guaranteed' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        Tm: 'Buy' | 'Sell' | 'Guaranteed' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        Buff: '',
        Waxpeer: '',
        Dmarket: 'Buy' | 'SellWithHold' | 'SellWithoutHold' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        CsMoneyTrade: '',
        CsMoneyMarket: '',
        Bitskins: '',
        LootFarm: 'SellWithoutHold' | 'Buy',
        TradeItStore: 'Sell',
        TradeItTrade: 'Sell',
        GgSwap: 'SellWithoutHold',
        CsFloat: '',
        LisSkins: 'SellWithoutHold',
        Skinport: 'SellWithoutHold' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        ShadowPay: '',
        SkinSwapMarket: 'SellWithoutHold' | 'Buy',
        SkinSwapTrade: 'SellWithoutHold',
        CsTradeTrade: 'SellWithoutHold',
        CsTradeMarket: 'Sell',
        CsDeals: 'SellWithoutHold' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        C5GameMarket: 'Sell' | 'Buy' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        AvanMarket: 'SellWithHold' | 'SellWithoutHold'
    },
    'counter-strike': {
        Steam: 'Buy' | 'Sell' | 'Guaranteed' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        Tm: 'Buy' | 'Sell' | 'Guaranteed' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        Buff: 'Buy' | 'Sell' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        Waxpeer: 'Buy' | 'Sell' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        Dmarket: 'Buy' | 'SellWithHold' | 'SellWithoutHold' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        CsMoneyTrade: 'Sell' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        CsMoneyMarket: 'Sell',
        Bitskins: 'Sell' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        LootFarm: 'SellWithHold' | 'SellWithoutHold' | 'Buy' | 'Auction',
        TradeItStore: 'Sell',
        TradeItTrade: 'Sell',
        GgSwap: 'SellWithHold' | 'SellWithoutHold' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        CsFloat: 'Sell' | 'Buy' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        LisSkins: 'SellWithoutHold' | 'SellWithHold',
        Skinport: 'SellWithoutHold' | 'SellWithHold' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        ShadowPay: 'Sell' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        SkinSwapMarket: 'SellWithHold' | 'SellWithoutHold' | 'Buy',
        SkinSwapTrade: 'SellWithHold' | 'SellWithoutHold',
        CsTradeTrade: 'SellWithoutHold' | 'SellWithHold' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        CsTradeMarket: 'Sell' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        CsDeals: 'SellWithHold' | 'SellWithoutHold' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        C5GameMarket: 'Sell' | 'Buy' | 'Average1d' | 'Average7d' | 'Average30d' | 'Average90d' | 'Median1d' | 'Median7d' | 'Median30d' | 'Median90d' | 'Range30Percent7d' | 'Range50Percent7d' | 'Range70Percent7d' | 'Range90Percent7d' | 'Range30Percent30d' | 'Range50Percent30d' | 'Range70Percent30d' | 'Range90Percent30d',
        AvanMarket: 'SellWithHold' | 'SellWithoutHold'
    }
}

export interface ITradeOnPulseOptions<T extends keyof ItemsOptions> {
    "itemTypes"?: null | ItemsOptions[T]["type"],
    "itemQualities"?: null | ItemsOptions[T]["quality"],
    "itemRarities"?: null | ItemsOptions[T]["rarity"],
    "isStatTrack"?: BooleanValue,
    "isSouvenir"?: BooleanValue,
    "isOverstock"?: BooleanValue,
    "isSticker"?: BooleanValue,
    "isGraffiti"?: BooleanValue,
    "holdOptions"?: {
        minHold: number,
        maxHold: number
    },
    "indicationOptions"?: {
        "isEnabled": false,
        "colorIndicators": []
    }
}

export interface ItemsOptions {
    "counter-strike": {
        type: CounterStrikeItemsType[],
        quality: CounterStrikeItemsQuality[],
        rarity: null,
    },
    dota: {
        type: DotaItemsType[],
        quality: DotaItemsQuality[],
        rarity: DotaItemsRarity[],
    },
    rust: {
        type: RustItemsTypes[],
        quality: null,
        rarity: null,
    }
}
export type CounterStrikeItemsQuality = 
    "FactoryNew" |
    "MinimalWear" |
    "FieldTested" |
    "WellWorn" |
    "BattleScarred" |
    "Unknown"
export type CounterStrikeItemsType = "Other" |
        "Shotgun"|
        "Smg"|
        "Pistol"|
        "Knife"|
        "SniperRiffle"|
        "MachineGun"|
        "Riffle"|
        "Equipment"|
        "Key"|
        "Gloves"|
        "Sticker"|
        "Patch"|
        "Pass"|
        "Graffiti"|
        "MusicKit"|
        "Agent"|
        "Pin"|
        "PatchPack"|
        "GraffitiBox"|
        "MusicKitBox"|
        "Capsule"|
        "Package"|
        "Case";

export type DotaItemsType =
                "Ancient" |
                "Announcer" |
                "Bundle" |
                "Courier" |
                "CursorPack" |
                "DireTowers" |
                "Emblem" |
                "EmoticonTool" |
                "Gem" |
                "HUDSkin" |
                "League" |
                "LoadingScreen" |
                "Misc" |
                "Music" |
                "Pennant" |
                "PlayerCard" |
                "RadiantTowers" |
                "RetiredChest" |
                "Sticker" |
                "StickerCapsule" |
                "Taunt" |
                "Terrain" |
                "Tool" |
                "Treasure" |
                "TreasureKey" |
                "Ward" |
                "Wearable"

export type DotaItemsQuality =
                "Standard" |
                "Inscribed" |
                "Auspicious" |
                "Autographed" |
                "Genuine" |
                "Heroic" |
                "Frozen" |
                "Cursed" |
                "Base" |
                "Corrupted" |
                "Infused" |
                "Unusual" |
                "Exalted" |
                "Glitter" |
                "Elder" |
                "Gold" |
                "Holo" |
                "Legacy" |
                "Favored" |
                "Ascendant" |
                "Unknown"

export type DotaItemsRarity =
                "Common" |
                "Mythical" |
                "Rare" |
                "Uncommon" |
                "Immortal" |
                "Legendary" |
                "Arcana" |
                "Seasonal" |
                "Ancient"

export type RustItemsTypes =
    "AK47u" |
    "ArmoredMetalDoor" |
    "Balaclava" |
    "Bandana" |
    "Beenie" |
    "BoltRifle" |
    "BoneClub" |
    "BoneKnife" |
    "Boonie" |
    "Boots" |
    "HideBoots" |
    "BucketHelmet" |
    "BurlapGloves" |
    "BurlapHeadwrap" |
    "BurlapShirt" |
    "BurlapShoes" |
    "BurlapTrousers" |
    "Cap" |
    "CoffeecanHelmet" |
    "CollaredShirt" |
    "ConcreteBarricade" |
    "Crossbow" |
    "DeerSkullMask" |
    "DoubleBarrelShotgun" |
    "Grenade" |
    "Guitar" |
    "Hammer" |
    "Hatchet" |
    "HideHalterneck" |
    "HidePants" |
    "HidePoncho" |
    "HideSkirt" |
    "Hoodie" |
    "Jacket" |
    "LargeWoodenBox" |
    "LongTShirt" |
    "Longsword" |
    "MetalFacemask" |
    "MetalTorsoPlate" |
    "MinersHat" |
    "Mp5" |
    "Pants" |
    "PumpShotgun" |
    "ReactiveSign" |
    "Revolver" |
    "RifleHelmet" |
    "RoadsignJacket" |
    "RoadsignKilt" |
    "Rock" |
    "RocketLauncher" |
    "SalvagedIcepick" |
    "SalvagedSword" |
    "SandbagBarricade" |
    "SatchelExplosives" |
    "SemiAutoPistol" |
    "SemiAutoRifle" |
    "SheetMetalDoor" |
    "Shorts" |
    "SleepingBag" |
    "SMG" |
    "SnowJacket" |
    "StoneHatchet" |
    "StonePickaxe" |
    "TankTop" |
    "Thompson" |
    "TShirt" |
    "WaterpipeShotgun" |
    "WoodenBox" |
    "WoodenDoor"

export type PaginationKey = "secondMarketPrice" | "profitPercent" | "firstMarketPrice" | "marketHashName"
export type PaginationKeySortDirection = "Descending" | "Ascending"

export type SalesCountPeriod = "Month" | "Day" | "Week" | "HalfMonth";

export interface SalesCountFilters<T extends keyof ITradeOnPulseSupportedMarkets> {
    "market": keyof ITradeOnPulseSupportedMarkets[T],
    "salesCount": null | number,
    "period": SalesCountPeriod
}

export type SubscriptionsPeriod = "Monthly" | "Quarterly" | "Half";