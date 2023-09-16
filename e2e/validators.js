/* 
This is regular expression to validate correct format of address including street, house number, city and zip code.
 */
export const addressValidator = (text) => /^[ \-0-9a-zA-ZäöüÄÖÜß.]+?\s+(\d+(\s?[a-zA-Z])?)\s*(?:$|\(|[A-Z]{2})?\s*(\d{5})\s*(.*)?$/i.test(text)