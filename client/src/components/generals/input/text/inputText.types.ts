export interface IInputTextProps {
    name: string;
    label: string;
    value?: any;
    reference?: any;
    action: (e: any) => void;
    customStyle?: string
}