import axios from 'axios';
// import consts from '../pages/const';
const consts = {
   APP_ID: '196508ba26c2db10',
   REGION: 'us',
   AUTH_KEY: '9da79cec26e6c1fba1d79b467515073cd154af56',
   UID: 'SUPERHERO1',
   API_KEY:'1df773b3303e87ed3cb3dfcea3ecaab6898530fb'
 }
const comet_chat_url = 'https://api-us.cometchat.io/v2.0/users';

export const registerUser = async ( ) => {
    let uid = 'a', name='c'
   const data = await axios.post(comet_chat_url, { uid, name }, { headers: { appId: consts.APP_ID, apiKey: consts.API_KEY }});
   return data;
}

export const loginUser = async (uid) => {
   
}