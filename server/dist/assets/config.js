"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: +process.env.PORT || 3001,
    pixabay: {
        key: process.env.PIXABAY,
        per_page: 10,
        category: 'nature',
        editors_choice: 'true',
        orientation: 'horizontal',
        image_type: 'photo',
    },
    db: {
        host: process.env.DB_HOST,
        port: +(process.env.DB_PORT || 5432),
        username: process.env.DB_USER_NAME,
        password: process.env.DB_USER_PASSWORD,
        database: process.env.DB_NAME,
        synchronize: true,
    },
});
//# sourceMappingURL=config.js.map