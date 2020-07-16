export const fetchAnswers = () => {
    return $.ajax ({
        method: "GET",
        url: '/api/questions'
    })
}

export const createAnswer = (answer) => {
    return $.ajax({
        method: 'POST',
        url: '/api/questions',
        data: { question }
    });
};

export const updateAnswer = (answer) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/questions/${question.id}`,
        data: { question }
    });
};


export const deleteAnswer = (answerId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/questions/${questionId}`,
    });
};