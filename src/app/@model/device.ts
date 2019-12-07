export class Device {
    partNo: string;
    prodTarget: string;
    machineId: string;
    name: string;
    currentOperationStatus: string;
    currentPartsCount: string;
    emgStop: string;
    description:  {
        manuafacturer: string;
        model: string;
        serial: string;
        value: string;
    }
}