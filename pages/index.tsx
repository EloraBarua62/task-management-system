// Imported files
import { useRouter } from "next/router";
import { useTasks } from "../app/store";


// Main function: Home
function Home() {

  // State manager
  const taskStore = useTasks();

  // Page router
  const router = useRouter();
  
  
  // Handle data and process
  const handleNewTask = (event: any) => {
    event.preventDefault();

    // input fields: id, title, description, status
    const id = Math.random().toString();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const status = 'To Do';
    
    
    // state management function called 
    taskStore.addTasks({id, title, description,status });
    
    // redirect to all task page
    router.push('./front')
  };

    return (
      <div className="w-full py-10">
        <div className="w-1/2 mx-auto">

          {/* Task heading */}
          <h1 className="text-xl text-blue-500 font-bold">Create New Task</h1>

          
          {/* New Task Form*/}
          <form
            onSubmit={handleNewTask}
            className="flex flex-col gap-2 border-2 p-4 mt-6 shadow-lg border-blue-600 rounded-md"
          >

            {/* input field: title */}
            <input
              type="text"
              name="title"
              className="border border-blue-400 p-2 rounded-md outline-none"
              placeholder="Untitled task"
            />

            {/* input field: description */}
            <textarea
              name="description"
              className="border border-blue-400 p-2 rounded-md outline-none"
              placeholder="Description"
            ></textarea>

            {/* submit button */}
            <input
              type="submit"
              value="Submit"
              className="w-20 p-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            />
          </form>
        </div>
      </div>
    );
};


export default Home;

