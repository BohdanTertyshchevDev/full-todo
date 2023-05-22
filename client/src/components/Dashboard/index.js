import React, {useState, useEffect} from 'react';
import { authUser } from '../../api/userApi';
import { useNavigate } from 'react-router-dom';
import TodoPage from '../../pages/TodoPage';

const Dashboard = (props) => {
    const [todo, setTodos] = useState;
    const navigate = useNavigate();

    useEffect(() => {
        if(!props.user) {
            const token = localStorage.getItem('token');
            if(token) {
                authUser(token)
                .then(userData => {
                    props.sendUser(userData.data);
                }).catch(error => {
                    return navigate('/');
                })
            } else {
                navigate('/');
            }
        } else {
            setTodos(true);
        }
    }, [props.user])

    return (
        <>
            {todo ? <TodoPage /> : null}   
        </>
    );
}

export default Dashboard;
