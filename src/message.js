import { useEffect } from "react";

const Message = ({ data, hideMsg }) => {

    useEffect(() => {
        setTimeout(() => {
            hideMsg()
        }, 3000)
    })
    return (
        <>
            {data}
        </>
    );
}

export default Message;