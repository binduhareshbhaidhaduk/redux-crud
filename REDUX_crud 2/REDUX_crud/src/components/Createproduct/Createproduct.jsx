/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router';
// import { Link } from 'react-router-dom';
// import { json } from 'react-router';
// import { getData, setData } from '../Services/Helper';
import { useDispatch, useSelector } from 'react-redux';
import { addProdectAsync, isLoading, myThunkFun } from '../../Services/Action/adminAction';
function Createproduct() {
    const [inputState, setInputState] = useState({
        id: '',
        title: '',
        price: '',
        categories: '',
        description: '',
    });

    const { isLoading } = useSelector(state => state.adminReducer);

    // const [myProduct, setmyProduct] = useState(getData('product'));

    const [isSubmit, setIsSubmit] = useState(false);
    const navigat = useNavigate();
    const dispatch = useDispatch();



    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInputState({ ...inputState, [name]: value });

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        
        dispatch(addProdectAsync(inputState))
        setIsSubmit(true);
        // navigat('/');

    }


    useEffect(() => {
        if (!isLoading && isSubmit) {
            console.log(isLoading, 'hjdegfkj')
            navigat('/')
        }

    }, [isLoading, isSubmit, navigat])

    return (
        <>

            <Container className='m-auto'>

                <div className="row  ps-5">
                    <div className='d-flex justify-content-center form'>

                        <div className="col6 p-3">
                            <div className=' head '>
                                <h5 className='text-white p-3'>New product</h5>
                            </div>
                            <Form onSubmit={handleSubmit} className='p-3 '>
                                <Form.Control type="text" value={inputState.id} name='id' hidden />

                                <Form.Group as={Col} controlId="formGridEmail" className='d-flex p-1 fs-6'>
                                    <Form.Label className='d-flex'>
                                        Title
                                    </Form.Label>
                                    <Form.Control type="text" onChange={handleInput} value={inputState.title} name='title' />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail" className='d-flex p-1 fs-6'>
                                    <Form.Label className='d-flex'>
                                        Price
                                    </Form.Label>
                                    <Form.Control type="text" onChange={handleInput} value={inputState.price} name='price' />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail" className='d-flex p-1 fs-6'>
                                    <Form.Label className='d-flex'>
                                        Catagores
                                    </Form.Label>
                                    <Form.Control type="text" onChange={handleInput} value={inputState.categories} name='categories' />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail" className='d-flex p-1 fs-6'>
                                    <Form.Label className='d-flex'>
                                        Discription
                                    </Form.Label>
                                    <Form.Control as="textarea" aria-label="With textarea" onChange={handleInput} value={inputState.description} name='description' />
                                </Form.Group>

                                <Button variant="success" type='submit' disabled={isLoading}>
                                    {
                                        isLoading ? (<>
                                        <Spinner
                                            as="span"
                                            animation="grow"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        /> loading...
                                        </>) : "submit"
                                    }


                                </Button>


                            </Form>
                        </div>
                    </div>

                </div>
            </Container>
        </>
    )
}

export default Createproduct





