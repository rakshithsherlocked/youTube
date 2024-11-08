import { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utility/chatSlice";
import { generateRandomeMessage, generateRandomName } from "../utility/helper";

const LiveChat = ()=>{
    const [text, setText] = useState("");
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
        <div>
        <div className="p-2 py-3 m-2 h-[530px] w-300 ml-auto border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse">
          {chatMessage.map((c,i)=> <ChatMessages key={i} name={c.name} message={c.message} />)}  
        </div>
        <form className="border border-black w-full p-2 flex rounded-lg" onSubmit={(e)=>{
            e.preventDefault();
             dispatch(addMessage({
                name: "Rakkshit",
                message: text,
            }))

            }}>   
                <input className="border border-black w-72" type="text" value={text} onChange={(e)=>{
                 setText(e.target.value)
                 }}/>
                <button className="bg-slate-300 px-4 mx-2">send</button>
                  </form>
                  </div>
    )
}

export default LiveChat;