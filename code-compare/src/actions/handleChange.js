export const handleChange = (field, input) => dispatch => {
    dispatch({
        type: 'HANDLE_CHANGE',
        payload: input
    })
}