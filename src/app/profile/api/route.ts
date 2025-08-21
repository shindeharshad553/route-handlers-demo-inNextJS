// if page.tsx and route.ts files are inside the same folder and are at same level then 
// the route.ts file will take over page.tsx
  
// GET ,POST ,PUT ,DELETE, HEADER AND OPTIONS 
export async function GET(){
    return new Response("Inside new response !!");
}