const LangaugeModel = require("../Modules/language.module")

exports.getAllLanguage = async (query = {}) => {
    try {
        return await LangaugeModel.find(query);
    } catch (err) {
        return err;
    }
}

exports.createLanguageService = async (langaugeCode, displayLangauge) => {
    try {
        const createLanaguage = await LangaugeModel.create({langaugeCode, displayLangauge});
        return createLanaguage;
    } catch (err) {
        return err;
    }
}

exports.updateLanguageService = async (req) => {
    const { id, displayLangauge, langaugeCode, isActive} = req;
    const existedLang = await LangaugeModel.findById(id);
    if (!existedLang) {
        return { message: 'Langauge not found' };
    }
    const updatedLang = await LangaugeModel.updateById(id, {displayLangauge, langaugeCode, isActive});
    return updatedLang;
}