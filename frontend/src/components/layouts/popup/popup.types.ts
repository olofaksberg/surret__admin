export interface IPopupProps {
    message: {
        type: number;
        title: string;
        text: string;
    };
    action?: any;
    customStyle?: string;
}