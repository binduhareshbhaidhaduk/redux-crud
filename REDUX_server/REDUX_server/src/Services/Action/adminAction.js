import axios from "axios"
import generateUniqueId from "generate-unique-id"

export const Create = (book) => ({
    type: 'ADD',
    payload: book
})

export const SRecord = (id) => {

    return {
        type: 'SINGLEREC',
        payload: id
    }
}
export const updatedrec = (newrec) => {

    return {
        type: 'UPDATED',
        payload: newrec
    }
}

export const deletRec = (id) => {

    return {
        type: 'DELETE',
        payload: id
    }
}


export const addproAsy = (data) => {
    return {
        type: 'ADDPROASYNC',
        payload: data
    }
}


// export const myThunkFun = (book) => {
//     return (dispatch) => {
//         dispatch(isLoading());

//         setTimeout(() => {
//             dispatch(Create(book));
//         }, 2000)
//     }
// }


export const isLoading = () => {
    return {
        type: 'LOADING',
    }
}

// const getBookasy =()=>{
//     return {
//         type : 'GETBOOKASY' ,
//         // payload:data
//     }
// }

export const addBookAsync = (book) => {
    return (dispatch) => {

        dispatch(isLoading())
        setTimeout(() => {


            book.id = generateUniqueId({ length: 4, useLetters: false })

            axios.post('  http://localhost:3000/book', book).then((res) => {
                // console.log(res.data)
                dispatch(getBookAsync())
                console.log(res, 'ok');
            }).catch((err) => {
                console.log(err, 'err')
            })
        }, 0)


    }
}

export const getBookAsync = () => {
    return (dispatch) => {

        dispatch(isLoading())
        setTimeout(()=>{

            axios.get('  http://localhost:3000/book').then((res) => {
                // console.log(res.data)
                dispatch(addproAsy(res.data));
                console.log(res, 'suc');
            }).catch((err) => {
                console.log(err, 'err')
            })

        },0)

    }
}

export const DeleteBookAsync = (id) =>{
    return (dispatch) => {
        
            axios.delete(`  http://localhost:3000/book/${id}`).then((res) => {

                dispatch(getBookAsync())
                console.log(res,"suc");
                })
                .catch((err)=>{console.log(err);})
                }
            
}


export const singleBookAsync = (id) =>{
    return (dispatch) => {
        
            axios.get(`  http://localhost:3000/book/${id}`).then((res) => {

                dispatch(SRecord(res.data))
                console.log(res.data,"bulbosour");
                })
                .catch((err)=>{console.log(err);})
                }
            
}

export const editBookAsync = (book) => {
    return (dispatch) => {
        axios.put(`http://localhost:3000/book/${book.id}`,book)
        .then((res) => {
                dispatch(getBookAsync(res.data))
                console.log(res.data,"oggey");
                })
                .catch((err)=>{console.log(err);})
                    
                }
}