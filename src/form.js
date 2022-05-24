import { useReducer, useState } from "react"
import Message from "./message";
import { reducer } from "./reducer";

const defaultState = {
    users: [],
    hasMessage: false,
    messageText: "Enter name"
}

const Form = () => {
    const [name, setName] = useState("")
    const [state, dispatch] = useReducer(reducer, defaultState)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name) {
            const newUser = { name }
            dispatch({ type: "ADD_USER", payload: newUser })
            setName("")
        } else {
            dispatch({ type: "NO_USER" })
            state.hasMessage = true
        }
    }

    const hideMsg = () => {
        dispatch({ type: "HIDE_MSG" })
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <label>Fullame: </label>
                <input type="text" id="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                <button type="submit">Add</button>
            </form>

            {state.hasMessage && <Message data={state.messageText} hideMsg={hideMsg} />}

            {state.users && <ul>
                {
                    state.users.map((user, index) => {
                        return (
                            <li key={index}>{user.name}</li>
                        )
                    })
                }
            </ul>
            }
        </>
    );
}

export default Form;