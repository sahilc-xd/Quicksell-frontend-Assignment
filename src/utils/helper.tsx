// import backlog from "../../public/backlog"
// First let's create an interface for our SVG components
interface SVGIconProps {
  size?: number;
  color?: string;
}

// Helper function to create SVG component paths


const getSVGPath = (name: string) => `/${name}.svg`;

export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "No priority":
            return <img src={getSVGPath('No-priority')} width={16} height={16} alt="No priority" />;
        case "Low":
            return <img src={getSVGPath('Img - Low Priority')} width={16} height={16} alt="Low priority" />;
        case "Medium":
            return <img src={getSVGPath('Img - Medium Priority')} width={16} height={16} alt="Medium priority" />;
        case "High":
            return <img src={getSVGPath('Img - High Priority')} width={16} height={16} alt="High priority" />;
        case "Urgent":
            return <img src={getSVGPath('SVG - Urgent Priority colour')} width={16} height={16} alt="Urgent priority" />;
        default:
            return <img src={getSVGPath('SVG - Urgent Priority grey')} width={16} height={16} alt="Default priority" />;
    }
}

export const getStatusIcon = (status: string) => {
    switch (status) {
        case "Backlog":
            return <img src={getSVGPath('Backlog')} width={16} height={16} alt="Backlog status" />;
        case "Todo":
            return <img src={getSVGPath('To-do')} width={16} height={16} alt="Todo status" />;
        case "In progress":
            return <img src={getSVGPath('in-progress')} width={16} height={16} alt="In progress status" />;
        case "Done":
            return <img src={getSVGPath('Done')} width={16} height={16} alt="Done status" />;
        case "Canceled":
            return <img src={getSVGPath('Cancelled')} width={16} height={16} alt="Cancelled status" />;
        default:
            return <img src={getSVGPath('Cancelled')} width={16} height={16} alt="Default status" />;
    }
}