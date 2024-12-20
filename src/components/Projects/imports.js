// PROJECTS
import Meltshiny from "../../assets/images/projects/Meltshiny.png";
import Trash_ML from "../../assets/images/projects/Trash.png";
import Budget_Minder from "../../assets/images/projects/savings_goal.png"
import image from "../../assets/images/projects/image.png"
import Finetune from "../../assets/images/projects/Finetune.png"
import Ideaforge from "../../assets/images/projects/Ideaforge.png"

// CERTICIFICATES
import CSScertificate from "../../assets/images/certificate/CSS.png";
import Automation from "../../assets/images/certificate/Automation.png";
import Python from "../../assets/images/certificate/Python.png";
import C from "../../assets/images/certificate/C.png";
import devops from "../../assets/images/certificate/devops.png";
import epam from "../../assets/images/certificate/epam.png";
import globalgrad from "../../assets/images/certificate/globalgrad.png";
import html from "../../assets/images/certificate/html.png";
import js from "../../assets/images/certificate/js.png";
import pythonDs from "../../assets/images/certificate/pythonDs.png";
import react from "../../assets/images/certificate/react.png";
import campus from "../../assets/images/certificate/campus.png";

export { CSScertificate, Automation, Python, C, devops, epam, globalgrad, html, js, pythonDs, react,campus };

const ProjectDetails = [
  {
    image: Meltshiny,
    title: "MeltShiny",
    text: "MeltShiny is a software application designed to automate the analysis and visualization of DNA melting curves, aiding researchers in chemistry, biology, and genetics. The application leverages the powerful tools MeltWin and MeltR to offer an intuitive graphical user interface combined with robust data processing capabilities powered by R. ",
    code: "https://github.com/oss-slu/MeltShiny",
  },
  {
    image: Trash_ML ,
    title: "Trash ML",
    text: "Classifes the trash to different categories like Plastic, Paper and Metal",
    code: "https://github.com/orhuna/trash_ml",
  },
  
  {
    image: Budget_Minder,
    title: "Budget Minder",
    text: "Automate document submission within a school.Budget Minder is a web-based application designed to help users manage and forecast their monthly budgets. Users can input their income and expenses, set savings goals, and track their progress.",
    code: "https://github.com/mrpateljeet/Group_3_Engineers",
  },
  {
    image: Finetune,
    title: "Fine-Tuning EfficientNet for Medical Image Classification",
    code: "https://github.com/nani1606/DLProject",
    text: "The project will be directed towards the development of a robust medical image classifier using the state-of-the-art convolutional neural network architecture known as EfficientNet.",
  },
  {
    image: image,
    title: "Simple TODO App",
    text: "Simple TODO App",
    code: "https://github.com/BollepalliPranitha/SimpleTodoApp",
  },
  {
    image: image,
    title: "TBE",
    text: "A multi-language toolkit for handling TBE (Tabular Data with Metadata Blocks and Enrichment) files. This suite includes libraries in Python, C, Rust, R, JavaScript, and Java, designed for flexible use by both programmers and data analysts.",
    code: "https://github.com/oss-slu/tbe",
  },
 
  {
    image: Ideaforge,
    title: "Idea Forge Board",
    text: "Collaborative White Board",
    code: "https://github.com/BollepalliPranitha/IdeaForgeBoard",
  },
];

export default ProjectDetails;
