import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';
export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {

                context.commit('SET_NEWS', response.data);

            })
            .catch(error => {

            });
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => {

                commit('SET_ASK', data);

            })
            .catch(error => {

            });
    },
    //ES6 Destructuring
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => {

                commit('SET_JOBS', data);

            })
            .catch(error => {

            });
    }
}