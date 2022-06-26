import { ChangeEvent } from "react";

export interface IInputTextareaProps {
    name: string;
    label: string;
    value?: string;
    reference?: (el: HTMLTextAreaElement) => void;
    action: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    customStyle?: string
}