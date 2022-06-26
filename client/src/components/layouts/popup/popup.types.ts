export interface IPopupProps {
    message: {
        page?: string,
        type: number;
        title: string;
        text: string;
    };
    action?: any;
    customStyle?: string;
}