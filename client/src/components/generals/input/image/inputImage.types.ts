export interface IInputImageProps {
    text: string;
    imageSrc: any;
    reference?: (el: HTMLInputElement) => void;
    action: (ev: any, newFile: any) => void;
    customStyle?: string
}