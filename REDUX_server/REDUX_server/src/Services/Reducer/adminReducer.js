/* eslint-disable no-case-declarations */
import generateUniqueId from 'generate-unique-id';
// import getData from 'service/Helper'
import { getData, setData } from '../../components/Service/Helper';
import { isLoading } from '../Action/adminAction';

const initialState = {
    books: [],
    book: null,
    isLoading:false
};

export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            let prd = {
                ...action.payload,
                id: generateUniqueId({ length: 4, useLetters: false })
            };
            console.log(prd, 'helohjxfbje');
            let storage = [...state.books, prd];
            localStorage.setItem('books', JSON.stringify(storage));
            return {
                ...state,
                books: storage,
                isLoading:false
            }

        case 'SINGLEREC':
            // let singleRec=state.books.find(prd => prd.id === action.payload)            

            // console.log('single', singleRec);
            return {
                ...state,
                book: action.payload
            }
        case 'UPDATED':
            let storage2 = [...state.books];
            let updatedpro = storage2.map((pro) => {

              if(pro.id == state.book.id){
                return {
                    ...pro,
                    ...action.payload
                }
              }else{
                return pro
              }

            })
            setData('books',updatedpro);
            return {
                ...state,
                books: updatedpro,
                book:null
            }

        case 'DELETE':
            const deletRec=state.books.filter(prd => prd.id !== action.payload)

            setData('books',deletRec);
            return {...state, books:deletRec}

        case 'LOADING':
            return {...state, isLoading: true}

        case 'ADDPROASYNC':
            return {
                ...state,
                books:action.payload,
                book:null,
                isLoading:false
            }

        default:
            return state;

    }
};

export default adminReducer;

