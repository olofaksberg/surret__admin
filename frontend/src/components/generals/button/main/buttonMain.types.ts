export interface IButtonMainProps {
    buttonType: {
        color: string;
        iconClass: string;
    };
    text: string;
    action: () => void;
    customStyle?: string;
};
