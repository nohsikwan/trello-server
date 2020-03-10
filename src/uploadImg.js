import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import './env';
import { prisma } from '../generated/prisma-client';

/////////////////// multer로 img 업로드 /////////////////
const s3 = new aws.S3({
	accessKeyId: process.env.AWS_KEY,
	secretAccessKey: process.env.AWS_SECRET,
	region: 'ap-northeast-2'
});
const upload = multer({
	storage: multerS3({
		s3,
		acl: 'public-read',
		bucket: 'serendipity-uploads',
		metadata: function(req, file, cb) {
			cb(null, { fieldName: file.fieldname });
		},
		key: function(req, file, cb) {
			cb(null, Date.now().toString());
		}
	})
});
export const uploadMiddleware = upload.fields([{ name: 'profileImg' }]);

export const uploadController = async (req, res) => {
	const { profileImg } = req.files;
	const { email } = req.body;
	const profileImgLocation = profileImg[0].location;

	try {
		await prisma.updateUser({
			where: {
				email
			},
			data: {
				profileImg: profileImgLocation
			}
		});

		res.status(200).json({
			profileImgLocation
		});
	} catch (error) {
		console.log(error);
	}
};
