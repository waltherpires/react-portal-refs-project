import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSideBar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NewProject />
    </main>
  );
}

export default App;
