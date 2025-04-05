import { randomUUID } from "crypto";

export class UUID {
    static randomUUID(): string {
        return randomUUID();
    }
}