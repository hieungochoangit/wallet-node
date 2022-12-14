const joi = require("joi");
const requestType = require("../common/requestType");
const { onlyNumber } = require("../common/regex");

const createCategorySchema = joi.object().keys({
    [requestType.body]: {
        categoryName: joi.string().max(20).required(),
        categorySlug: joi.string().max(50).required(),
        categoryDesc: joi.string().max(100),
        categoryType: joi.string().max(1).required(),
    },
});

const updateCategorySchema = joi.object().keys({
    [requestType.body]: {
        categoryName: joi.string().max(20).required(),
        categorySlug: joi.string().max(50).required(),
        categoryDesc: joi.string().max(100),
        categoryId: joi.string().max(2).required(),
    },
});

const getDetailCategorySchema = joi.object().keys({
    [requestType.params]: {
        id: joi.string().pattern(onlyNumber).required(),
    },
});

module.exports = {
    createCategorySchema,
    updateCategorySchema,
    getDetailCategorySchema,
};
