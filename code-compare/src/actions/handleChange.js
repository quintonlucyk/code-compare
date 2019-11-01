export const handleChange = (payload) => dispatch => {
    dispatch({
        type: 'HANDLE_CHANGE',
        payload
    })
}