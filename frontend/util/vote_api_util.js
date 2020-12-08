export const vote = (voteType, votableType, votableId) => {
  return $.ajax({
    method: 'POST',
    url: '/api/vote/',
    data: {
      vote_type: voteType,
      votable_type: votableType,
      votable_id: votableId,
    }
  });
};