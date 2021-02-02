export const createVote = (score, votableType, votableId) => {
  return $.ajax({
    method: 'POST',
    url: '/api/votes/',
    data: {
      score: score,
      votable_type: votableType,
      votable_id: votableId,
    }
  });
};