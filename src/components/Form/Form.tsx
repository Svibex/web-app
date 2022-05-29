import React, {useState} from "react";
import {IComment} from "../../types/types";
import './Form.css'

interface FormProps {
    addComment: (comment: IComment) => void;
}

const Form: React.FC<FormProps> = ({addComment}) => {

    let [counter, setCounter] = useState<number>(501)

    const [state, setState] = useState<IComment>({
        name: '',
        body: '',
        email: '',
        id: counter.toString(),
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setState({...state, [e.target.name]: e.target.value});
    }


    return (
        <div className='form'>
            <div className='form__inputs'>
                <input type="text" name="name" placeholder="Имя"
                       onChange={handleChange} />
                <input type="text" name="email" placeholder="Email"
                       onChange={handleChange}/>
            </div>
            <textarea className='form__textarea'
                name="body" placeholder="Добавьте комментарий"
                defaultValue=''
                onChange={handleChange} />
            <button className='form__button'
            onClick={() => {
                addComment(state)
                setCounter(counter++)}}>
                Отправить комментарий</button>
        </div>
    )
}

export default Form;