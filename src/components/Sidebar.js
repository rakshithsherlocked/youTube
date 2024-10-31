import { useSelector } from "react-redux";

const Sidebar = ()=>{
   const isMenuOpen= useSelector((store)=> store.app.isMenuOpen);
    //Early return pattern
   if(!isMenuOpen) return null;

    return(
        <div className="mx-4 p-4 shadow-lg w-48">
            <h1 className="font-bold">🏠Home</h1>
            <h1 className="font-bold">⚡Shorts</h1>
            <h1 className="font-bold">📺Videos</h1>
            <h1 className="font-bold">📽️Live</h1>
            <h1 className="font-bold pt-5">🚇Subcriptions</h1>
            <ul>
                
                <li>Movie</li>
                <li>Sports</li>
                <li>Music</li>
                <li>Games</li>
            </ul>
            <h1 className="font-bold pt-5">⏳Watch later</h1>
            <ul>
                
                <li>Liked videos</li>
                <li>History</li>
                <li>Disliked</li>
                <li>Your videos</li>
            </ul>
        </div>
    )
}

export default Sidebar;