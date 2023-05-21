# -*- coding: utf-8 -*-

from flask import *
import json, time

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def api():
    return json.dumps({
        'status':'success',
        'data': {
            'time': time.time()
        }
    })

@app.route('/api/stats', methods=['GET'])
def stats():
    data_set = {
        'Overall': 'Overall We have checked a total of %s messages & %s of them are invites. - We have sniped %s nitro codes!',
        'Today': 'Today We have checked a total of %s messages & %s of them are invites. - We have sniped %s nitro codes!',
        'NitroBasicMonthly': 'Nitro Basic Monthly | %s',
        'NitroBaiscYearly': 'Nitro Basic Yearly | %s',
        'NitroClassicMonthly': 'Nitro Classic Monthly | %s',
        'NitroMonthly': 'Nitro Monthly | %s',
        'NitroYearly': 'Nitro Yearly | %s',
        'Nitro 3 Month': 'Nitro 3 Month | %s'
    }
    json_dump = json.dumps(data_set)
    return json_dump
