import {  useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Container, Button, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { editBookAsync, singleBookAsync, updatedrec } from '../../Services/Action/adminAction';
import { getData } from '../Service/Helper';


function EditBook() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [inputState, setInputState] = useState({
        id: '',
        title: '',
        author: '',
        genre: '',
        py: ''
    });
    // const [myBook, setMyBook] = useState(getData('books'));
    // const [isSubmit, setIsSubmit] = useState(false);
    const {book} = useSelector(state => state.adminReducer)

    const dispatch=useDispatch()
    
    
    // useEffect(() => {
    //     const book = myBook.find(p => p.id === id);
    //     if (book) {
    //         setInputState(book);
    //     }
    // }, [id, myBook]);

    
  console.log(inputState,'hsiukj');
    
    
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputState({ ...inputState, [name]: value });
    };
    console.log("harry potter",book);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const updatedBooks = myBook.map(p =>
    //         p.id === id ? { ...p, ...inputState } : p
    //     );
    //     setMyBook(updatedBooks);
    //     setIsSubmit(true);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // const updatedBooks = myBook.map(p =>
    //     //     p.id === id ? { ...p, ...inputState } : p
    //     //     );
    //     // console.log('nslki',updatedBooks);
    //     // setMyBook(updatedBooks);
    //     // setIsSubmit(true);
    //     // getData('book', updatedBooks);  

    //     dispatch(updatedrec(inputState))
    // };
  
    // useEffect(() => {
    //     if (isSubmit) {
    //         setData('book', myBook);
    //         navigate('/');
    //     }
    // }, [isSubmit, myBook, navigate]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hello",inputState);
        dispatch(editBookAsync(inputState));
        // setIsSubmit(true);
        // navigate('/');
    }

    useEffect(() => {
        if (book) {
            setInputState(book);
        }else{
            navigate('/');
        }
    }, [book]);

    // useEffect(()=>{
    //     dispatch(singleBookAsync(id));
    // },[dispatch,id]);

    return (
        <Container className='m-auto'>
            <div className="row ps-5">
                <div className='d-flex justify-content-center form'>
                    <div className="col6 p-3">
                        <div className='head'>
                            <h5 className='text-white p-3'>Edit Book</h5>
                        </div>
                        <Form onSubmit={handleSubmit} className='p-3 '>
                            <Form.Control type="text" value={inputState.id} name='id' hidden />

                            <Form.Group as={Col} controlId="formGridTitle" className='d-flex p-1 fs-6'>
                                <Form.Label className='d-flex'>Title</Form.Label>
                                <Form.Control type="text" onChange={handleInput} value={inputState.title} name='title' />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPrice" className='d-flex p-1 fs-6'>
                                <Form.Label className='d-flex'>Author</Form.Label>
                                <Form.Control type="text" onChange={handleInput} value={inputState.author} name='author' />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCategories" className='d-flex p-1 fs-6'>
                                <Form.Label className='d-flex'>Genre</Form.Label>
                                <Form.Control type="text" onChange={handleInput} value={inputState.genre} name='genre' />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridDescription" className='d-flex p-1 fs-6'>
                                <Form.Label className='d-flex'>Publication Year</Form.Label>
                                <Form.Control  onChange={handleInput} value={inputState.py} name='py' type='number'/>
                            </Form.Group>
                            <Button className='btn btn-success' type="submit">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default EditBook;


