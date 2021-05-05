import { getInitialData, saveQuestion, saveQuestionAnswer } from "../Utils/api";
import { addQuestionUser, receiveUsers, addAnswerUser } from "./users";
import { addQuestion, receiveQuestions, addAnswer } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading";

export function handeInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    console.log("done init");
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function handleAddQuestion(currentUser, optionOne, optionTwo) {
  return (dispatch) => {
    dispatch(showLoading());

    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: currentUser,
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionUser(currentUser, question.id));
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function handleAnswer(authenticatedUser, qid, answer) {
  return (dispatch) => {
    dispatch(addAnswer({authenticatedUser, qid, answer}));
    dispatch(addAnswerUser(authenticatedUser, qid, answer));
    return saveQuestionAnswer({
      authedUser: authenticatedUser,
      qid: qid,
      answer: answer,
    });
  };
}
