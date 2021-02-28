"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PicturesService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const config_1 = require("../../assets/config");
let PicturesService = class PicturesService {
    constructor() {
        this.params = config_1.default().pixabay;
        this.data = { total: 0, totalHits: 0, hits: [] };
        this.fetchPictures = (index) => {
            const page = Math.floor(index / this.params.per_page) + 1;
            const params = Object.assign(Object.assign({}, this.params), { page });
            return axios_1.default.get('https://pixabay.com/api/', { params });
        };
        this.getPictures = async (index) => {
            var _a, _b, _c, _d, _e, _f;
            if (index >= ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.hits) === null || _b === void 0 ? void 0 : _b.length) && ((_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.hits) === null || _d === void 0 ? void 0 : _d.length)) {
                const { data } = await this.fetchPictures(index);
                this.data.hits = [...this.data.hits, ...data.hits];
            }
            if (!((_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.hits) === null || _f === void 0 ? void 0 : _f.length)) {
                const { data } = await this.fetchPictures(index);
                this.data = data;
            }
            return this.data.hits[index].largeImageURL;
        };
    }
};
PicturesService = __decorate([
    common_1.Injectable()
], PicturesService);
exports.PicturesService = PicturesService;
//# sourceMappingURL=pictures.service.js.map