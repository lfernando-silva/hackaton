const axios = require('axios');

module.exports = ({registration_ids, notification}) => {
    const fcmNotification = {
        registration_ids: registration_ids,
        notification: Object.assign(notification, {sound: 'default'}),
    }
    const headers = {
        'Authorization': `key=${process.env.FCM_SERVER_KEY}`
    }
    return axios
        .post('https://fcm.googleapis.com/fcm/send', fcmNotification, {headers})
        .catch(console.log);
}
