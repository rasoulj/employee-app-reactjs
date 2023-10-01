import { Link } from "react-router-dom";
import Employee from "../../models/employee";
import { formatDateMain } from "../../utils/date";

import deleteIcon from "../../assets/icons/delete.svg";

import ItemDragable from "../../components/swipe-list/ItemDragable"

interface EmployeeViewProps {
    employee: Employee;
}

function InnerEmployeeView({ employee }: EmployeeViewProps) {
    const { fullName, dateFrom, dateTo, role, id } = employee;
    const dateString = !dateTo
        ? `From ${formatDateMain(dateFrom)}`
        : `${formatDateMain(dateFrom)} - ${formatDateMain(dateTo)}`;

    return (
        <Link to={`/employee/${id}`}>
            <div className="h-24 p-4 bg-white flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-800 text-base font-medium leading-tight">
                    {fullName}
                </div>
                <div className="text-neutral-400 text-sm font-normal leading-tight">
                    {role}
                </div>
                <div className="justify-start items-start gap-2 inline-flex">
                    <div className="text-neutral-400 text-xs font-normal leading-tight">
                        {dateString}
                    </div>
                </div>
            </div>
        </Link>
    );
}

function ActionView({onClick}: {onClick: () => void}) {
    return <div className="flex flex-1 justify-center text-white  text-sm font-medium">
        <button onClick={onClick}  className="align-middle self-center pt-10">
            <img className="ml-6" src={deleteIcon} />
            <span style={{color: "red"}}>DDDDDDD</span>
        </button>
    </div>
}

export default function EmployeeView({ employee, onDelete }: EmployeeViewProps & {onDelete: VoidFunction}) {
    return <ItemDragable action={<ActionView onClick={onDelete} />}>
        <InnerEmployeeView employee={employee} />
    </ItemDragable>
}
