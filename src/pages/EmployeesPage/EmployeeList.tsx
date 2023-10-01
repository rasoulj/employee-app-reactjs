import NoData from '../../components/NoData';
import useEmployees from '../../hooks/useEmployees'
import EmployeeView from './EmployeeView';
import Employee from "../../models/employee";
import "../../components/swipe-list/swipe-list.css";
import { useState } from 'react';
function SubList({ list, title, onDelete }: { list: Employee[], title: string, onDelete: (emp: Employee) => void }) {
    if (list.length === 0) return undefined;
    return (
        <div>
            <div className="w-full bg-gray-100 h-14 p-4 items-center gap-2 inline-flex">
                <div className=" text-sky-500 text-base font-medium leading-normal">{title}</div>
            </div>
            <ul className="swipe-list">
                {list.map(employee => <EmployeeView
                    onDelete={() => onDelete(employee)}
                    key={employee.id}
                    employee={employee}
                />)}
            </ul>
        </div>
    )
    
}

function EmployeeList() {
    const { employees, removeEmployee, addEmployee } = useEmployees();

    const [deletedEmployee, setDeletedEmployee] = useState<Employee | undefined>();

    const [showUndo, setShowUndo] = useState(false);

    const onDelete = (emp: Employee) => {
        setDeletedEmployee({ ...emp });
        removeEmployee(emp.id);
        setShowUndo(true);
        setTimeout(() => {
            setShowUndo(false);
            setDeletedEmployee(undefined);
        }, 4000)
    }

    const onUndo = () => {
        if (deletedEmployee) {
            addEmployee(deletedEmployee);
            setShowUndo(false);
            setDeletedEmployee(undefined);
        }
    }

    // if (employees.length === 0) return <NoData />

    const currentList = employees.filter(employee => !employee.dateTo);
    const pastList = employees.filter(employee => employee.dateTo);

    return <>

        {employees.length === 0 ? <NoData /> : <>
            <SubList
                onDelete={onDelete}
                title='Current employees'
                list={currentList}
            />

            <SubList
                onDelete={onDelete}
                title='Past Employees'
                list={pastList}
            />

            <div className="text-neutral-400 p-4 text-base font-normal leading-tight">Swipe left to delete</div>
        </>}
        {showUndo && <div className='fixed bottom-0 left-0 w-full md:w-1/2 flex justify-between bg-black text-white p-2 text-sm z-50'>
            <div>
                Employee has been deleted successfully.
            </div>
            <button onClick={onUndo} className="text-sky-500 text-base font-normal leading-tight">Undo</button>
        </div>}
    </>
}

export default EmployeeList;
