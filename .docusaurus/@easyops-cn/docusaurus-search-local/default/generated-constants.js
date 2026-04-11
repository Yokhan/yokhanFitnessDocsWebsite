import lunr from "/home/user/yokhanFitnessDocsWebsite/node_modules/lunr/lunr.js";
require("/home/user/yokhanFitnessDocsWebsite/node_modules/lunr-languages/lunr.stemmer.support.js")(lunr);
require("/home/user/yokhanFitnessDocsWebsite/node_modules/lunr-languages/lunr.ru.js")(lunr);
export const removeDefaultStopWordFilter = [];
export const language = ["ru"];
export const searchIndexUrl = "search-index{dir}.json?_=7533b17f";
export const searchResultLimits = 8;
export const fuzzyMatchingDistance = 1;