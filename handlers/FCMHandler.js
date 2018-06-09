const axios = require('axios');
const env = process.env.NODE_ENV || 'development';
const configs = require(`../configs/${env}Configs.js`);

module.exports = ({registration_ids, notification}) => {
    const fcmNotification = {
        registration_ids: registration_ids,
        notification: Object.assign(notification, {sound: 'default'}),
    }
    const headers = {
        'Authorization': `key=${configs.serverKey}`
    }
    return axios
        .post('https://fcm.googleapis.com/fcm/send', fcmNotification, {headers})
        .catch(console.log);
}
