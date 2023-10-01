import Page from "../../components/Page";
import AddEmployeeButton from "./AddEmployeeButton";
import EmployeeList from "./EmployeeList";

function EmployeesPage() {
    return <Page title="Employee List">
        <EmployeeList />
        <AddEmployeeButton />
    </Page>
}

export default EmployeesPage;