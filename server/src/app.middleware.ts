import { NestMiddleware, Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
    use(req, res, next) {
        if (req.url.includes('/api')) {
            next();
        } else {
            res.sendFile(join(__dirname, '..', '..', 'client', 'index.html'));
        }
    }
}
