"use strict";
exports.__esModule = true;
var algoliasearch_1 = require("algoliasearch");
exports.updateAlgoliaIndex = function (entries, _a) {
    var applicationId = _a.applicationId, apiKey = _a.apiKey, indexName = _a.indexName;
    var clientAlgolia = algoliasearch_1["default"](applicationId, apiKey);
    var index = clientAlgolia.initIndex(indexName);
    index
        .partialUpdateObjects(entries, { createIfNotExists: true })
        .then(function (_a) {
        var objectIDs = _a.objectIDs;
        console.log({ objectIDs: objectIDs });
    })["catch"](console.error);
};
