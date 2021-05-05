import {
  ADD_QUESTION,
  RECEIVE_QUESTIONS,
  ADD_ANSWER,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_ANSWER:
      console.log(state[action.qid]["optionTwo"]);
      const votes = state[action.qid][action.answer].votes;
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: votes.concat([action.authenticatedUser]),
          },
        },
      };
    default:
      return state;
  }
}
