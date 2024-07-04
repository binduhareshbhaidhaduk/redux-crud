import axios from "axios"
import generateUniqueId from "generate-unique-id"

export const Create = (product) => ({
    type: 'ADD',
    payload: product
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


// export const myThunkFun = (product) => {
//     return (dispatch) => {
//         dispatch(isLoading());

//         setTimeout(() => {
//             dispatch(Create(product));
//         }, 2000)
//     }
// }


export const isLoading = () => {
    return {
        type: 'LOADING'
    }
}

// const getProductasy =()=>{
//     return {
//         type : 'GETPRODUCTASY' ,
//         // payload:data
//     }
// }

export const addProdectAsync=(product)=>{
    return (dispatch)=>{

        dispatch(isLoading())

        setTimeout(()=>{
            product.id=generateUniqueId({ length: 4, useLetters: false })

            axios.post('http://localhost:3005/product',product).then((res)=>{
                console.log(res.data)
                
                console.log(res),'res';
            }).catch((err)=>{
                console.log(err,'err')
            })
        })
       
    }
}