import { useRouter } from "next/router";
import { useTasks } from "../app/store";

function Home() {

  const taskStore = useTasks();
  const router = useRouter();
  
  // Handle data and process
  const handleNewTask = (event: any) => {
    event.preventDefault();
    const id = Math.random().toString();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const status = 'To Do';
    
    taskStore.addTasks({id, title, description,status });
    router.push('./front')

  };

    return (
      <div className="w-full py-10">
        <div className="w-1/2 mx-auto">
          <h1 className="text-xl text-blue-500 font-bold">Create New Task</h1>

          {/* New Task Form*/}
          <form
            onSubmit={handleNewTask}
            className="flex flex-col gap-2 border-2 p-4 mt-6 shadow-lg border-blue-600 rounded-md"
          >
            <input
              type="text"
              name="title"
              className="border border-blue-400 p-2 rounded-md outline-none"
              placeholder="Untitled task"
            />
            <textarea
              name="description"
              className="border border-blue-400 p-2 rounded-md outline-none"
              placeholder="Description"
            ></textarea>
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

