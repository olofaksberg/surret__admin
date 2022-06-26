export interface IInputSelectProps {
    label: string;
    items: Array<string>;
    value?: any;
    reference?: any;
    action: (e: any) => void;
    customStyle?: string
}