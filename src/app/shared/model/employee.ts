export interface Employee {
    employeeId: number;
    jobTitleId: number;
    employeeFirstName: string;
    username: string;
    password: string;
    supervisor: Employee;
    timesheetApprover: Employee;
    isAdmin: boolean;
    isProjectManager: boolean;
    isHumanResources: boolean;
}
