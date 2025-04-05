
export class GregorianCalendar {
    private date: Date;
    private static NUMBER_OF_HOURS_PER_DAY = 24;

    constructor(date?: Date | string | number) {
        this.date = date ? new Date(date) : new Date();
    }

    static now(): Date {
        return new Date();
    }

    toDate(): Date {
        return this.date;
    }

    toISOString(): string {
        return this.date.toISOString();
    }

    format(
        locale: string = 'fr-FR',
        options?: Intl.DateTimeFormatOptions,
    ): string {
        return this.date.toLocaleString(locale, options);
    }

    addDays(days: number): Date {
        const newDate = new Date(this.date);
        newDate.setDate(newDate.getDate() + days);
        return new Date(newDate);
    }

    subtractDays(days: number): Date {
        return this.addDays(-days);
    }

    getTime(): number {
        return this.date.getTime();
    }

    getYear(): number {
        return this.date.getFullYear();
    }

    getMonth(): number {
        return this.date.getMonth() + 1;
    }

    getDay(): number {
        return this.date.getDate();
    }

    isBefore(other: Date): boolean {
        return this.date.getTime() < other.getTime();
    }

    isAfter(other: Date): boolean {
        return this.date.getTime() > other.getTime();
    }

    plusMinutes(minutes: number) {
        const newDate = new Date(this.date);
        newDate.setMinutes(newDate.getMinutes() + minutes);
        return new Date(newDate);
    }

    plusHours(hours: number) {
        const newDate = new Date(this.date);
        newDate.setHours(hours);
        return new Date(newDate);
    }

    plusDays(days: number) {
        const newDate = new Date(this.date);
        newDate.setHours(days * GregorianCalendar.NUMBER_OF_HOURS_PER_DAY);
        return new Date(newDate);
    }
}