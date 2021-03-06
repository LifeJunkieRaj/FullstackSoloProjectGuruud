import React, { useState, useEffect } from 'react';
import "./AskAGuru.css";
import Comment from "../Comment";
import Response from "../Response";
// import CreateComment from "../Comment/CreateComment";
import { useSelector, useDispatch } from "react-redux";
import { deleteQuestion, getCurrentUserQuestions } from "../../store/ask_a_guru";
import { showComments, setQuestionNumber } from "../../store/comment";
import { showResponses, setResponseQuestionNumber } from "../../store/response";

function AskAGuru({question}) {
  const currentUser = useSelector(state => state.session.user)

  const dispatch = useDispatch()
  const addResponse = () => {
    dispatch(setResponseQuestionNumber(question.id))
    showResponsesModal()
 }
  const showResponsesModal = () => {
    dispatch(showResponses())
  }
  const addComment = () => {
    dispatch(setQuestionNumber(question.id))
    showCommentsModal()
 }

  const showCommentsModal = () => {
    dispatch(showComments())
  }

  const deleteQuestionAAG = () => {
    deleteQuestion(question.id)
      .then(() => dispatch(getCurrentUserQuestions(currentUser.id)))  
  }

    return (
    <div className="question_container">
      {/* <CreateComment question_id = {questionId}/> */}
      <div className="cat_container_box">
        <div className="cat_name">
          Category: {question.name}
        </div>
          <div className="cat_description_divider"></div>
        <div className="description_text">
          Description: {question.description}
        </div>
      </div>
      <div className="guru_id_highlight askAGuruFlexContainer">
        <p>User: {question.username} ASKED </p>
        {question.guru && <i className="fas fa-award"></i>}
      </div>
      <div className="question_content">
        {question.question}
      </div>
        <div className="flex_container_res_comm">
          <div className="flex_item_res_comm">
            <Response responses={question.responses} img />
          </div>
          <div className="flex_item_res_comm">
            <Comment comments={question.comments} />
          </div>
        </div>
        <div className="flex_container">
          {currentUser.guru && <div className="response_button" onClick={addResponse}><i className="far fa-comment-alt"></i> Add Response</div>}
          
          <div className="comment_button" onClick={addComment}>
            <i className="far fa-comment-alt"></i> Add Comment</div>
          {/* <div className="votes_container">
            <div className="up"><i className="fas fa-chevron-up"></i>
          </div>
            <div className="vote_numbers">69</div>
            <div className="down"><i className="fas fa-chevron-down"></i></div>
          </div> */}
        </div>
        <div className="delete_button_container">
          {currentUser && currentUser.id === question.user_id && <div onClick={deleteQuestionAAG} className="delete_AAG_button"><i className="fas fa-trash-alt"></i> Delete Question</div>}
        </div>
    </div>
  )
}

export default AskAGuru;
