import { useState } from 'react';

function ChatBox() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { text: newMessage }]);
            setNewMessage('');
        }
    };

    return (
        <div style={{ borderColor: "gray", height: "37rem" }} className='d-flex flex-column'>
            <div className='d-flex flex-column' style={{  height: "100%" }}>
                <div className='chat-messages flex-grow-1 p-3'>
                    {/* {messages.map((message, index) => (
                        <div key={index} className='mb-2'>
                            {message.text}
                        </div>
                    ))} */}
                </div>
                <div className='d-flex align-items-center p-3'>
                    <input
                        type='text'
                        placeholder='Message '
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className=' form-control  flex-grow-1 me-2'
                    />
                    {/* <button onClick={handleSendMessage} className='btn btn-primary'>
                        Send
                    </button> */}
                </div>
            </div>
        </div>
    );
}

export default ChatBox;
