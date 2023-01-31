const LangaugeModel = require("../Modules/language.module")

exports.getAllLanguage = async (query = {}) => {
    try {
        return await LangaugeModel.find(query);
    } catch (err) {
        return err;
    }
}

exports.createLanguageService = async (langCode, displayLang) => {
    try {
        console.log('langaugeCode', langCode);
        console.log('displayLangauge', displayLang);
        const createLanaguage = await LangaugeModel.create({langCode, displayLang});
        return createLanaguage;
    } catch (err) {
        return err;
    }
}

exports.updateLanguageService = async (req) => {
    try {
        const { id, displayLangauge, langaugeCode, isActive} = req;
        const existedLang = await LangaugeModel.findById(id);
        if (!existedLang) {
            return { message: 'Langauge not found' };
        }
        const updatedLang = await LangaugeModel.updateOne({_id: id}, {displayLangauge, langaugeCode, isActive});
        return updatedLang;
    } catch (err) {
        return err;
    }
  
}