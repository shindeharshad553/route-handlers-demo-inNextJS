// api to fetch the comment based on an ID
import {type NextRequest} from "next/server"
import {comments} from "../data"
// http://localhost:3000/comments/1
// NextRequest provides the methods to handle request object and query parameters as well 

// we just want the prefix of the request so that's why use _request
export async function GET(_request:NextRequest,{params}:{params:Promise<{id:string}>}){
    // fetch the id from the params 
    const {id}=await params;

    // find the comment with the id from the comments array
    const comment =comments.find((comment)=>comment.id===parseInt(id));

    // return the response 
    return Response.json(comment);
}


// api endpoint for PATCH (Updating the comment )
export async function PATCH(request:NextRequest,{params}:{params:Promise<{id:string}>}){
    // fetch the id from the params 
     const{id}=await params;
     const body=await request.json();

    //  get the title from the request body
    const {title} =body;

    // check the comments array to find the comment with given id
    const index=comments.findIndex((comment)=>comment.id===parseInt(id)); 
    if(index!==-1){
        comments[index].title=title;
        return Response.json(comments[index]);
    }
    else{
        return Response.json({error:"comment not found"},{status:404});
    }
}


// api endpoint for deleting comment 
export async function DELETE(_request:NextRequest,{params}:{params:Promise<{id:string}>}){   
    // fetch the id from the url (params) 
    const {id} =await params ;

    // check whether the comment with the given id present or not 
        const index=comments.findIndex((comment)=>comment.id===parseInt(id));
    // if present then remove it from comments and return the removed comment 
    if(index!==-1){
        const deletedComment=comments[index];
        comments.splice(index,1);
        return Response.json(deletedComment);
    }
    // else return not found 
    return Response.json({error:"comment not found"},{status:404});
}