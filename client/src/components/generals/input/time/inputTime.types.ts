export interface IInputTimeProps {
    name: string;
    label: string;
    value: any;
    reference?: any;
    action: (e: any) => void;
    customStyle?: string
}