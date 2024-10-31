import { useEffect } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utility/chatSlice";
import { generateRandomeMessage, generateRandomName } from "../utility/helper";

const LiveChat = ()=>{
    const dispatch = useDispatch();
    const chatMessage = useSelector((store)=> store.chat.messages)

    useEffect(()=>{
        const i = setInterval(()=>{
            console.log("API Calling")

        dispatch(addMessage({
            name: generateRandomName(),
            message:generateRandomeMessage(15),
        }))

        }, 2000);

        return ()=> clearInterval(i);
    },[])
    return(
        <div className="p-2 py-3 m-2 h-[530px] w-300 ml-auto border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse">
          {chatMessage.map((c,i)=> <ChatMessages key={i} name={c.name} message={c.message} />)}  
        </div>
    )
}

export default LiveChat;