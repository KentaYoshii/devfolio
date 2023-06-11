import { useParams } from "react-router-dom";

const ProjectDetail = () => {
    const { project } = useParams();
    return (
        <div>{project}</div>
    )
};

export default ProjectDetail