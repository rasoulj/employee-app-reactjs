import Page from "../../components/Page";
import accountIcon from "../../assets/icons/account.svg"
import roleIcon from "../../assets/icons/role.svg"
import arrowRightIcon from "../../assets/icons/arrow-right.svg"
import InputBox from "./InputBox";
import DateButton from "./DateButton";
import { RoleOptions, classNames } from "./consts";
import useEmployee from "./useEmployee";
import { useNavigate, useParams } from "react-router-dom";
import { lessThan } from "../../utils/date";



function EmployeeFooter({onSave, onCancel}: {onSave: () => void, onCancel: () => void}) {
    return <div className="flex flex-1">
        <div className="flex-1"></div>
        <div className="flex flex-1 h-16 justify-around align-bottom">

            <button onClick={onCancel} className="w-24 h-10 rounded-md bg-sky-50 ml-8 justify-center self-center" >
                <div className="text-center text-sky-500 text-sm font-medium">Cancel</div>
            </button>
            <button onClick={onSave} className="w-24 h-10 rounded-md bg-sky-500 justify-center  self-center" >
                <div className="text-center text-white text-sm font-medium">Save</div>
                
            </button>
        </div>
    </div>
}

function EmployeePage() {
    const { id } = useParams();
    const {
        updateField,
        employee,
        saveEmployee,
        errors,
    } = useEmployee(id ?? 0);

    const navigate = useNavigate();


    return (
        <Page
            footer={<EmployeeFooter
                onCancel={() => navigate(-1)}
                onSave={() => saveEmployee(() => navigate(-1))}
            />}
            title="Add Employee Details"
            className="p-4"
        >

            <InputBox icon={accountIcon} errorMessage={errors?.fullName}>
                <input
                    value={employee?.fullName}
                    onChange={e => updateField({fullName: e.target.value })}
                    type="text"
                    id="input-group-1"
                    className={classNames.input}
                    placeholder="Employee name"
                />
                
            </InputBox>

            <InputBox icon={roleIcon} errorMessage={errors?.role}>
                <select
                    value={employee?.role}
                    onChange={e => updateField({role: e.target.value })}
                    id="role"
                    className={classNames.input}
                >
                    {RoleOptions.map(role => <option selected={role === "Select role"} value={role}>{role}</option>)}
                </select>
            </InputBox>

            <div className="flex flex-row w-full h-10">
                <DateButton
                    fromDate={undefined}
                    value={employee?.dateFrom}
                    onChange={date => {
                        if (date && employee?.dateTo && !lessThan(date, employee?.dateTo)) {
                            updateField({ dateTo: date, dateFrom: date });
                        } else {
                            updateField({ dateFrom: date });
                        }
                    }}
                />
                <div className="flex w-10 justify-center">
                    <img src={arrowRightIcon} className={classNames.icon} />
                </div>
                <DateButton
                    disabled={!employee?.dateFrom}
                    fromDate={employee?.dateFrom ?? new Date()}
                    value={employee?.dateTo}
                    onChange={date => updateField({dateTo: date})}
                />

            </div>

        </Page>
    )
}

export default EmployeePage