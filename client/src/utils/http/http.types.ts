export interface IGET {
    (endpoint: string, signal?: AbortSignal): any
}

export interface IPOST {
    (endpoint: string, data: Record<string, any>, signal?: AbortSignal): any
}