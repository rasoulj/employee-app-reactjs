import { Link } from 'react-router-dom';
import plusIcon from "../../assets/icons/plus.svg"


export default function AddEmployeeButton() {
    return <Link to="/employee/-1" title="Add new employee"
        className="fixed z-50 bottom-10 right-4 md:right-[54%] bg-sky-500 w-12 h-12 rounded-lg drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300">
        <img src={plusIcon} className="text-white" />

    </Link>   
}