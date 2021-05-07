const SHOW = "/comment_modal/show"
const HIDE = "/comment_modal/hide"
const LOAD = "/comment_modal/load";

const loadCommentsStore = (modal_status) => ({
  type: LOAD,
  payload: modal_status,
});


export const showComments = () => ({type: SHOW})
export const hideComments = () => ({type: HIDE})


export const addComment = async (user_id, ask_a_guru_id, comment) => {
  console.log("Add Comment to question ID" + ask_a_guru_id)  
  const response = await fetch("/api/comments/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id,
        ask_a_guru_id,
        comment,
      }),
    });
    const data = await response.json();
    if (data.errors) throw new Error(data.errors);

  };

  export const setQuestionNumber = (questionId) => async (dispatch) => {
    dispatch(loadCommentsStore(questionId));
  }

  const initialState = {questionNumber:-1, modal: false};
  const commentReducer = (state=initialState, action) => {
    let newState;
    switch (action.type){
      case LOAD:
        newState = Object.assign({}, state);
        newState.questionNumber = action.payload;
        return newState;
      case SHOW:
        return {...state, modal:true}
      case HIDE:
        return {...state, modal:false}
      default:
        return state;
    }
  }

  export default commentReducer;