export default () => ({
    port: parseInt(process.env.PORT, 10) || 3001,
    pixabay: {
        key: process.env.PIXABAY,
        per_page: 60,
        category: 'nature',
        editors_choice: 'true',
        orientation: 'horizontal',
        image_type: 'photo',
    },
});
