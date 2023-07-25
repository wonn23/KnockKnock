import 'dotenv/config';
import multer from 'multer';
import multerS3 from 'multer-s3';
import AWS from 'aws-sdk';

const s3 = new AWS.S3({
    region: process.env.AWS_BUCKET_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        acl: 'public-read',
        key: (req, file, cb) => {
            const date = new Date().toISOString().replace(/:/g, '-');
            const fileExtension = file.originalname.split('.').pop();
            const filename = `image-${date}.${fileExtension}`;
            console.log('upload.js에 있는 filename: ', filename);
            cb(null, filename);
        },
    }),
});

export { upload };
