import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './slice'




const Update = () => {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.find((f) => f.id == id);
    console.log(existingUser)
    const  name  = existingUser.name;
    const  age = existingUser.age;
    const  email = existingUser.email;
    console.log(existingUser.name)


    const [uname, setName] = useState(name);
    const [uage, setAge] = useState(age);
    const [uemail, setEmail] = useState(email);
    const dispatch = useDispatch();
    // console.log(uname, uage, uemail)
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            age: uage,
            email: uemail
        }))
        navigate('/Student')


    }


    return (
        <>
            <div>
                <div>

                    <h3>UPdate User</h3>
                    <form onSubmit={handlesubmit}>

                        <div>
                            <label htmlFor='name' placeholder='Enter-Name'>Name:</label>
                            <input type='text' name='name' value={uname} onChange={e => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor='age' placeholder='Enter-Age'>Age:</label>
                            <input type='Age' name='Age' value={uage} onChange={e => setAge(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor='email' placeholder='Enter-Email'>Email:</label>
                            <input type='email' name='email' value={uemail} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <br />
                        <button>update</button>
                        <Link to="/Student"><button className='back'>Back</button></Link>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Update