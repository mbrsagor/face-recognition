def prepare_create_success_response(success_message):
    """ prepare success response for all """
    response = {
        'status': 'success',
        'message': 'Data Successfully created',
        'data': success_message
    }
    return response


def prepare_success_response(success_message):
    """ prepare success response for all """
    response = {
        'status': 'success',
        'message': 'Data successfully returned',
        'data': success_message
    }
    return response


def prepare_error_response(error_message):
    """ prepare error response for all """
    response = {
        'status': 'error',
        'message': error_message,
        "data": None
    }
    return response
