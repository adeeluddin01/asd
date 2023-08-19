// import { useState } from "react"
// import Header from "./header"
// import { useState } from "react";
// import Input from "../../public/components/input";

import { getAll } from "@/service/blogs";

// // export default function TodoApp() {
// //  const [taskdata,setTaskData]=useState()
// //  const [tasklist,setTaskList]=useState([])
// //  function SubmitHandler(e){
// //   e.preventDefault()
// //  }
// //  function InputHandler(e){
// //   setTaskData(e.target.value)
// //  } 

// //  function taskListData(){
// //   setTaskList(data=>{
// //     const updated=[...data,taskdata]
// // return updated
// // })
// // setTaskData("")
// //  }
// //  function Remove(i){
// //  const uptodate= tasklist.filter((elem,index)=>{
// //    return i!=index
// //   })
// //   setTaskList(uptodate)
// //  }
// //   return(
// // <>
// // <form onSubmit={SubmitHandler}>
// // <input type="text"  placeholder="enter you task" value={taskdata} onChange={InputHandler}/>
// // <button onClick={taskListData}>Add</button>
// // </form>
// // {tasklist.map((singleitem,i)=>{
// //   return(
// //     <>
// //     <div>
// //       <p>{i},{singleitem}
      
// //       <button onClick={()=>Remove(i)}> Remove </button>
// //       </p>
// //     </div>
// //     </>
// //   )
// // })}
// // </>
// //   )
// // }



// function TodoApp(){
// const [todoitem,setTodoitem]=useState()
// const [todolist,setTodolist]=useState([])
// function submithandler(e){
//   e.preventDefault()
// }

// function inputhandler(e){
// setTodoitem(e.target.value)
// }

// function addtask(){
//   setTodolist((data)=>{
//     const updated= [...todolist,todoitem]
// return updated
//   }
// )
// }
//   return(

//     <>
    
// <form onSubmit={submithandler}>
  
//   <input type="text"  placeholder="enter task" value={todoitem} onChange={inputhandler}/>
//   <button onClick={addtask}>Add</button>
//   </form>    
//     {todolist.map((item,i)=>{
//       return(
//         <>
//         <p key={i}>{item}</p>
        
        
//         </>

//       )
//     })}
    
//     </>
//   )
// }
// export default TodoApp
// function home (){
//   const [arr,setArr]=useState(['item one'])
 
// function Addhandler(){
//   setArr([...arr,<Input />])
// }
//   return(
//     <>
  
//   <Input/>
//   <button onClick={Addhandler}>add task</button>
//   <p>{arr}</p>
//     </>
//   )
// };
// export default home;
export async function getStaticProps(){
const data = await getAll()

return {
  props:{
    blogs:data
  }
}
}

function home({blogs}){
  
  return(
    <div>
   
   {blogs.map(item=>{
    return(
      <div>
        <p key={item.id}>{item.title}</p>
      </div>
    )
   })}
      <h2>Homepage</h2>
    </div>
  )
}
export default home;
