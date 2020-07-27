export const fetchAnswers = (questionId) => {
    return $.ajax ({
        method: "GET",
        url: `/api/questions/${questionId}/answers`
    })
}
export const fetchAnswer = (answerId) => {
    return $.ajax ({
        method: "GET",
        url: `/api/answers/${answerId}`
    })
}

export const createAnswer = (questionId, answer) => {
    return $.ajax({
        method: 'POST',
        url: `/api/questions/${questionId}/answers`,
        data: { answer }
    });
};

export const updateAnswer = (question) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/questions/${question.id}`,
        data: { question }
    });
};


export const deleteAnswer = (answerId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/answers/${answerId}`,
    });
};