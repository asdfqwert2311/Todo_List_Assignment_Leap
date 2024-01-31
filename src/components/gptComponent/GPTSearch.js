import React, { useState } from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTSuggetions from './GPTSuggetions'
import { useSelector } from 'react-redux'
import GPTKey from './GPTKey'
import MessageDiv from './MessageDiv'
import { BGNET } from '../../utils/constant'

const GPTSearch = () => {
    const key = useSelector(store => store.gpt.key);
    const [message, setMessage] = useState(null);
    return (
        <div className='absolute bg-black  w-screen  min-h-screen' >
            
            <div className='p-50 pt-60 left-60'>
                {
                    key ?
                        <>
                            <GPTSearchBar apiKey={key} setMessage={setMessage} />
                            <GPTSuggetions />
                        </> : <GPTKey setMessage={setMessage} />
                }
                {
                    message && <MessageDiv message={message} />
                }
            </div>
        </div>
    )
}

export default GPTSearch