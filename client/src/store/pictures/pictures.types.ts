export default interface IPictures {
    index: number;
    src: string | null;
    setPicture: () => Promise<void>;
}
