import React, { useState } from "react";
import "./DiscussionPortal.css";
const DiscussionPortal = () => {
  const [data, setData] = useState("");
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  //! resolve code

  const [responses, setResponses] = useState([]);
  const [responseName, setResponseName] = useState('');
  const [responseComment, setResponseComment] = useState('');

  const handleResponseNameChange = (e) => {
    setResponseName(e.target.value);
  }

  const handleResponseCommentChange = (e) => {
    setResponseComment(e.target.value);
  }

  const handleResponseSubmit = (e) => {
    e.preventDefault();
    setResponses([...responses, { name: responseName, comment: responseComment }]);
    setResponseName('');
    setResponseComment('');
  }

  //!   ************
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleDataChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestions([...questions, { subject: data, question }]);
    setData("");
    setQuestion("");
    setFormSubmitted(true);
  };

  return (
    <div className="main">
      <div className="header">
        <h2>Discussion Portal</h2>
      </div>
      <div className="pannel">
        <div className="left-pannel">
          <div className="btn-question">
            <button className="btn">New Question Form</button>
            <input type="text" placeholder="Search Question" />
          </div>
          {questions.map((item, index) => (
            <div key={index} className="submit">
              <h3>{item.subject}</h3>
              <p className="p-1">{item.question}</p>
            </div>
          ))}
        </div>
        <div className="right-pannel">
          {!formSubmitted ? (
            <div className="qut">
              <form onSubmit={handleSubmit}>
                <div className="head-2">
                  <h2>Welcome to Discussion Portal !</h2>
                  <p>Enter Subject & Question to Get Started.</p>
                </div>
                <div className="input-type">
                  <input
                    type="text"
                    placeholder="subject"
                    value={data}
                    onChange={handleDataChange}
                  />
                </div>
                <div className="text-area">
                  <textarea
                    placeholder="Question"
                    value={question}
                    onChange={handleQuestionChange}
                  ></textarea>
                </div>
                <div className="btn-submit">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          ) : (
            <div className="new-page">
              <div className="res-1">
                {questions.map((item, index) => (
                  <>
                    <h2>Question</h2>
                    <div key={index} className="submi">
                      <h3>{item.subject}</h3>
                      <p className="p-2">{item.question}</p>
                    </div>
                    <button className="resolve">Resolve</button>
                  </>
                ))}
              </div>
              <div className="addRes">
                <div className="head-3">
                  <h2 className="h2">Response</h2>
                  {responses.map((response, index) => (
                    <div key={index} className="res-5">
                      <h4>{response.name}</h4>
                      <p>{response.comment}</p>
                    </div>
                  ))}
                </div>
                <div className="addres-1">
                  <p>Add Response</p>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={responseName}
                    onChange={handleResponseNameChange}
                  />
                </div>
                <textarea
                  className="txtA"
                  value={responseComment}
                  onChange={handleResponseCommentChange}
                >
                  Enter Comment
                </textarea>
                <button className="btn-3" onClick={handleResponseSubmit}>
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscussionPortal;
