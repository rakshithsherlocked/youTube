import React from "react";
const Videocard =({info})=>{
    console.log(info);
   // if(!info) return <div>Loading.......</div>
    const snippet = info?.snippet;
    const statistics = info?.statistics;
  //  const {snippet, statistics} = info;
    const thumbnails = snippet?.thumbnails;
    return(
        <div className="p-2 m-2 w-72 rounded-lg shadow-lg">
            <img alt="" className=" rounded-lg"
            src={thumbnails?.high?.url}/>
            
            <ul>
                <li className="font-bold">{snippet?.title}
                </li>
                <li>
                {snippet?.channelTitle}
                </li>
                <li>
                {statistics?.viewCount}views
                </li>
            </ul>
            </div>
            
    );

};

export const Advideocard = ({info})=>{
    return(
        <div className="p-1 m-1 border border-Red-600">
            <Videocard/>
        </div>
    )
}
export default Videocard;