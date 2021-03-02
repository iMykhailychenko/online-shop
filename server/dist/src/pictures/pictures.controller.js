"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PicturesController = void 0;
const common_1 = require("@nestjs/common");
const pictures_service_1 = require("./pictures.service");
let PicturesController = class PicturesController {
    constructor(picturesService) {
        this.picturesService = picturesService;
    }
    async findAll(index) {
        return await this.picturesService.getPictures(index);
    }
};
__decorate([
    common_1.Get('/:index'),
    __param(0, common_1.Param('index', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PicturesController.prototype, "findAll", null);
PicturesController = __decorate([
    common_1.Controller('pictures'),
    __metadata("design:paramtypes", [pictures_service_1.PicturesService])
], PicturesController);
exports.PicturesController = PicturesController;
//# sourceMappingURL=pictures.controller.js.map