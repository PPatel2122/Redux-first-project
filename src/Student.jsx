import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { deleteUser } from './slice';
import NavigationBar from './NavigationBar';






const Student = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }))
        console.log(id)
    }


    return (
        <>
            <NavigationBar />
            <div className="form">
            

            <div className='table'>
                <h2 className='name-table'>STUDENT-TABLE</h2>

                <Link to="/Create"><button>Create</button></Link>
            

                <table >

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/edit/${user.id}`}><button>Edit</button></Link>
                                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>

        </>
    )
}

export default Student