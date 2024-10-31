const ChatMessages =({name, message})=>{
    return(
        <div className="flex shadow-lg">
            <img className="h-6" 
            alt="User Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            />
           
            <span className="font-bold">{name}:  </span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessages;