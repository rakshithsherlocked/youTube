import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utility/appSlice";
import { YOUTUBE_SEARCH_API } from "../utility/constant";
import { cacheResults } from "../utility/cacheSlice";

const Header= () => {
    const dispatch= useDispatch();
    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
    }
    const [searchText, setSearchText] = useState("");
  //console.log(searchText)
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector(store=> store.search)

    useEffect(()=>{
     //   console.log(searchText)

       const timer = setTimeout(()=>{
        if(searchCache[searchText]) 
            {setShowSuggestion(searchCache[searchText])}

        else 
        {getSearchSuggestionQuery() }
    }, 2000) 
       return()=>{clearTimeout(timer);}
    },[searchText]);


    const getSearchSuggestionQuery = async ()=>{
        console.log("API-CALL "+ searchText)
        const data = await fetch(YOUTUBE_SEARCH_API + searchText);
        const json = await data.json();
        console.log(json)

        //setSearchText(json)
        setSuggestion(json);

        dispatch(cacheResults({[searchText]: json}))
        
    }

    return(
    
        <div className="grid grid-flow-col p-5 m-4 shadow-lg">
            <div className="flex col-span-1 mx-3">
            <img className="h-8 cursor-pointer"
            onClick={()=> toggleMenuHandler()}
            alt="Menu"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5sEeuOGh3rChJXr2ljYzY0Vo10Qr9Y5JAA&s"/>
            
            <img className="h-8 mx-2"
            alt="Youtube logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png"
            />
            </div>
            <div className="h-8 text-center col-span-10">
    <div>
        <input 
            className="w-1/2 border border-gray-400 rounded-l-full"
            type="text"
            value={searchText}
            onChange={(e)=>{setSearchText(e.target.value)}} 
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
        />
        <button className="border border-gray-400 rounded-r-full px-4 bg-gray-200">🔍</button>
    </div>

    {/* Suggestions List */}
    {showSuggestion &&(
    <div 
    className="relative w-1/2 mx-auto">
        <div 
        className="absolute bg-white py-4 px-4 text-left w-[98%] border-gray-300 rounded-lg mt-1 shadow-lg" style={{ left: '-21px' }}>
            <ul>
              {suggestion.map(s =><li key={s.show.id} className="py-2 shadow-lg hover:bg-blend-color-burn">{s.show.name}</li>)}    
                </ul>
        </div>
    </div>)}
</div>

            <div className="col-span-1">
            <img className="h-8" 
            alt="User Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            />
            </div>
        
        </div>

    )
}

export default Header;