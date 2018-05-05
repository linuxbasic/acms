import requests

BASE_URL = 'https://containertracker.data.thethingsnetwork.org'
HEADERS = {
    'Authorization': 'key ttn-account-v2.dkrPsi4bpOb-vElzq529wjzyitZN_XIehaVDjKr_1xY'
}

def get_devices():
    return requests.get( f'{BASE_URL}/api/v2/devices', headers=HEADERS).json()


def get_data(tracker_id):
    return requests.get( f'{BASE_URL}/api/v2/query/{tracker_id}?last=1d', headers=HEADERS).json()
