import { createStore } from 'vuex';
import router from './router';
import axios from 'axios';

const store = createStore({
    state() {
        return {
            // ------------------------------ 권현수 -----------------------------------

            // ---------------------------------끝--------------------------------------
            // ------------------------------ 서보원 -----------------------------------

            // ---------------------------------끝--------------------------------------
            // ------------------------------ 정보배 -----------------------------------

            // ---------------------------------끝--------------------------------------
        }
    },

    mutations: {
            // ------------------------------ 권현수 -----------------------------------

            // ---------------------------------끝--------------------------------------
            // ------------------------------ 서보원 -----------------------------------

            // ---------------------------------끝--------------------------------------
            // ------------------------------ 정보배 -----------------------------------

            // ---------------------------------끝--------------------------------------
    },
    actions: {
            // ------------------------------ 권현수 -----------------------------------
            
            // 회원가입 아이디 체크 (사업자와 일반유저 공통 체크)
            accountCheck(context, account) {
                const url = "/api/regist/accountCheck";
                const data = new FormData();
                data.append('account', account);

                axios.get(url, data)
                .then( response => {
                    context.commit('setModalMessage', '사용가능한 아이디 입니다.')
                })
                .catch();
            }
            // ---------------------------------끝--------------------------------------
            // ------------------------------ 서보원 -----------------------------------

            // ---------------------------------끝--------------------------------------
            // ------------------------------ 정보배 -----------------------------------

            // ---------------------------------끝--------------------------------------
    }

});

export default store;