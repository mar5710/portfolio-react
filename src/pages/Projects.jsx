import Project from "../components/project/Project";
import { projects } from "../helpers/projectsList";

const Projects = () => {
   return ( 
      <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                {projects.map((item) => {
                    return <Project key={item.id} title={item.title} img={item.img} index={item.id} />
                })}
            </ul>
        </div>
    </main>
    );
}
 
export default Projects
