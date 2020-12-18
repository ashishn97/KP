import { BaseDTO } from './BaseDTO';

export class RequestResponse<T extends BaseDTO> {
    public statusCode: number;
    public result: T;
    public error: string;
    constructor(data) {
        this.statusCode = data.statusCode;
        this.result = data.result;
        this.error = data.error;
    }
}
