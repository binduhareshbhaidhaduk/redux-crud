// import generateUniqueId from 'generate-unique-id';
// import { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
// import Header from '../Header/Header'
// import { getData } from '../Services/Helper';
import { useNavigate, useParams } from 'react-router';
// import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteBookAsync, SRecord, deletRec, getBookAsync, singleBookAsync } from '../../Services/Action/adminAction';
import { useEffect, useState } from 'react';
// import { Button } from 'bootstrap';


function Home() {
  const dispatch = useDispatch();
  const [recid, setRecId] = useState('');
  const navigate = useNavigate();

  const { books, book } = useSelector(state => state.adminReducer);
  console.log("pokemon", books)

  const handleEdit = (id) => {
    setRecId(id)
    dispatch(singleBookAsync(id));
    console.log("dinosour", id);
    // navigate(`/edit/${id}`)
  }

  // const handleSearch=()=>{
    

  // }

  const handleDelete = (id) => {

    dispatch(DeleteBookAsync(id));
  }


  useEffect(() => {
    if (book) {

      navigate(`/edit/${recid}`)

    }
  }, [book])
  useEffect(() => {

    dispatch(getBookAsync())
  }, [])

  return (
    <>
      <Container >
        <div className='p-2 d-flex  text-light '>
          {/* <h4 className='p-1 m-0 head'>ALL</h4> */}
          <div className='d-flex'>
            {/* <Form.Control
              type="text"
              name='price'
              placeholder='Search'
              value={search}
              onChange={handleSearch}
            />
            <button
              type='submit'
              className='btn btn-light'
              onClick={handleSubmit}
            >
              <i className="bi bi-search"></i>
            </button> */}
          </div>
          <p></p>
          {/* <button type='submit' className='btn' onClick={() => { handleReset() }}><i className="bi bi-arrow-clockwise fs-4 text-white"></i></button> */}


          <div className="shelf">
            {books.map((book) => (
              <div className="col" key={book.id}>
                <div className={`book-ui ${book.theme}`}>
                  <div className="cover">
                    <div className="front">
                      <h1 className='p-3 fs-1'>{book.title}</h1>
                      <ul className="details">
                        <li><strong>Title:</strong> {book.title}</li>
                        <li><strong>Author:</strong> {book.author}</li>
                        <li><strong>Genre:</strong> {book.genre}</li>
                        <li><strong>Published Year:</strong> {book.py}</li>
                      </ul>
                    </div>
                    <ul className="pages">
                      <li></li>
                      <li className="second-page">
                        <div className="back">
                          <div className="bottom d-block">
                            <button type="button" className="btn text-primary"><i className="bi bi-eye-fill fs-4"></i></button>
                            <button type="button" className="btn text-white" onClick={() => handleEdit(book.id)}><i className="bi bi-pencil-square fs-4"></i></button>
                            <button type="button" className="btn text-danger" onClick={() => handleDelete(book.id)}><i className="bi bi-trash3 fs-4"></i></button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Genre</th>
                            <th>Publication Year</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map(data => (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td>{data.author}</td>
                                    <td>{data.genre}</td>
                                    <td>{data.py}</td>
                                    <td className='d-flex justify-content-around'>
                                        <button type='submit' className='btn text-primary' ><i className="bi bi-eye-fill fs-4"></i></button>
                                        <button type='submit' className='btn text-warning' onClick={() => handleEdit(data.id)}><i className="bi bi-pencil-square fs-4"></i></button>
                                        <button type='submit' className='btn text-danger' onClick={() => handleDelete(data.id)}><i className="bi bi-trash3 fs-4"></i></button>
                                    </td>

                                </tr>
                            ))
                        }

                    </tbody>

                </Table > */}

      </Container >

    </>
  )
}

export default Home;



