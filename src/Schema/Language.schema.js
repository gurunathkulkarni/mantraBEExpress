exports.postLanguageSchema = {
  langCode: {
    notEmpty: true,
    errorMessage: "langaugeCode cannot be empty",
  },
  displayLang: {
    notEmpty: true,
    errorMessage: "displayLangauge cannot be empty",
  },
};

exports.getByIdLangauge = {
  id: {
    in: ["params"],
    errorMessage: "Please add ID to params",
  },
};

exports.putLanguageSchema = {
  id: {
    in: ["params"],
    errorMessage: "Please add ID to params",
  }, 
  langaugeCode: {
    notEmpty: true,
    errorMessage: "langaugeCode cannot be empty",
  },
  displayLangauge: {
    notEmpty: true,
    errorMessage: "displayLangauge cannot be empty",
  },
  isActive: {
    notEmpty: false,
    errorMessage: "displayLangauge cannot be empty",
  },
};
