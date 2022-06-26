import { ChangeEvent } from "react";

export interface IInputNumberProps {
    name: string;
    label: string;
    value?: number;
    reference?: (el: HTMLInputElement) => void;
    action: (e: ChangeEvent<HTMLInputElement>) => void;
    customStyle?: string
}