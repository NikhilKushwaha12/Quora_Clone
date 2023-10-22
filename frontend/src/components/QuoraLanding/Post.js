// import { Avatar } from "@material-ui/core";
import React, { useRef ,useEffect, useState } from "react";
import "./Post.css";
import Uploads from './upload';
import { Modal } from "react-responsive-modal";
import parse from 'html-react-parser';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-responsive-modal/styles.css";
import axios from "axios";
import "react-responsive-modal/styles.css";
import CloseIcon from '@mui/icons-material/Close';
import 'react-quill/dist/quill.snow.css'
import FilterIcon from '@mui/icons-material/Filter';
import ReactTimeAgo from 'react-time-ago'



function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  );
}

 function QuoraPost({ questionId, key, question, imageUrl, timestamp, users, answers }) {
  // const dispatch = useDispatch();
  const [IsmodalOpen, setIsModalOpen] = useState(false);
  

  const [answer, setAnswer] = useState("");
  const [getAnswers, setGetAnswers] = useState(answers);

  // console.log(answers)



  const [isOpen , setIsOpen] = useState(false)
  const [showReadMoreButton , setReadMoreButton] = useState(false)
  const ref = useRef(null)
  
  useEffect(()=>{
  if(ref.current){
  setReadMoreButton(
  ref.current.scrollHeight !== ref.current.clientHeight
  )}
  },[])
  
  // for color change of upvote downvote
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [count, setCount] = useState(0);
  
  const handleUpvote = () => {
    if (!upvoted) {
      setUpvoted(true);
      setDownvoted(false);
      setCount(count + 1);
    }
  };
  
  const handleDownvote = () => {
    if (!downvoted) {
      setDownvoted(true);
      setUpvoted(false);
      setCount(count - 1);
    }
  };
  





  const [show, setShow] = useState(false)
  const Close = (
    <CloseIcon
      style={{
        color: "red",
        border: " 2px solid lightgray",
        borderRadius: "3px",
      }}
    />
  );

  const handleQuill = (value) => {
    setAnswer(value);
  };

  const handleModal = () => {
    setIsModalOpen(true);
    console.log(questionId);
  };

  const handleAnswer = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (answer !== "") {
      const body = {
        answer: answer,
        questionId: questionId,
      };

      await axios
        .post("/api/answers", body, config)
        .then((res) => {
          console.log(res.data);
          alert('Answer added succesfully')
          setIsModalOpen(false)
        })
        .catch((err) => {
          console.log(err);
          
        });
    }
  };
  return (
    
    <div
      key={key}
      className="post"
     
    >
      <div className="post__info">
      <div className='post_info'>
  
  <img className='post1' src="https://qph.cf2.quoracdn.net/main-thumb-ti-3832469-50-sqvdigdvggtunjjeflgckxvcfepzzhxh.jpeg" size="36" alt="Icon for kuora's forbidden station"/>
  <div><h4 className='authrname'>Dhan-Oh</h4></div>
  </div>
  <div className='timedte'>{new Date().toLocaleString()}</div>


  
       </div>
      <div className="post__body">
        <div className="post__question">
          <p>{question}</p>
          
          <Modal
            open={IsmodalOpen}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc={true}
            center
            closeOnOverlayClick={false}
            closeIcon={Close}
          >
            <div className="modal__question">
              <h1>{question}</h1>
              <p>
                asked by{" "}
                <span className="name">
                  {users?.name ? users?.name : users?.email}
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                 
                  {new Date(timestamp).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <ReactQuill
                value={answer}
                onChange={handleQuill}
                placeholder="Enter your answer"
              ></ReactQuill>
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="sumbit" onClick={handleAnswer} className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        <img style = {{
          width: "100%",
          objectFit: "contain"
        }} src={imageUrl} alt="" />
        <div className="post__footer">
      
        <button 
        
        onClick={handleModal} 
        
        className='ansBtn'><svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke-width="1.5" fill="none" fill-rule="evenodd"><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9h0a2 2 0 0 1 2.828 0Z" className="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path><path className="icon_svg-fill_as_stroke" fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path><path d="M14.5 19.5h5v-5m-10-10h-5v5" className="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
        <span className='btntext'>Answer</span></button>


         <p className='follow'><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g className="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M14.5 19c0-5.663-3.337-9-9-9m14 9c0-8.81-5.19-14-14-14"></path><circle cx="7.5" cy="17" r="2" className="icon_svg-fill"></circle></g></svg><span className='btntext'>Follow</span>
<span> </span>
</p>



        

        <p className='pass'>
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m11.828 9.314 3.9-3.9a2 2 0 1 1 2.828 2.829l-3.9 3.9m-3.535 3.535-2.464 2.464-4.241 1.416 1.412-4.244 2.465-2.465" className="icon_svg-stroke" stroke="#666" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path><path className="icon_svg-fill_as_stroke" fill="#666" d="m4.414 19.556 2.652-.884-1.768-1.767z"></path><path d="M4.636 5.636 18.5 19.5" className="icon_svg-stroke" stroke="#666" stroke-width="1.5" stroke-linecap="round"></path></g></svg><span className='btntext'>Pass</span></p>

    
        <div className="post__footerLeft">
        <div className='Downvote_copy'>
<p className='downvote'><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" className="icon_svg-stroke icon_svg-fill" stroke="#666" fill="none" stroke-width="1.5" stroke-linejoin="round"></path></svg></p>

<p className="downvote"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 11.25a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm-7 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm14 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Z" className="icon_svg-stroke" fill="#666" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></p>
</div>
        </div>
      </div>
        <p style = {{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0"
        }}>{answers.length} {`${answers.length < 2 ? 'Answer' : 'Answers'}`}</p>
        <div style = {{
              margin: "5px 0px 0px 0px",
              padding: "5px 0px 0px 20px",
              borderTop: "1px solid lightgray",
            }} className="post__answer">
              
          {
            // answer comes here
            getAnswers.map((_a) => (<>
            <div style = {{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: "10px 5px",
              borderTop: "1px solid lightgray",
            }} className = 'post-answer-container'>
              <div style = {{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",fontSize: '12px',
                fontWeight: "600",
                color: "#888"
              }} className = 'post-answered'>


                <div 
    style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        fontSize: "12px",
        fontWeight: 600,
        color: "#888",}}
className='postAnswered'> {/*in postAnswered div avatar of person who answered question will come */}
    <img className='answerimg' src="https://qph.cf2.quoracdn.net/main-thumb-1872060-50-rvgzkecwishuhixykqudakuxhfguhafe.jpeg" size="36" alt="Icon for kuora's forbidden station"/>

<div

 style={{
    margin: "0px 10px",
  }}

className='AvatarInfo'>
<p  
 style={{
    marginTop:"2px",
    marginBottom:"2px",
    color:"black",

  }}
>Gorge</p>
<small>Gorilla ROI - Import Amazon Seller Data Into Google SheetsFeatured on Inc</small>
<span className='time'>
  <LastSeen date={_a?.createdAt} /></span>
</div>

</div> {/* this is main div close of postAnswered */}

                
              </div>
              <div className = 'post-answer'>
                {parse(_a.answer)}
               

{/* vote button of answer */}
                <div className="answerVotemain voteanswer">
        <div className=''>
        <button
      className={`postUpvote ${upvoted ? 'upvoted' : ''}`}
      onClick={handleUpvote}
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M12 4 3 15h6v5h6v-5h6z"
          className=""
          stroke-width="1.5"
          stroke="#666"
          fill={upvoted ? '#2e69ff' : 'none'} // Set fill attribute conditionally
          stroke-linejoin="round"
        ></path>
      </svg>
      <span className="Upvotetxt">Upvote</span>
      <span className="Upvotetxt"> · </span>
      <span className="Upvotetxt">{count}</span>
    </button>
    
    <button
      className={`postDownvote ${downvoted ? 'downvoted' : ''}`}
      onClick={handleDownvote}
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          d="m12 20 9-11h-6V4H9v5H3z"
          className="icon_svg-stroke icon_svg-fill"
          stroke="#666"
          fill={downvoted ? 'red' : 'none'} // Set fill attribute conditionally
          stroke-width="1.5"
          stroke-linejoin="round"
        ></path>
      </svg>
    </button>

</div>
</div>
{/* vote button of answer  end*/}

              </div>
            </div>
            </>)
           
            )
          }
        </div>
      </div>
    </div>   

  
  

    );
}

export { QuoraPost as Post };
