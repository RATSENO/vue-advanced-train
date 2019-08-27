import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchCommentItem } from '../api/index.js';
export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {

                context.commit('SET_NEWS', response.data);
                return response;

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
    },
    FETCH_USER({commit}, name){
        fetchUserInfo(name)
            .then(({data}) => {
                commit('SET_USER', data);
            })
            .catch(error =>{
                    
            });
    },
    FETCH_ITEM({commit}, id){
        fetchCommentItem(id)
            .then(({data}) =>{
                commit('SET_ITEM', data);
            })
            .catch(error => {

            })

    }
}