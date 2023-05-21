const { json } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const time = require('time');

const DB_URL = 'mongodb+srv://ventixa1:Baby.com@licenses.22geczc.mongodb.net/?retryWrites=true&w=majority';

app.get('/api', (req, res) => {
    res.json({
        'status': 'success',
        'data': {
            'time': time.time()
        }
    });
});

app.get('/api/stats', (req, res) => {
    const data_set = {
        'Overall': 'Overall We have checked a total of %s messages & %s of them are invites. - We have sniped %s nitro codes!',
        'Today': 'Today We have checked a total of %s messages & %s of them are invites. - We have sniped %s nitro codes!',
        'NitroBasicMonthly': 'Nitro Basic Monthly | %s',
        'NitroBaiscYearly': 'Nitro Basic Yearly | %s',
        'NitroClassicMonthly': 'Nitro Classic Monthly | %s',
        'NitroMonthly': 'Nitro Monthly | %s',
        'NitroYearly': 'Nitro Yearly | %s',
        'Nitro 3 Month': 'Nitro 3 Month | %s'
    };
    const json_dump = JSON.stringify(data_set);
    res.send(json_dump);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
