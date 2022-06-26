import { ChangeEvent } from "react";

export interface IInputSelectProps {
    label: string;
    items: string[];
    value?: string;
    reference?: (el: HTMLInputElement) => void;
    action: (e: ChangeEvent<HTMLLIElement>) => void;
    customStyle?: string
}