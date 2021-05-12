export interface IUploads {
    files: File[];
    push: (file: File) => void;
    delete: (name: string) => void;
    submit: () => Promise<string[] | null>;
    reset: () => void;
}
