from utils import messages


def prepare_create_success_response(message):
    """ prepare success response for all serializer """
    response = {
        'status': 'success',
        'message': message
    }
    return response


def prepare_error_response(serializer_error):
    """ prepare error response for all serializer """
    response = {
        'status': 'fail',
        'message': serializer_error,
    }
    return response


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
