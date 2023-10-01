import { useEffect, useState } from "react";
import Employee from "../../models/employee";
import { STORE_NAME } from "../../configs/db_config";
import { useIndexedDB } from "react-indexed-db-hook";
import { RoleOptions } from "./consts";

const EMPTY_EMPLOYEE: Partial<Employee> = {
    fullName: "",
    role: RoleOptions[0],
    dateFrom: new Date(),
    dateTo: undefined,
};

function useEmployee(id: string | number) {
    const [employee, setEmployee] = useState<Partial<Employee>>(EMPTY_EMPLOYEE);
    const [errors, setErrors] = useState<Partial<Employee>>({});

    const {
        getByID,
        update,
        add,
    } = useIndexedDB(STORE_NAME);

    useEffect(() => {
        getByID(Number(id)).then(emp => setEmployee(emp ?? EMPTY_EMPLOYEE));
    }, [id, getByID]);

    const updateField = (data: Partial<Employee>) => {
        const emp = {
            ...employee,
            ...data,
        };
        setEmployee(emp);
        setErrors({});
    }

    const checkErrors = () => {
        const errs: Partial<Employee> = {};
        if (!employee?.fullName) {
            errs.fullName = "Name is required";
        }
        if(!employee?.role || employee?.role === RoleOptions[0]) {
            errs.role = "Role is required";
        }
        setErrors(errs);
        return Object.keys(errs).length !== 0;
    }

    const saveEmployee = (callback: VoidFunction | undefined) => {
        if (checkErrors()) {
            return;
        }

        const safeCb = () => {
            if (callback) {
                callback();
            }
        };

        if (!employee?.id) {
            add(employee).then(safeCb);
        } else {
            update(employee).then(safeCb);
        }
    }

    return {
        employee,
        updateField,
        saveEmployee,
        errors,
    }
}

export default useEmployee;