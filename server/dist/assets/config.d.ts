declare const _default: () => {
    port: number;
    pixabay: {
        key: string;
        per_page: number;
        category: string;
        editors_choice: string;
        orientation: string;
        image_type: string;
    };
    db: {
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
        synchronize: boolean;
    };
};
export default _default;
