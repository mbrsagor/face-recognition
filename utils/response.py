def data_deleted():
    return {
        'status': True,
        'message': 'Successfully data deleted.'
    }


def id_not_found():
    return {
        'status': False,
        'message': 'No post found this ID'
    }
