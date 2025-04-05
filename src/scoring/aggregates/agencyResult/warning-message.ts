export class WarningMessage {
    private readonly key: string;
    private readonly messageText: string;
    constructor(key: string, messageText: string) {
        this.key = key;
        this.messageText = messageText;
    }

    getKey(): string {
        return this.key;
    }

    getMessageText() {
        return this.messageText;
    }
}