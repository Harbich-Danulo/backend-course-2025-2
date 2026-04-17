const currency = "JPY";
const exact_date = "20240127";

const nbuUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange");

nbuUrl.searchParams.append("valcode", currency);
nbuUrl.searchParams.append("date", exact_date);
nbuUrl.searchParams.append("json", ""); 

console.log(nbuUrl.toString());