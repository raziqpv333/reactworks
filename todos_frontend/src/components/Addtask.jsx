import react, {useState} from "react";
import axios from 'axios'

const Addtask=()=>{
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")

    const handlesubmit=(e)=>{
      e.preventDefault()
      axios.post('https://aswanth74.pythonanywhere.com/api/tasks/',{title,description})
      .then(response=>{
        console.log(response.data);
        setTitle('');
        setDescription('');
      })

      .catch (error=>console.log(error));
}

return(
    
      <div className='container'>
      <form onSubmit={handlesubmit}>
        <h2 className="text-info"><u>Add Task</u></h2>
        <div>
          <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <label htmlFor="title">title</label>

        </div>
        <div>
          <textarea name="description" id="" className="form-control" value={description} onChange={(e)=>setDescription (e.target.value)}></textarea>
        </div>
        
           <div className="button">
            <label htmlFor="description">description</label>
            <input type="submit" value="submit" className="btn btn-success mt-3" />
        
        </div>
        </form>
      </div>
    
)
}
export default Addtask