// dummy data
const CommentsData = [
    {
        name: "Rakksher",
        text:"et voila!",
        replies:[{
            name: "Rakksher",
            text:"et voila!",
            replies:[{
                name: "Rakksher",
                text:"et voila!",
                replies:[{
                    name: "Rakksher",
                    text:"et voila!",
                    replies:[{
                        name: "Rakksher",
                        text:"et voila!",
                        replies:[]
                    }]
                }]
            }]
        }]
    },
    {
        name: "Rakksher",
        text:"et voila!",
        replies:[]
    },
    {
        name: "Rakksher",
        text:"et voila!",
        replies:[]
    },
    {
        name: "Rakksher",
        text:"et voila!",
        replies:[]
    },
]

//2
const Comment =({data})=>{
    const {name, text}= data;
    return(
        <div className="px-2 mx-4 flex shadow-lg bg-gray-100 rounded-lg my-2">
            <img className="w-12 h-12" alt="user" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"/>
             <div><p className="font-bold">{name}</p>
            <p>{text}</p>
            </div>
           </div>
    )
}

//4
const CommentList =({comments})=>{
    //Don't use index as a key
    return comments.map((comment, index) =>(
    <div key={index}><Comment  data={comment}/>
    <div className="pl-4 border border-l-black ml-5">
        <CommentList comments={comment.replies}/>
    </div>
     </div>
    )
)};


//3
const CommentContainer = ()=>{
    return(
        <div>
            <h1 className="px-4 font-bold">Comments: </h1>
    <CommentList comments={CommentsData}/>
            </div>
          
        
       
    )
}

export default CommentContainer;


//<Comment data={CommentsData[0]}/>