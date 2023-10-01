export default interface Employee {
    id: number;
    fullName: string;
    role: string;
    dateFrom?: Date;
    dateTo?: Date;
}