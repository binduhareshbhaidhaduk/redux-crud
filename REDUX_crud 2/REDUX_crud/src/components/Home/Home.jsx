// // import generateUniqueId from 'generate-unique-id';
// import { useState } from 'react';
// import { Container } from 'react-bootstrap';
// import Table from 'react-bootstrap/Table';
// // import Header from '../Header/Header'
// import { getData } from '../Services/Helper';
// import { useNavigate } from 'react-router';

// function Home() {
//     const navigat = useNavigate();
//     // eslint-disable-next-line no-unused-vars
//     const [viewProduct, setViewProduct] = useState(getData('product'));
//     const handleEdit=()=>{
//         console.log('====================================');
//         console.log('swhkfij');
//         console.log('====================================');
//         navigat('/edit')
//         console.log('htjki');
//     }

//     console.log(viewProduct,"gdffdfdg");     
//     return (
//         <>
//             <Container className=''>
//                 <div className='p-2 d-flex head  text-light justify-content-between '>
//                     <h4 className='p-1 m-0'>Employee Management</h4>
//                     {/*     <button type='submit' className='btn' onClick={()=>{handleReset()}}><i className="bi bi-arrow-clockwise fs-4 text-white"></i></button> */}

//                 </div>

//                 <Table striped bordered hover>
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>Product Name</th>
//                             <th>Price</th>
//                             <th>Cetegores</th>
//                             <th>Discription</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {


//                             viewProduct.map(data => (
//                                 <>

//                                 <tr>
//                                     <td>{data.id}</td>
//                                     <td>{data.title}</td>
//                                     <td>{data.price}</td>
//                                     <td>{data.catagores}</td>
//                                     <td>{data.discription}</td>
//                                     <td className='d-flex justify-content-around'>
//                                         <button type='submit' className='btn text-primary' ><i className="bi bi-eye-fill fs-4"></i></button>
//                                         <button type='submit' className='btn text-warning' onClick={() => handleEdit(data.id)}><i className="bi bi-pencil-square fs-4"></i></button>
//                                         {/* <button type='submit' className='btn text-danger' onClick={() => handleDelete(data.id)}><i className="bi bi-trash3 fs-4"></i></button> */}
//                                     </td>

//                                 </tr>

//                                 </>


//                             ))
//                         }





//                     </tbody>

//                 </Table >

//             </Container >
//         </>
//     )
// }

// export default Home

// import generateUniqueId from 'generate-unique-id';
// import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
// import Header from '../Header/Header'
// import { getData } from '../Services/Helper';
import { useNavigate } from 'react-router';
// import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { SRecord, deletRec } from '../../Services/Action/adminAction';
// import { Button } from 'bootstrap';


function Home() {
    const dispatch=useDispatch();
    const navigat = useNavigate();
    // eslint-disable-next-line no-unused-vars
    // const [viewProduct, setViewProduct] = useState(getData('product'));

    // eslint-disable-next-line no-unused-vars
    const { products } = useSelector(state => state.adminReducer);
    // const [search, setSearch] = useState();
    const handleEdit = (id) => {
        console.log('==============');
        dispatch(SRecord(id))
        navigat(`/edit/${id}`);
    };

    // console.log(viewProduct, "gdffdfdg");


    const handleDelete = (id) => {
        
        dispatch(deletRec(id));
    }

    // const handleSearch = (e) => {
    //     setSearch(e.target.value);
    //     const data = getData('product');
    //     const searchData = data.filter(item =>
    //         item.title.toLowerCase().includes(e.target.value.toLowerCase())
    //     );
    //     setViewProduct(searchData);
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const data = getData('product');
    //     const searchData = data.filter(item =>
    //         item.title.toLowerCase().includes(search.toLowerCase())
    //     );
    //     setViewProduct(searchData);
    // }
    return (
        <>
            <Container >
                <div className='p-2 d-flex head  text-light justify-content-between '>
                    <h4 className='p-1 m-0'>Product Table</h4>
                    <div className='d-flex'>
                        {/* <Form.Control
                            type="text"
                            name='price'
                            placeholder='Search'
                            value={search}
                        onChange={handleSearch}
                        /> */}
                        {/* <button
                            type='submit'
                            className='btn btn-light'
                            onClick={handleSubmit}
                        >
                            <i className="bi bi-search"></i>
                        </button> */}
                    </div>
                    <p></p>
                    {/*     <button type='submit' className='btn' onClick={()=>{handleReset()}}><i className="bi bi-arrow-clockwise fs-4 text-white"></i></button> */}

                </div>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>categories</th>
                            <th>Discription</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(data => (
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.title}</td>
                                        <td>{data.price}</td>
                                        <td>{data.categories}</td>
                                        <td>{data.description}</td>
                                        <td className='d-flex justify-content-around'>
                                            <button type='submit' className='btn text-primary' ><i className="bi bi-eye-fill fs-4"></i></button>
                                            <button type='submit' className='btn text-warning' onClick={() => handleEdit(data.id)}><i className="bi bi-pencil-square fs-4"></i></button>
                                            <button type='submit' className='btn text-danger' onClick={() => handleDelete(data.id)}><i className="bi bi-trash3 fs-4"></i></button>
                                        </td>

                                    </tr>
                            ))
                        }





                    </tbody>

                </Table >

            </Container >
        </>
    )
}

export default Home