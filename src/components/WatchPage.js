import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utility/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = ()=>{
    const [searchParams] = useSearchParams();
    const [text, setText] = useState("")
    console.log(searchParams.get("v"))
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
    return(
        
          <div className="flex flex-col w-full">
            <div className="px-5 flex w-full">
                <div children="">
             <iframe className="p-4" width="1100" 
            height="550" 
            src= {"https://www.youtube.com/embed/"+searchParams.get("v")}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            //referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
            ></iframe>
            </div>

            <div className="w-full">
                <LiveChat/>
            <form className="border border-black w-full ml-2 p-2 flex rounded-lg" onSubmit={(e)=>{
            e.preventDefault();

            dispatch(addMessage({
                    name: "Rakksher",
                    message: Text,
                })
            )
            }}>   
                <input className="border border-black w-72" type="text" value={text} onChange={(e)=>{
                 setText(e.target.value)
                 }}/>
                <button className="bg-slate-300 px-4 mx-2">send</button>
                  </form>
            </div>
            </div>
            <CommentContainer/>

        </div>
    )
};
export default WatchPage;

//                
