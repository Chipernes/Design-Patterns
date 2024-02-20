    export default abstract class Subscription {
    protected monthlyFee: number;
    protected minimumPeriod: number;
    protected channels: string[];

    protected constructor(monthlyFee: number, minimumPeriod: number, channels: string[]) {
        this.monthlyFee = monthlyFee;
        this.minimumPeriod = minimumPeriod;
        this.channels = channels;
    }
}