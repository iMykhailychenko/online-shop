export interface IPicture {
    comments: number;
    downloads: number;
    favorites: number;
    id: number;
    imageHeight: number;
    imageSize: number;
    imageWidth: number;
    largeImageURL: string;
    likes: number;
    pageURL: string;
    previewHeight: number;
    previewURL: string;
    previewWidth: number;
    tags: string;
    type: string;
    user: string;
    userImageURL: string;
    user_id: number;
    views: number;
    webformatHeight: number;
    webformatURL: string;
    webformatWidth: number;
}

export interface IPictures {
    total: number;
    totalHits: number;
    hits: IPicture[];
}
