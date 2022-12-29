const { getAllLanguage, createLanguageService, updateLanguageService } = require("../Services/Language.service");
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
    const { languageCode, displayLanguage } = req.body;
    const createdLanaguge = await createLanguageService(languageCode, displayLanguage);
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

exports.updateLanguageController = async (req, res) => {
    try {
        const { id } = re.params;
        const { languageCode, displayLanguage, isActive } = req.body;
        const updatedLang = await updateLanguageService({id, languageCode, displayLanguage, isActive});
        return sendResponse(res, 200, "updated successfully", updatedLang);
        cons
    } catch (err) {

    }
}