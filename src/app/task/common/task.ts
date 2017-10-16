export class Task {
    constructor(
        public _id: string,
        public name: string,
        public date: string,
        public goal: string,
        public deliverable: string[],
        public startTime: string,
        public endTime: string,
        public process: string[],
        public userId: string
    ) { }
}
