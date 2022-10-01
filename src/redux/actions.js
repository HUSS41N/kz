export const SET_QUERY = "SET_QUERY"

export const setQuery = query => dispatch => {
    dispatch({
        type:SET_QUERY,
        payload:query
    })
}
