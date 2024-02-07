import Identity from "../../documents/identity.ts";
import DriverLicense from "../../documents/driverLicense.ts";
import StudentID from "../../documents/studentID.ts";

interface AllDocuments {
    [key: string]: Identity | DriverLicense | StudentID;
}
export default class Container {
    private readonly allDocuments: AllDocuments = {};

    constructor() {
        const firstname = 'Nikita';
        const lastname = 'Motytskyi';
        const birthDate = new Date('2004-09-29');
        const identityNumber = '00556633323';
        const identityPhoto = 'identity';
        const licenseNumber = 'BX1456363';
        const categories = ['A', 'B'];
        const driverPhoto = 'driver';
        const studentIDNumber = 'BX1456363';
        const studentIDValidTo = new Date('2026-06-30');
        const studentIDStudyType = 'Full-time';
        const studentIDPhoto = 'student';

        const identity = new Identity('ID', identityNumber, firstname, lastname, birthDate, identityPhoto);
        const driverLicense = new DriverLicense('DriverLicense', licenseNumber, firstname, lastname, birthDate, driverPhoto, categories);
        const studentId = new StudentID('StudentID', studentIDNumber, firstname, lastname, birthDate, studentIDPhoto, studentIDValidTo, studentIDStudyType);

        this.allDocuments = {
            'ID': identity,
            'Licence': driverLicense,
            'StudentID': studentId,
        }
    }

    public initializeAllDocuments(container: HTMLElement) {
        for (const item in this.allDocuments) {
            this.allDocuments[item].initialize(container);
        }
    }

    public changeDocumentsPosition(order: string[], container: HTMLElement) {
        order.forEach((item) => {
            this.allDocuments[item].initialize(container);
        });
    }
}