import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    imgSrc: '/static/mock/img/',
    detailId: sessionStorage.getItem('detailId'),
    id: sessionStorage.getItem('id') || '',
    pindex: sessionStorage.getItem('pindex') || '-1',
    cindex: sessionStorage.getItem('cindex') || '-1',
    saveComName: sessionStorage.getItem('saveComName'),
    saveProvinceTitle: sessionStorage.getItem('saveProvinceTitle') || '',
    saveCityName: sessionStorage.getItem('saveCityName') || '',
}
const mutations = {
    saveComNames(state, saveComName) {
        sessionStorage.setItem('saveComName', saveComName);
        state.saveComName = saveComName
    },
    saveProvinceTitles(state, saveProvinceTitle) {
        sessionStorage.setItem('saveProvinceTitle', saveProvinceTitle);
        state.saveProvinceTitle = saveProvinceTitle
    },
    saveCityNames(state, saveCityName) {
        sessionStorage.setItem('saveCityName', saveCityName);
        state.saveCityName = saveCityName
    },
    detailIds(state, detailId) {
        sessionStorage.setItem('detailId', detailId);
        state.detailId = detailId
    },
    ids(state, id) {
        sessionStorage.setItem('id', id);
        state.id = id
    },
    pindexs(state, pindex) {
        sessionStorage.setItem('pindex', pindex);
        state.pindex = pindex
    },
    cindexs(state, cindex) {
        sessionStorage.setItem('cindex', cindex);
        state.cindex = cindex
    },
}

export default new Vuex.Store({
    state,
    mutations
})