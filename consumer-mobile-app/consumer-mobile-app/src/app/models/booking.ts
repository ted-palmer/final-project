export class Booking {
    public id: number;
    public userId: number = 1;
    public listingId: number;
    public hostId: number;
    public status: string = "pending";
    public dateStart: string;
    public dateEnd: string;
}
