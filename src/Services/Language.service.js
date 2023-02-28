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
        const { id, displayLangauge, langaugeCode, isActive = true} = req;
        console.log('is', isActive);
        const existedLang = await LangaugeModel.findById(id);
        if (!existedLang) {
            return { message: 'Langauge not found' };
        }
        if (displayLangauge) existedLang.displayLang = displayLangauge;
        if (langaugeCode) existedLang.langCode = langaugeCode;
        existedLang.isActive = isActive;
        console.log('existedLang', existedLang);
        await existedLang.save();
        return { message: 'success', status: true };
    } catch (err) {
        return { message: 'failed', status: false };
    }
  
}

exports.deleteLangService = async (id) => {
    try {
        await LangaugeModel.deleteOne({_id: id});
        return { message: 'success', status: true };
    } catch (err) {
        return { message: 'success failed', status: false };
    }
}