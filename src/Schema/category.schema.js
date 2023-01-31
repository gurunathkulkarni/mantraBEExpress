exports.createCategorySchema = {
    categoryName: {
        notEmpty: true,
        errorMessage: "please pass category name",
    },
    categoryTitle: {
        notEmpty: true,
        errorMessage: "please pass category title",
    },
    lang_id: {
        notEmpty: true,
        errorMessage: "please pass langauge id for which you want to add the category", 
    },
    day: {
        notEmpty: true,
        errorMessage: "please pass langauge id for which you want to add the category", 
    },
    imageUrl: {
        notEmpty: false
    }
}