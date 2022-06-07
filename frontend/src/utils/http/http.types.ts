
// export interface IGET {
//     endpoint: string;
//     signal?: AbortSignal;
// }

export interface IGET {
    (endpoint: string, signal?: AbortSignal): any
}

// export interface IPOST {
//     endpoint: string;
//     signal?: AbortSignal;
//     data: Record<string, any>;
// }

export interface IPOST {
    (endpoint: string, data: Record<string, any>, signal?: AbortSignal): any
}