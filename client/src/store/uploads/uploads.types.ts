export interface IUploads {
    files: File[];
    push: (file: File) => void;
    delete: (name: string) => void;
    submit: () => void;
}
