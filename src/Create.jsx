import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addUser } from './slice'




const Create = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handlesubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, age, email }))
        navigate('/Student')

    }


    return (
        <>
            <div>
                <div className='create-page'>

                    <h3>Add New User</h3>
                    <form onSubmit={handlesubmit}>

                        <div>
                            <label htmlFor='name' placeholder='Enter-Name:'>Name:</label>
                            <input type='text' name='name' onChange={e => setName(e.target.value)} />

                        </div>
                        <div>
                            <label htmlFor='age' placeholder='Enter-Age'>Age:</label>
                            <input type='age' name='age' onChange={e => setAge(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor='email' placeholder='Enter-Email'>Email:</label>
                            <input type='email' name='email' onChange={e => setEmail(e.target.value)} />
                        </div>
                        <br />
                        <button>submit</button>
                        
                        <Link to="/Student"><button className='back'>Back</button></Link>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Create