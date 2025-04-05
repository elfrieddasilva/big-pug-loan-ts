export class AgencyMessage {
     key!: string;
     message!: string;
    constructor(key?: string, message?: string) {
        if (key) {
            this.key = key;
        }

        if (message) {
            this.message = message;
        }
    }
}