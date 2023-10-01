import { useEffect, useState } from "react";
import Employee from "../../models/employee";
import { useIndexedDB } from "react-indexed-db-hook";
import { STORE_NAME } from "../../configs/db_config";

export default function useEmployees() {
    
    const [employees, setEmployees] = useState<Employee[]>([]);

    const {
        getAll,
        add,
        update,
        deleteRecord,
    } = useIndexedDB(STORE_NAME);

    const [updateCount, setUpdateCount] = useState(0);
    
    useEffect(() => {
        getAll().then((all) => {
            setEmployees(all);
        });
    }, [getAll, updateCount]);

    const updateEmployeeList = () => {
        setUpdateCount(prev => prev + 1);
    }

    const addEmployee = (employee: Partial<Employee>) => {
        add(employee).then(updateEmployeeList);
    }

    const removeEmployee = (id: number) => {
        deleteRecord(id).then(updateEmployeeList);
    }

    const editEmployee = (newEmployee: Employee) => {
        update(newEmployee).then(updateEmployeeList);
    }


    return {
        employees,
        addEmployee,
        removeEmployee,
        editEmployee,
    }
}