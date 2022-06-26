export interface IInputImageProps {
    text: string;
    imageSrc: any;
    reference?: any;
    action: (ev: any, newFile: any) => void;
    customStyle?: string
}