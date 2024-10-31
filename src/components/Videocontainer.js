import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utility/constant";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";
//import { Advideocard } from "./Videocard";

const Videocontainer =()=>{
    const [videos, setVideos] = useState([])
    useEffect(()=>{
        getVideos();
    },[])
    const getVideos= async ()=>{
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
       // console.log(json.items);
        setVideos(json.items)

    }
    return(
        <div className="flex flex-wrap">
             {videos.map((video) => (<Link key={video.id} to={"/watch?v="+video.id}>
            <Videocard info= {video}/> </Link>))}
           
        </div>
    )
}

export default Videocontainer;
//make for single value later use map it will be easy
//<Videocard (props)info= {videos[0]}/>

// HOC    {videos[0] && <Advideocard info={videos[0]} />}
   