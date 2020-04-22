"use strict";
exports.__esModule = true;
exports.getAlgoliaObject = function (entry) {
    return {
        objectID: entry.sys.id,
        name_en: entry.fields.name.en,
        name_de: entry.fields.name.de,
        imageUrl: entry.fields.image && entry.fields.image.en.fields.file.en.url
    };
};
