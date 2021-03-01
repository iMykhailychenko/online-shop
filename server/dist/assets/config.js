"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: +process.env.PORT || 3001,
    pixabay: {
        key: process.env.PIXABAY,
        per_page: 60,
        category: 'nature',
        editors_choice: 'true',
        orientation: 'horizontal',
        image_type: 'photo',
    },
});
//# sourceMappingURL=config.js.map