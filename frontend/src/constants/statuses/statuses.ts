interface IStatuses {
    [key: string]: number;
}

export const statuses: IStatuses = {
    IDLE: 1,
    LOADING: 2,
    SUCCEEDED: 3,
    FAILED: 4,
    NOTFOUND: 5,
};

