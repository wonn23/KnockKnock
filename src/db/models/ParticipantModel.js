import { db } from '../index.js';

const ParticipantModel = {
    participatePost: async ({ userId, postId }) => {
        const createParticipant = await db.Participant.create({ user_id: userId, post_id: postId });
        return createParticipant;
    },
};

export { ParticipantModel };
