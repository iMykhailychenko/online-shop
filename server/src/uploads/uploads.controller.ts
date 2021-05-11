import { Controller, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';

@Controller('uploads')
export class UploadsController {
    @Post('')
    @UseInterceptors(
        FilesInterceptor('files', 20, {
            storage: diskStorage({
                destination: join(__dirname, '..', '..', '..', 'uploads'),
                filename(req, file, cb) {
                    cb(null, `IMG_${Date.now()}_${file.originalname}`);
                },
            }),
        }),
    )
    uploadFile(@UploadedFiles() files: Express.Multer.File[]): string[] {
        return files.map(file => file.filename);
    }
}
