import { MDBBtn, MDBCard, MDBCardBody, MDBCheckbox, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from '../../store/reducers/login';
import { Link } from 'react-router-dom';
function Register() {
  const dispatch=useDispatch()
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  
  const handelSubmit =(e)=>{
    e.preventDefault();
    dispatch(registerUser({firstname:fname,
      lastname: lname,
      password:password,
      mobile:phone,
      email:email}));
  }
  return (
    <div>
    <MDBContainer  className='my-5'>

    <MDBRow className='g-0 align-items-center'>
      <MDBCol col='6'>

        <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <form onSubmit={handelSubmit}>
              <MDBCardBody className='p-5 shadow-5 text-center'>

                <h2 className="fw-bold mb-5">Sign up now</h2>

                <MDBRow>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='First name' value={fname} id='form1' type='text' onChange={(e)=>setFname(e.target.value)}/>
                  </MDBCol>

                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='Last name' value={lname} id='form2' type='text' onChange={(e)=>setLname(e.target.value)}/>
                  </MDBCol>
                </MDBRow>
                <MDBInput wrapperClass='mb-4' label='Email' id='form3' value={email} type='email' onChange={(e)=>setEmail(e.target.value)} />
                <MDBInput wrapperClass='mb-4' label='Password' id='form4' value={password} type='password' onChange={(e)=>setpassword(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Phone' id='form4' value={phone} type='number' onChange={(e)=>setPhone(e.target.value)}/>

                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                </div>

                <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

                <div className="text-center">

                  <p>or sign up with:</p>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='facebook-f' size="sm"/>
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='twitter' size="sm"/>
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='google' size="sm"/>
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='github' size="sm"/>
                  </MDBBtn>

                </div>
                <Link  to="/login" className="btn mt-3">lets login</Link>
             
              </MDBCardBody>
            </form> 
        </MDBCard>
      </MDBCol>

      <MDBCol col='6'>
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4"
          alt="" fluid/>
      </MDBCol>

    </MDBRow>

  </MDBContainer>
    </div>
  )
}

export default Register
