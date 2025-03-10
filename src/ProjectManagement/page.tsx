

type Props = {}

export default function ProjectManagement({}: Props) {
  return (
    <div className="flex flex-col justify-start px-6 md:px-12 lg:px-[10%] h-[80vh] gap-6 py-6">
      <h1 className="text-[3rem] font-bold">Project Management Graph Tool :</h1>
      <div className="">
        <img src="./images/projectM.png" alt="project management" className="rounded-lg"/>
      </div>

      <h2 className="text-[2.5rem] font-medium">Project Overview :</h2>
      <p className="text-xl text-text-secondary">This project is a project management and visualization tool designed to help users create, organize, and manage tasks within a project. 
        The tool leverages a visual graph-based representation to display task dependencies.
      </p>
      <h2 className="text-[2.5rem] font-medium">Technology Stack :</h2>
      
      <h2 className="text-[2.5rem] font-medium">The Problem :</h2>
      <div>
        <p className="text-xl text-text-secondary">Project management tools often fail to clearly represent task dependencies, making it difficult to:</p>
        <ul className="list-disc list-inside mt-2">
            <li className="text-xl text-text-secondary">Determine task execution order efficiently</li>
            <li className="text-xl text-text-secondary">Visualize complex projects in an intuitive way</li>
        </ul>
      </div>
    </div>
  )
}