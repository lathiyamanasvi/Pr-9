export const Add = (data) => {
    return{
        type: 'add',
        payload: data,

    }
}
export const Delete_data = (id) => {
    return{
        type : 'del',
        payload : id
    }
}