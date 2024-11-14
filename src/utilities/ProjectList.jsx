import jobAppTrackerImage from "../assets/Job Application Tracker.png";
import sortingVisualizer from "../assets/Sorting Visualizer.png";
import todoList from "../assets/To Do List.jpg";
import { FaGithub } from "react-icons/fa";
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

export const projectList = [
  {
    name: "Job Application Tracker",
    image: jobAppTrackerImage,
    description:
      "The Job Application Tracker helps users manage their job applications with secure Firebase authentication, real-time updates, and application status tracking. It features a responsive design, search and filter options, and the ability to add, update, and delete applications.",
    techsUsed: {
      techNames: ["React", "Tailwind", "Firebase"],
      techIcons: [
        <FaReact color="#61DAFB" size={18} key="react-icon" />,
        <RiTailwindCssFill color="#38B2AC" size={18} key="tailwind-icon" />,
        <IoLogoFirebase color="#FFCB2B" size={18} key="firebase-icon" />,
      ],
    },
    github: {
      icon: <FaGithub color="#fffff" size={18} />,
      link: "https://github.com/angelosoreta123/Job-Application-Tracker",
    },
    openLink: {
      icon: <FaExternalLinkAlt color="#fffff" size={18} />,
      link: "https://job-application-tracker-3f0b3.web.app/",
    },
  },
  {
    name: "Sorting Visualizer",
    image: sortingVisualizer,
    description:
      "A simple website to visualize various sorting algorithms, such as bubble sort, selection sort, insertion sort, quick sort, and merge sort, in real-time, enhancing understanding of complex data structures.",
    techsUsed: {
      techNames: ["HTML", "CSS", "Javascript"],
      techIcons: [
        <FaHtml5 color="#E34F26" key="html-icon" size={18} />,
        <FaCss3 color="#1572B6" key="css-icon" size={18} />,
        <FaJs color="orange" size={18} key="javascript-icon" />,
      ],
    },
    github: {
      icon: <FaGithub color="#fffff" size={18} />,
      link: "https://github.com/angelosoreta123/Sorting-Visualizer",
    },
    openLink: {
      icon: <FaExternalLinkAlt color="#fffff" size={18} />,
    },
  },
  {
    name: "To Do List",
    image: todoList,
    description:
      "A To-Do List App that allows users to manage tasks by adding, completing, and deleting them. It features drag-and-drop functionality, a dark/light mode toggle, and saves data using local storage for persistence.",
    techsUsed: {
      techNames: ["React", "Tailwind"],
      techIcons: [
        <FaReact color="#61DAFB" size={18} key="react-icon" />,
        <RiTailwindCssFill color="#38B2AC" size={18} key="tailwind-icon" />,
      ],
    },
    github: {
      icon: <FaGithub color="#fffff" size={18} />,
      link: "https://github.com/angelosoreta123/To-Do-List",
    },
    openLink: {
      icon: <FaExternalLinkAlt color="#fffff" size={18} />,
      link: "https://to-do-list-aef1f.web.app/",
    },
  },
];
