const { getAllLanguage, createLanguageService, updateLanguageService, deleteLangService } = require("../Services/Language.service");
const { sendResponse } = require("../utils/helper");

exports.getLanguageController = async (req, res) => {
    try {
        const data = await getAllLanguage();
        sendResponse(res, 200, "data fetched", data);
    } catch (err) {
        return sendResponse(res, 500, "data fetched failed", {}, err);
    }  
    
}

exports.createLanguageController = async (req, res) => {
    const { langCode, displayLang } = req.body;
    console.log('languageCode', langCode);
    console.log('displayLanguage', displayLang);
    const createdLanaguge = await createLanguageService(langCode, displayLang);
    if (!createdLanaguge) return sendResponse(res, 400, 'failed to add', {}, createdLanaguge);
    sendResponse(res, 200, "created successfully", createdLanaguge);
}

exports.getLanguageById = async (req, res) => {
    try {
        if (!req.params) {
            return sendResponse(res, 500, 'param error . Plese pass id as param');
        }
        const { id } = req.params;
        const getLangById = await getAllLanguage({_id: id});
        return sendResponse(res, 200, "", getLangById);
    } catch(err) {
        return sendResponse(res, 500, '', {} ,err);
    }
 

}

exports.deleteLangControler = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedLanguage = await deleteLangService(id);
        res.send(deletedLanguage);
    } catch (err) {
        sendResponse(res, 500, 'error', {}, err);
    }
}

exports.updateLanguageController = async (req, res) => {
    try {
        const { id } = req.params;
        const { languageCode, displayLanguage, isActive } = req.body;
        const updatedLang = await updateLanguageService({id, languageCode, displayLanguage, isActive});
        res.send(updatedLang);
    } catch (err) {
        console.log('error', err);
        return sendResponse(res, 500, 'Error', {}, err);
    }
}