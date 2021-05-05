export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_USER = "ADD_QUESTION_USER";
export const ADD_ANSWER_USER = "ADD_ANSWER_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addQuestionUser(authenticatedUser, qid) {
  return {
    type: ADD_QUESTION_USER,
    authenticatedUser,
    qid,
  };
}

export function addAnswerUser({authenticatedUser, qid, answer}) {
  console.log(authenticatedUser,qid,answer);
  return {
    type: ADD_ANSWER_USER,
    authenticatedUser,
    qid,
    answer,
  };
}
