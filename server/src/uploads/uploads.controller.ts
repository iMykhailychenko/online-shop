import { Controller, Get, Param, Post, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
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
                    cb(null, `IMG_${Date.now()}_${file.originalname.slice(0, 20)}`);
                },
            }),
        }),
    )
    uploadFile(@UploadedFiles() files: Express.Multer.File[]): string[] {
        return files.map(file => `/api/uploads/${file.filename}`);
    }

    @Get(':fileId')
    async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
        res.sendFile(fileId, { root: 'uploads' });
    }
}
