import {React, useState} from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username:'',
        msg:'',
    });

    const {username, msg} = form;
    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        }
        console.log(nextForm);
        setForm(nextForm);
    }

    const onClick = () => {
        alert(form.msg + "  " + form.username);
        setForm({
            username: "",
            msg:"",
        })
    }

    return (
        <div>
            <h1>이벤트 연습</h1>
            <h2>{msg}</h2>
            <input type="text" name="msg" placeholder="아무거나 입력" value={msg} onChange={onChange}></input>

            <button onClick={onClick}>함눌러봐라</button>

            <input type="text" name="username" placeholder="아무거나 입력" value={username} onChange={onChange}></input>

            <button onClick={onClick}>함눌러봐라</button>
        </div>
    );
};

export default EventPractice;