import { statusCode } from '../utils/statusCode.js';

const imageController = {
    getImageUrl: async (req, res, next) => {
        try {
            console.log(req.file.location);
            const imageUrl = req.file.location;

            statusCode.setResponseCode200(res);
            return res.send(imageUrl);
        } catch (error) {
            next(error);
        }
    },
};

export { imageController };
