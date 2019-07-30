import { ListObject } from './Models/ListObject';

export class Constants {
    public static currencyList: ListObject[] = [{
        id: "CAD",
        displayName: "Canadian Dollar"
    },
    {
        id: "HKD",
        displayName: "Hong Kong Dollar"
    },
    {
        id: "ISK",
        displayName: "Icelandic Króna"
    },
    {
        id: "PHP",
        displayName: "Philippine Peso"
    },
    {
        id: "DKK",
        displayName: "Danish Krone"
    },
    {
        id: "HUF",
        displayName: "Hungarian Forint"
    },
    {
        id: "CZK",
        displayName: "Czech Koruna"
    },
    {
        id: "AUD",
        displayName: "Australian Dollar"
    },
    {
        id: "RON",
        displayName: "Romanian Leu"
    },
    {
        id: "SEK",
        displayName: "Swedish Krona"
    },
    {
        id: "IDR",
        displayName: "Indonesian Rupiah"
    },
    {
        id: "INR",
        displayName: "Indian Rupee"
    },
    {
        id: "BRL",
        displayName: "Brazilian Real"
    },
    {
        id: "RUB",
        displayName: "Russian Ruble"
    },
    {
        id: "HRK",
        displayName: "Croatian Kuna"
    },
    {
        id: "JPY",
        displayName: "Japanese Yen"
    },
    {
        id: "THB",
        displayName: "Thai Baht"
    },
    {
        id: "CHF",
        displayName: "Swiss Franc"
    },
    {
        id: "SGD",
        displayName: "Singapore Dollar"
    },
    {
        id: "PLN",
        displayName: "Polish Złoty"
    },
    {
        id: "BGN",
        displayName: "Bulgarian Lev"
    },
    {
        id: "TRY",
        displayName: "Turkish Lira"
    },
    {
        id: "CNY",
        displayName: "Renminbi"
    },
    {
        id: "NOK",
        displayName: "Norwegian Krone"
    },
    {
        id: "NZD",
        displayName: "New Zealand Dollar"
    },
    {
        id: "ZAR",
        displayName: "South African Rand"
    },
    {
        id: "USD",
        displayName: "United States Dollar"
    },
    {
        id: "MXN",
        displayName: "Mexican Peso"
    },
    {
        id: "ILS",
        displayName: "Israeli New Shekel"
    },
    {
        id: "GBP",
        displayName: "Pound Sterling"
    },
    {
        id: "KRW",
        displayName: "South Korean Won"
    },
    {
        id: "MYR",
        displayName: "Malaysian Ringgit"
    }];

    public static currencyListMap: Map<string,string> =  new Map([
        ["CAD", "Canadian Dollar"],
        ["HKD","Hong Kong Dollar"],
        ["ISK","Icelandic Króna"],
        ["PHP","Philippine Peso"],
        ["DKK","Danish Krone"],
        ["HUF","Hungarian Forint"],
        ["CZK","Czech Koruna"],
        ["AUD","Australian Dollar"],
        ["RON","Romanian Leu"],
        ["SEK","Swedish Krona"],
        ["IDR","Indonesian Rupiah"],
        ["INR","Indian Rupee"],
        ["BRL","Brazilian Real"],
        ["RUB","Russian Ruble"],
        ["HRK","Croatian Kuna"],
        ["JPY","Japanese Yen"],
        ["THB","Thai Baht"],
        ["CHF","Swiss Franc"],
        ["SGD","Singapore Dollar"],
        ["PLN","Polish Złoty"],
        ["BGN","Bulgarian Lev"],
        ["TRY","Turkish Lira"],
        ["CNY","Renminbi"],
        ["NOK","Norwegian Krone"],
        ["NZD","New Zealand Dollar"],
        ["ZAR","South African Rand"],
        ["USD","United States Dollar"],
        ["MXN","Mexican Peso"],
        ["ILS","Israeli New Shekel"],
        ["GBP","Pound Sterling"],
        ["KRW","South Korean Won"],
        ["MYR","Malaysian Ringgit"]]);
}