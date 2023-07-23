import { useTasks } from "../app/store";

function Home() {

  const taskStore = useTasks();
  
  // Handle data and process
  const handleNewTask = (event: any) => {
    event.preventDefault();
    const id = Math.random().toString();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const status = 0;
    
    taskStore.addTasks({id, title, description,status });

    // Set in localstorage
    // localStorage.setItem("task_list", JSON.stringify([{title, description}]));
    // console.log(title,description)
  };

    return(
        <div>
          <h1 className="text-red-500 font-bold">task management project started</h1>


          {/* New Task Form*/}
           <form onSubmit={handleNewTask} className="flex flex-col gap-2 border-2 p-2">
              <input type="text" name="title" className="border border-blue-400" placeholder="Untitled task"/>
              <textarea name="description" className="border border-blue-400" placeholder="Description"></textarea>
              <input type="submit" value="Submit" className="w-20 p-2 rounded-md text-white bg-blue-500 hover:bg-blue-600" />
           </form>
        </div>
    )
};


export default Home;

