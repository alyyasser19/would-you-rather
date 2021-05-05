import {
  RECEIVE_USERS,
  ADD_ANSWER_USER,
  ADD_QUESTION_USER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER_USER:
      const { authenticatedUser, qid, answer } = action;
      console.log(authenticatedUser ,qid, answer);
      return {
        ...state,
        [authenticatedUser]: {
          ...state[authenticatedUser],
          answers: {
            ...state[authenticatedUser].answers,
            [qid]: answer,
          },
        },
      };
    case ADD_QUESTION_USER:
      const author = action.authenticatedUser;
      const id = action.id
      console.log(action);
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id),
        },
      };
    default:
      return state;
  }
}
