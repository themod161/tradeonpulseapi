# Welcome to tradeonpulseapi 👋
[![Version](https://img.shields.io/npm/v/tradeonpulseapi.svg)](https://www.npmjs.com/package/tradeonpulseapi)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](#)

> A library for interacting with the API of [the TradeOn Pulse](https://pulse.tradeon.space/app/) platform.

### 🏠 [Homepage](https://github.com/themod161/tradeonpulseapi.git)

## Usage

```typescript
import { TradeOnPulseApi, ETradeOnPulseSupportedGames } from 'tradeonpulseapi';

const TradeOnPulseApiInstance = new TradeOnPulseApi("your-token");
```

## Examples

### getTable

```typescript
import {ETradeOnPulseSupportedGames} from 'tradeonpulseapi';

const response = await TradeOnPulseApiInstance.getTable(ETradeOnPulseSupportedGames.DOTA_2, {
    market: "Steam",
    firstMarketPriceType: "Sell",
}, {
    market: "Tm",
    secondMarketPriceType: "Median90d"
});


const response = await TradeOnPulseApiInstance.getTable(ETradeOnPulseSupportedGames.DOTA_2, {
    market: "Steam",
    firstMarketPriceType: "Sell",
}, {
    market: "Tm",
    secondMarketPriceType: "Median90d"
}, {
    dotaItemTypeOptions: {
        itemRarities: ["Arcana", "Immortal"]
    },
    salesCountPeriod: "HalfMonth",
    salesCountFilters: [{
        market: "Buff",
        period: "Month",
        salesCount: 15
    }],
    paginationRequest: {
        orderParameters: {
            key: "firstMarketPrice",
            sortOrder: "Descending"
        },
        skipCount: 0,
        takeCount: 250
    }
});
```
#### Declare types
| Type | Description |
| --- | --- |
| Game | Use ETradeOnPulseSupportedGames to get game name |
| Market | Market name |
| MarketType | Check available method to get table data (ex: 90days, 30days) |

#### getTable Request Parameters Table
| Parameter Name | Type | Description |
| --- | --- | --- |
| game | Game | The game for which to retrieve market data. It should be an enum or a string representing a supported game. |
| firstMarketOptions | Object | Options for the first market. |
| firstMarketOptions.market | Market | The first market to compare. It should be a key of the `ITradeOnPulseSupportedMarkets[Game]` object. |
| firstMarketOptions.firstMarketPriceType | MarketType | The price type for the first market. It should be a value of the `ITradeOnPulseSupportedMarkets[Game][Market]` type. |
| firstMarketOptions.firstMarketCountFilter | Object (optional) | Optional count filter for the first market. |
| firstMarketOptions.firstMarketCountFilter.minValue | number | The minimum value for the count filter. |
| firstMarketOptions.firstMarketCountFilter.maxValue | number | The maximum value for the count filter. |
| firstMarketOptions.firstMarketPriceFilter | Object (optional) | Optional price filter for the first market. |
| firstMarketOptions.firstMarketPriceFilter.minValue | number | The minimum value for the price filter. |
| firstMarketOptions.firstMarketPriceFilter.maxValue | number | The maximum value for the price filter. |
| secondMarketOptions | Object | Options for the second market. |
| secondMarketOptions.market | SecondMarket | The second market to compare. It should be a key of the `ITradeOnPulseSupportedMarkets[Game]` object. |
| secondMarketOptions.secondMarketPriceType | SecondMarketType | The price type for the second market. It should be a value of the `ITradeOnPulseSupportedMarkets[Game][SecondMarket]` type. |
| secondMarketOptions.secondMarketCountFilter | Object (optional) | Optional count filter for the second market. |
| secondMarketOptions.secondMarketCountFilter.minValue | number | The minimum value for the count filter. |
| secondMarketOptions.secondMarketCountFilter.maxValue | number | The maximum value for the count filter. |
| secondMarketOptions.secondMarketPriceFilter | Object (optional) | Optional price filter for the second market. |
| secondMarketOptions.secondMarketPriceFilter.minValue | number | The minimum value for the price filter. |
| secondMarketOptions.secondMarketPriceFilter.maxValue | number | The maximum value for the price filter. |
| options | Object (optional) | Additional options for filtering and pagination. |
| options.templateId | number \| string (optional) | The template ID for filtering market data. |
| options.marketHashNameFilter | string (optional) | The market hash name filter for market data. |
| options.profitFilter | Object (optional) | Optional profit filter for market data. |
| options.profitFilter.minValue | number | The minimum value for the profit filter. |
| options.profitFilter.maxValue | number | The maximum value for the profit filter. |
| options.profitPercentFilter | Object (optional) | Optional profit percent filter for market data. |
| options.profitPercentFilter.minValue | number | The minimum value for the profit percent filter. |
| options.profitPercentFilter.maxValue | number | The maximum value for the profit percent filter. |
| options.counterStrikeItemTypeOptions | ITradeOnPulseOptions<"counter-strike"> (optional) | Options for filtering Counter-Strike 2. |
| options.counterStrikeItemTypeOptions.itemTypes | CounterStrikeItemsType[] | The item types to filter for Counter-Strike 2. |
| options.counterStrikeItemTypeOptions.itemQualities | CounterStrikeItemsQuality[] | The item qualities to filter for Counter-Strike 2. |
| options.counterStrikeItemTypeOptions.isStatTrack | BooleanValue | Indicates whether to filter for stat-tracked items in Counter-Strike 2. |
| options.counterStrikeItemTypeOptions.isSouvenir | BooleanValue | Indicates whether to filter for souvenir items in Counter-Strike 2. |
| options.counterStrikeItemTypeOptions.isOverstock | BooleanValue | Indicates whether to filter out overstocked items in Counter-Strike 2. |
| options.counterStrikeItemTypeOptions.isSticker | BooleanValue | Indicates whether to filter for sticker items in Counter-Strike 2. |
| options.counterStrikeItemTypeOptions.isGraffiti | BooleanValue | Indicates whether to filter for graffiti items in Counter-Strike 2. |
| options.dotaItemTypeOptions | ITradeOnPulseOptions<"dota"> (optional) | Options for filtering Dota 2 items. |
| options.dotaItemTypeOptions.itemTypes | DotaItemsType[] | The item types to filter for Dota 2 items. |
| options.dotaItemTypeOptions.itemQualities | DotaItemsQuality[] | The item qualities to filter for Dota 2 items. |
| options.dotaItemTypeOptions.itemRarities | DotaItemsRarity[] | The item rarities to filter for Dota 2 items. |
| options.dotaItemTypeOptions.isStatTrack | BooleanValue | Indicates whether to filter for stat-tracked items in Dota 2. |
| options.rustItemTypeOptions | ITradeOnPulseOptions<"rust"> (optional) | Options for filtering Rust items. |
| options.rustItemTypeOptions.itemTypes | RustItemsTypes[] | The item types to filter for Rust items. |
| options.rustItemTypeOptions.isStatTrack | BooleanValue | Indicates whether to filter for stat-tracked items in Rust. |
| options.rustItemTypeOptions.isSouvenir | BooleanValue | Indicates whether to filter for souvenir items in Rust. |
| options.rustItemTypeOptions.isOverstock | BooleanValue | Indicates whether to filter out overstocked items in Rust. |
| options.rustItemTypeOptions.isSticker | BooleanValue | Indicates whether to filter for sticker items in Rust. |
| options.rustItemTypeOptions.isGraffiti | BooleanValue | Indicates whether to filter for graffiti items in Rust. |
| options.salesCountPeriod | SalesCountPeriod (optional) | The sales count period for filtering market data. |
| options.salesCountFilters | SalesCountFilters<Game>[] (optional) | The sales count filters for market data. |
| options.salesCountFilters[].market | string | The market for the sales count filter. |
| options.salesCountFilters[].salesCount | number \| null | The sales count for the sales count filter. If null, the filter is not applied. |
| options.salesCountFilters[].period | SalesCountPeriod | The period for the sales count filter. |
| options.holdFilter | Object (optional) | Optional hold filter for market data. |
| options.holdFilter.minHold | number | The minimum value for the hold filter. |
| options.holdFilter.maxHold | number | The maximum value for the hold filter. |
| options.isOverstock | BooleanValue (optional) | Indicates whether to filter out overstocked items. |
| options.paginationRequest | Object (optional) | Options for pagination. |
| options.paginationRequest.orderParameters | Object (optional) | Order parameters for pagination. |
| options.paginationRequest.orderParameters.key | PaginationKey | The key for the order parameter. |
| options.paginationRequest.orderParameters.direction | PaginationDirection | The direction for the order parameter. |
| options.paginationRequest.takeCount | number (optional) | The limit for the number of items per page. |
| options.paginationRequest.skipCount | number (optional) | The offset for the pagination. |

#### getTable Response Data Table
| Property Name | Type | Description |
| --- | --- | --- |
| itemName.marketHashName | string | The market hash name of the item. |
| (dota) itemName.itemType | string | The type of the item in Dota 2. |
| (dota) itemName.itemQuality | string | The quality of the item in Dota 2. |
| (dota) itemName.itemRarity | string | The rarity of the item in Dota 2. |
| (rust) itemName.itemType | string | The type of the item in Rust. |
| (rust) itemName.itemCategory | string | The category of the item in Rust. |
| (cs2)  itemName.isStatTrak  | boolean | Indicates whether the item is StatTrak in Counter-Strike 2. |
| (cs2)  itemName.isSouvenir | boolean | Indicates whether the item is a souvenir in Counter-Strike 2. |
| (cs2)  itemName.itemTypeName | string | The type name of the item in Counter-Strike 2. |
| (cs2)  itemName.skinName | string | The skin name of the item in Counter-Strike 2. |
| imageUrl | string | The URL of the item's image. |
| firstMarket.id | number | The unique identifier of the first market. |
| firstMarket.price | number | The price of the item in the first market. |
| firstMarket.realPrice | number | The real price of the item in the first market. |
| firstMarket.overriddenPrice | number | The overridden price of the item in the first market. |
| firstMarket.realPriceCurrency | string | The currency of the real price in the first market. |
| firstMarket.bestOfferCount | number | The count of the best offers in the first market. |
| firstMarket.totalOffersCount | number | The total count of offers in the first market. |
| firstMarket.historyUpdateTime | number | The update time of the history in the first market. |
| firstMarket.offersUpdateTime | number | The update time of the offers in the first market. |
| firstMarket.overstockInfo | any | The overstock information of the item in the first market. |
| firstMarket.holdInfoResponse | any | The hold information response of the item in the first market. |
| secondMarket.id | number | The unique identifier of the second market. |
| secondMarket.price | number | The price of the item in the second market. |
| secondMarket.realPrice | number | The real price of the item in the second market. |
| secondMarket.overriddenPrice | number | The overridden price of the item in the second market. |
| secondMarket.realPriceCurrency | string | The currency of the real price in the second market. |
| secondMarket.bestOfferCount | number | The count of the best offers in the second market. |
| secondMarket.totalOffersCount | number | The total count of offers in the second market. |
| secondMarket.historyUpdateTime | number | The update time of the history in the second market. |
| secondMarket.offersUpdateTime | number | The update time of the offers in the second market. |
| secondMarket.overstockInfo | any | The overstock information of the item in the second market. |
| secondMarket.holdInfoResponse | any | The hold information response of the item in the second market. |
| profit | number | The profit or loss made on the trade. |
| profitPercent | number | The profit or loss percentage made on the trade. |
| isFavorite | boolean | Indicates whether the item is a favorite. |
| itemPopularity | Array[] | The popularity information of the item across different markets. |
| itemPopularity[].market | string | The name of the market. |
| itemPopularity[].salesCount | number | The number of sales for the item in the market. |
| itemPopularity[].marketItemUrl | string | The URL of the item in the market. |



### getAvailableMarkets
```typescript
import {ETradeOnPulseSupportedGames} from 'tradeonpulseapi';

const availableMarkets = await TradeOnPulseApiInstance.getAvailableMarkets(ETradeOnPulseSupportedGames.DOTA_2);
```

#### Request Parameters Table
| Parameter Name | Type | Description |
| --- | --- | --- |
| game | ETradeOnPulseSupportedGames | The game for which the available markets should be retrieved. |

#### Response Data Table. 
| Property Name | Type | Description |
| --- | --- | --- |
| id | number | The unique identifier of the market. |
| name | string | The name of the market. |
| logoUrl | string | The URL of the market's logo. |
| description | string | A brief description of the market. |

*returns Array*

### getMarketCurrencies
```typescript
const currencies = await TradeOnPulseApiInstance.getMarketCurrencies();
```
#### getMarketCurrencies Response Data Table
| Property Name | Type | Description |
| --- | --- | --- |
| id | number | The unique identifier of the currency. |
| currency | string | The currency. |
| shortName | string | The short name of the currency. |
| longName | string | The name of the currency. |
| asciiSymbol | string | The asciiSymbol of the currency. |
| symbol | string | The symbol of the currency. |

*returns Array*

### getSteamCurrencies
```typescript
const currencies = await TradeOnPulseApiInstance.getSteamCurrencies();
```

#### getSteamCurrencies Response Data Table
| Property Name | Type | Description |
| --- | --- | --- |
| id | number | The unique identifier of the currency. |
| name | string | The name of the currency. |
| symbol | string | The symbol of the currency. |
| rate | number | The exchange rate of the currency. |

*returns Array*

### getUserData
```typescript
const userData = await TradeOnPulseApiInstance.getUserData();
```
#### getUserData Response Data Table
| Property Name | Type | Description |
| --- | --- | --- |
| id | number | The unique identifier of the user. |
| username | string | The username of the user. |
| balance.standard | number | The standard balance of the user. |
| balance.bonus | number | The bonus balance of the user. |
| balance.total | number | The total balance of the user (standard + bonus). |
| profilePictureResponse.id | number | The unique identifier of the user's profile picture. |
| profilePictureResponse.imageUrl | string | The URL of the user's profile picture. |
| email | string | The email of the user. |
| settings.selectionTime | number | The selection time setting for the user. |
| settings.countDisplayMode | string | The count display mode setting for the user. |


### getSubscriptions

```typescript
const subscriptions = await TradeOnPulseApiInstance.getSubscriptions();
```
#### getSubscriptions Response Data Table
| Property Name | Type | Description |
| --- | --- | --- |
| price1Month | number | The price of the 1-month subscription. |
| fullPrice1Month | number | The full price of the 1-month subscription. |
| price1MonthWithoutPromo | number | The price of the 1-month subscription without promotion. |
| price1MonthDiscount | number | The discount on the 1-month subscription. |
| price3Month | number | The price of the 3-month subscription. |
| fullPrice3Month | number | The full price of the 3-month subscription. |
| price3MonthWithoutPromo | number | The price of the 3-month subscription without promotion. |
| price3MonthDiscount | number | The discount on the 3-month subscription. |
| price6Month | number | The price of the 6-month subscription. |
| fullPrice6Month | number | The full price of the 6-month subscription. |
| price6MonthWithoutPromo | number | The price of the 6-month subscription without promotion. |
| price6MonthDiscount | number | The discount on the 6-month subscription. |

### getUserSubscriptionStatus

```typescript
const subscriptionStatus = await TradeOnPulseApiInstance.getUserSubscriptionStatus();
```
#### getUserSubscriptionStatus Response Data Table

| Property Name | Type | Description |
| --- | --- | --- |
| period | SubscriptionsPeriod | The subscription period. |
| expireTime | number | The expiration time of the subscription. |
| isExpired | boolean | Indicates whether the subscription has expired. |
| isAutoEnlargementEnabled | boolean | Indicates whether the auto-enlargement feature is enabled for the subscription. |

### extendUserSubscription
```typescript
const response = await TradeOnPulseApiInstance.extendUserSubscription("Month", true);
```
#### extendUserSubscription Request Params Table
| Parameter Name | Type | Description |
| --- | --- | --- |
| period | SubscriptionsPeriod ("Monthly", "Quarterly", "Half") | The period of the subscription to extend. |
| isAutoEnlargementEnabled | boolean | Indicates whether the subscription's auto-enlargement feature should be enabled. |

#### extendUserSubscription Response Data Table
| Property Name | Type | Description |
| --- | --- | --- |

### getAvailableDepositServices
```typescript
const depositServices = await TradeOnPulseApiInstance.getAvailableDepositServices();
```
#### getAvailableDepositServices Response Data Table
| Property Name | Type | Description |
| --- | --- | --- |
| id | number | The unique identifier of the deposit service. |
| name | string | The name of the deposit service. |
| logoUrl | string | The URL of the deposit service's logo. |
| description | string | A brief description of the deposit service. |

### requestDepositUrl
```typescript
const response = await TradeOnPulseApiInstance.requestDepositUrl(100, "Steam");
```
#### requestDepositUrl Request Params Table
| Parameter Name | Type | Description |
| --- | --- | --- |
| amount | number | The amount to deposit. |
| paymentType | string | The payment type for the deposit. |

#### requestDepositUrl Response Data Table

| Property Name | Type | Description |
| --- | --- | --- |
| paymentId | number | The payment ID associated with the deposit request. |
| paymentUrl | string | The URL for the deposit. |

### getPaymentStatus
```typescript
const paymentStatus = await TradeOnPulseApiInstance.getPaymentStatus(123);
```
#### getPaymentStatus Request Params Table
| Parameter Name | Type | Description |
| --- | --- | --- |
| paymentId | number | The payment ID for which to check the status. |

#### getPaymentStatus Response Data Table
| Property Name | Type | Description |
| --- | --- | --- |
| paymentId | number | The payment ID associated with the payment. |
| amount | number | The amount of the payment. |
| status | PaymentStatus | The status of the payment. |

### getCommissionSettings
```typescript
const commissionSettings = await TradeOnPulseApiInstance.getCommissionSettings();
```
#### getCommissionSettings Response Data Table
| Property Name | Type | Description |
| --- | --- | --- |
| market | string | The market associated with the commission setting. |
| commission | number | The commission percentage for the market. |
| bonus | number | The bonus percentage for the market. |

*returns Array*

### resetCommissionSettings
```typescript
const commissionSettings = await TradeOnPulseApiInstance.resetCommissionSettings();
```
#### resetCommissionSettings Response Data Table
| Property Name | Type | Description |
| --- | --- | --- |
| market | string | The market associated with the commission setting. |
| commission | number | The commission percentage for the market. |
| bonus | number | The bonus percentage for the market. |

*returns Array*

### updateCommissionSettings
```typescript
const commissionSettings = await TradeOnPulseApiInstance.updateCommissionSettings();
```
#### updateCommissionSettings Request Params Table
| Parameter Name | Type | Description |
| --- | --- | --- |
| settings | ITradeOnPulseCommissionSettings[] | An array of commission settings to update. |
| settings[].market | string | The market associated with the commission setting. |
| settings[].commission | number | The commission percentage for the market. |
| settings[].bonus | number | The bonus percentage for the market. |


#### updateCommissionSettings Response Data Table
| Property Name | Type | Description |
| --- | --- | --- |
| market | string | The market associated with the commission setting. |
| commission | number | The commission percentage for the market. |
| bonus | number | The bonus percentage for the market. |

*returns Array*

### setCurrency
```typescript
await TradeOnPulseApiInstance.setCurrency("USD");
```
#### SetCurrency Request Parameters Table
| Parameter Name | Type | Description |
| --- | --- | --- |
| currency | string | The currency to set for the user. |

#### SetCurrency Response Data Table
| Property Name | Type | Description |
| --- | --- | --- |

## Author

👤 **themod**

* Github: [@themod161](https://github.com/themod161)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/themod161/tradeonpulseapi/issues). You can also take a look at the [contributing guide](https://github.com/themod161/tradeonpulseapi).

## Show your support

Give a ⭐️ if this project helped you!

[![Support me on Patreon](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dthemodys%26type%3Dpatrons&style=for-the-badge)](https://patreon.com/themodys)