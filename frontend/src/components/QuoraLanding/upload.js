
import React, { useRef ,useEffect, useState } from "react";
import ReactTimeAgo from 'react-time-ago'
import "./Post.css";
function upload() {

    const paragraphStyle ={
        WebkitLineClamp:4,
        WebkitBoxOrient:'vertical',
        overflow:'hidden',
        display:'-webkit-box',
      }
    function LastSeen({ date }) {
        return (
          <div>
            <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
          </div>
        );
      }
      

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
    





  return (
    <div className='post_main'>
    {/* this div will contain 3 things post info  */}
    {/* POST AVATAR */}
    {/* usser name and timestamp */}
    <div className='post_info'>
      
    <img className='post1' src="https://qph.cf2.quoracdn.net/main-thumb-ti-2020989-50-arucblorlyucxrojdquzigqwvqjhcymj.jpeg" size="36" alt="Icon for kuora's forbidden station"/>
    
    <div className='authordetails'>
    <h4 className='authrname'>Let's Relate</h4>
    <div className='timepost'>
    <small className='authrdetail'>Posted by Nikhil .</small>
    <div className='postedbydate'>
     {new Date().toLocaleString()}
    </div>
    </div>
    
    
    </div>
    
    </div>
    
    
    
    
    <div className='post_body2'>
    <h3>An open letter</h3>
    
    <p className='postAns' style={ isOpen ? null : paragraphStyle} ref={ref}>
    Dear Stranger<br />
    Kese ho ?<br />
    Sb thik toh hai na?<br />
    Dekho , mujhse jhooth na kehna....<br />
    
    <br />
    
    Bhut pareshan dikhte ho aajkl<br />
    Bolo konsi baat h mann m<br />
    Zara khoye khoye se rehte ho<br />
    Koi tension chl rhi h kya life m?<br />
    
    <br />
    
    I know tum zara maayus rehte ho<br />
    Cheezo ko figure out krne m , thoda delay krte ho<br />
    I know tum zara thak gye ho<br />
    Daudte daudte thoda tham gye ho<br />
    Pr suno<br />
    It's okay<br />
    It's okay to be like that sometimes<br />
    Cause you know , you are the best<br />
    
    <br />
    
    
    Yeh jo problems h<br />
    Yeh jo situations h<br />
    Humesha same toh nhi rahengi na<br />
    Zindagi Humesha gham toh nhi degi na<br />
    
    <br />
    
    Yeh smjho ki it's a test<br />
    And you have to give your best<br />
    I trust you dear<br />
    You'll reach the end<br />
    I trust you dear<br />
    You will definitely shine like the sun<br />
    
    <br />
    
    
    Toh ab yu udas na rha kro<br />
    Chhoti chhoti baato ko lekr<br />
    Yu pareshan na hua kro<br />
    
    <br />
    
    Ush ishwar ko tumpe vishwas h<br />
    Wo zara tumhe parakh rhe h<br />
    Ki tum wo biggest succeess ko handle kr bhi skte ho<br />
    Ya nhi<br />
    
    <br />
    
    
    Toh ab khudko yu kamzor na padne dena<br />
    Beshak mann ghabrayega kayi dafa<br />
    Pr kbhi khudko maayus na hone dena<br />
    
    <br />
    
    Aur ha mujhe poora yakeen h tumpe<br />
    Dekhna tum ekdin apni manzil paa jaaoge<br />
    Aur ush din apni kahani<br />
    Bade fakr se sbko sunaoge<br />
    
    </p>
    {showReadMoreButton && (
    <p  className='readmore' onClick={()=> setIsOpen(!isOpen)}>{isOpen ? '(read less)' :  '(read more..)'}</p>
    )}
    
    <div className='post2img'>
    <img src='https://qph.cf2.quoracdn.net/main-qimg-d385b63b435b96eeaea758e1fab3bb8c' alt='i'></img>
    
    </div>
    
    <div>
        <p
    style={{
        color: "rgba(0,0,0,0.5)",
        fontSize: "12px",
        fontWeight: "bold",
        margin: "10px 0",
        marginLeft:"8px",
        }}
    >3.8K views
    </p>
    </div>
    
    <div className="answerVotemain">
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
    
    
    
                    <span class="commentTxt"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.071 18.86c4.103 0 7.429-3.102 7.429-6.93C19.5 8.103 16.174 5 12.071 5s-7.429 3.103-7.429 6.93c0 1.291.379 2.5 1.037 3.534.32.501-1.551 3.058-1.112 3.467.46.429 3.236-1.295 3.803-.99 1.09.585 2.354.92 3.701.92Z" class="icon_svg-stroke icon_svg-fill" stroke="#666" stroke-width="1.5" fill="none"></path></svg>
                    <span className='noOfComment'>1</span>
                    </span>
                
    
    
                    <span class="shareTxt"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M19.748 10a8.003 8.003 0 0 0-15.496.002m.001 4.003a8.003 8.003 0 0 0 15.494 0"></path><path d="m2.5 7.697 1.197 3.289 3.289-1.197m14.5 6.5L20.289 13 17 14.197"></path></g></svg>
                    <span className='noOfshare'>1</span>
                    </span>
    
    
    
                    </div>
    
    
     </div> {/* this is main div close of btnss */}
    
    
    
    
    
    
    
    
    
    </div>{/* these two  div close of postAnswer,answerContainer */}
    
    
    
    
    </div>
  )
}

export default upload
  



