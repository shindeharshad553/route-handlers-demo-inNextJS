import {comments} from "./data"

export async function GET(){
    return Response.json(comments);
}

// post method to handle the addition of comment 
export async function POST(request:Request){
    // fetch the comment from the request
    const comment=await request.json();
    // creating JSON request into object  
    const new_comment={
        id:comments.length+1,
        title:comment.text,
    };
    // adding that object to the comments array
    comments.push(new_comment);

    // return the response 
    return new Response(JSON.stringify(new_comment),{
        headers:{"content-type":"application/JSON"},
        status:201,
    });
}