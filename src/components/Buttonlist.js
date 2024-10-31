import Button from "./Button";

const Buttonlist =()=>{
    //const list= ["All", "Music", "Movies", "Sports", "Cricket", "Dance", "Cooking"];
    return(
        <div className="flex">
            
            <Button name = "All"/>
            <Button name = "Music"/>
            <Button name = "Movies"/>
            <Button name = "Sports"/>
            <Button name = "Cricket"/>
            <Button name = "Dance"/>
            <Button name = "Cooking"/>
            
        </div>
    )
}

export default Buttonlist;