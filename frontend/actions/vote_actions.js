import * as VoteAPIUtil from '../util/vote_api_util';
import { receiveQuestion } from './question_actions';

// export const RECEIVE_QUESTION_VOTES = 'RECEIVE_QUESTION_VOTES';
export const RECEIVE_VOTES = 'RECEIVE_VOTES';
export const RECEIVE_VOTE = 'RECEIVE_VOTE';

const receiveVotes = ({votes, votableType}) => {
  return {
    type: RECEIVE_VOTES,
    votes
  }
}

const receiveVote = (vote) => {
  return ({
    type: RECEIVE_VOTE,
    vote
  })
}


// export const createVote = (score, votableType, votableId) => (dispatch) => {
//   return VoteAPIUtil.createVote(score, votableType, votableId)
//     .then(
//       (res) => dispatch(receiveQuestion(res))
//       // (total_votes)  => dispatch(receiveVotes({total_votes, votableType})),
//     //   (errors) => dispatch(receiveVoteErrors(errors.responseJSON))
//     );
// };

export const fetchVotes = (questionId) => (dispatch) => {
  return VoteAPIUtil.fetchVotes(questionId)
    .then((vote) => dispatch(receiveVote(vote))
      // (total_votes)  => dispatch(receiveVotes({total_votes, votableType})),
    //   (errors) => dispatch(receiveVoteErrors(errors.responseJSON))
    );
};

export const createVote = (score, votableType, votableId) => (dispatch) => {
  return VoteAPIUtil.createVote(score, votableType, votableId)
    .then((vote) => dispatch(receiveVote(vote))
      // (total_votes)  => dispatch(receiveVotes({total_votes, votableType})),
    //   (errors) => dispatch(receiveVoteErrors(errors.responseJSON))
    );
};



