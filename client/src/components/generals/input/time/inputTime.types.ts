import { ChangeEvent } from "react";

export interface IInputTimeProps {
    name: string;
    label: string;
    value: string;
    reference?: (el: HTMLInputElement) => void;
    action: (e: ChangeEvent<HTMLInputElement>) => void;
    customStyle?: string
}