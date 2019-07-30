export class Util {

    // To format date 
    public formatDate(date: number | string): string {
        let loclDate = new Date(date),
            month = '' + (loclDate.getMonth() + 1),
            day = '' + loclDate.getDate(),
            year = loclDate.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    // To get last n'th date
    public nthDate(days: number): string {
        let date = new Date(),
        last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
        return this.formatDate(last.getTime());
    }
}