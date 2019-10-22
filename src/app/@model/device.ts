export class Device {
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