import { PostModel } from '../db/models/postModel.js';
import { ParticipantModel } from '../db/models/ParticipantModel.js';
import { ConflictError, InternalServerError, NotFoundError, UnauthorizedError } from '../middlewares/errorMiddleware.js';

const participantService = {
    participatePost: async ({ userId, postId }) => {
        try {
            const post = await PostModel.getPostById(postId);
            if (!post) {
                throw new NotFoundError('해당 Id의 게시글을 찾을 수 없습니다.');
            }

            if (post.user_id === userId) {
                throw new ConflictError('게시글의 작성자는 참가 신청을 할 수 없습니다.');
            }

            const count = await ParticipantModel.countParticipationByUserId({ userId, postId });
            if (count) {
                const participation = await ParticipantModel.getParticipationIdById({ userId, postId });
                const participantId = participation.participant_id;

                const canceled = participation.canceled;
                const canceledValue = canceled ? 0 : 1;

                if (!canceled) {
                    throw new ConflictError('이미 참가 신청을 보낸 모임입니다.');
                } else {
                    await ParticipantModel.update({ participantId, updateField: 'canceled', newValue: canceledValue });
                }

                const status = participation.status;

                if (status !== 'pending') {
                    throw new ConflictError('이미 수락되거나 거절된 모임입니다.');
                }
            } else {
                await ParticipantModel.participatePost({ userId, postId });
            }

            return { message: '모임 참가 신청에 성공했습니다.' };
        } catch (error) {
            if (error instanceof NotFoundError || error instanceof ConflictError) {
                throw error;
            } else {
                throw new InternalServerError('모임 참가 신청에 실패했습니다.');
            }
        }
    },
    participateCancel: async ({ userId, postId }) => {
        try {
            const participation = await ParticipantModel.getParticipationIdById({ userId, postId });
            if (!participation) {
                throw new NotFoundError('해당 id의 참가 신청 정보를 찾을 수 없습니다.');
            }
            const participantId = participation.participant_id;

            const canceled = participation.canceled;
            const canceledValue = canceled ? 0 : 1;

            if (canceled) {
                throw new ConflictError('이미 취소된 신청 정보입니다.');
            } else {
                await ParticipantModel.update({ participantId, updateField: 'canceled', newValue: canceledValue });
            }

            const status = participation.status;

            if (status !== 'pending') {
                throw new ConflictError('이미 수락되거나 거절된 모임입니다.');
            }

            return { message: '신청 취소를 성공했습니다.' };
        } catch (error) {
            if (error instanceof NotFoundError || error instanceof ConflictError) {
                throw error;
            } else {
                throw new InternalServerError('신청 취소에 실패했습니다.');
            }
        }
    },
    getParticipants: async ({ userId, postId }) => {
        try {
            const post = await PostModel.getPostById(postId);
            if (!post) {
                throw new NotFoundError('해당 Id의 게시글을 찾을 수 없습니다.');
            }
            if (post.user_id !== userId) {
                throw new ConflictError('참가자 리스트 조회 권한이 없습니다.');
            }

            const { total, participants } = await ParticipantModel.getParticipants(postId);
            return { message: '참가자 리스트 조회를 성공했습니다.', total, participants };
        } catch (error) {
            if (error instanceof NotFoundError || error instanceof ConflictError) {
                throw error;
            } else {
                throw new InternalServerError('참가자 리스트 불러오기에 실패했습니다.');
            }
        }
    },
    allow: async ({ postId, participantId }) => {
        try {
            const post = await PostModel.getPostById(postId);
            if (!post) {
                throw new NotFoundError('해당 Id의 게시글을 찾을 수 없습니다.');
            }

            const participation = await ParticipantModel.getParticipationById(participantId);

            if (!participation) {
                throw new NotFoundError('해당 id의 참가 신청 정보를 찾을 수 없습니다.');
            } else {
                if (participation.canceled) {
                    throw new ConflictError('취소된 신청 정보입니다.');
                }

                if (participation.status !== 'pending') {
                    throw new ConflictError('이미 수락되었거나 거절된 유저입니다.');
                }
            }

            await ParticipantModel.update({ participantId, updateField: 'status', newValue: 'accepted' });

            return { message: '신청 수락을 성공하였습니다.' };
        } catch (error) {
            if (error instanceof NotFoundError || error instanceof ConflictError) {
                throw error;
            } else {
                throw new InternalServerError('신청 수락에 실패했습니다.');
            }
        }
    },
};
export { participantService };
