import React, { useState , useRef } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Modal } from "react-responsive-modal";
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterIcon from '@mui/icons-material/Filter';
import "react-responsive-modal/styles.css";
import axios from 'axios';
import "./QHeader.css";


function QHeader() {
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  const handleImageClick = () =>{
    inputimageRef.current.click();
    }
    const inputimageRef = useRef(null);
  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  // const userLogin = useSelector((state) => state.userLogin);

  // console.log(userLogin?.userInfo?.userId);

  const Close = (
    <CloseIcon
      style={{
        color: "red",
        border: " 2px solid lightgray",
        borderRadius: "3px",
      }}
    />
  );

  const handleQuestion = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (input !== "") {
      const body = {
        questionName: input,
        questionUrl: inputUrl,
        
      }
      await axios
        .post("/api/questions", body, config)
        .then((res) => {
          console.log(res.data);
          console.log("question added successfully");
          // setIsModalOpen(false);
          successModal('Question added successfully')
        })
        .catch((err) => {
          console.log(err);
        });
    }

    setInput("");
    setInputUrl("");
  };

  

  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
        <svg width="110px"  viewBox="0 0 202 115" className='svglogo'>
    <g stroke="none" fill="rgb(185, 43, 39)" fill-rule="evenodd" className="logo_fill">
      <path d="M24.4,31.9 C37.1,31.9 49.1,41.8 49.1,56.2 C49.1,64.3 45.3,70.9 39.9,75.3 C41.5,77.9 43.5,79.7 45.9,79.7 C48.7,79.7 49.9,77.5 50.1,75.7 L50.1,75.7 L53.7,75.7 C53.9,78.1 52.7,87.3 42.7,87.3 C36.5,87.3 33.3,83.7 30.9,79.7 C28.9,80.1 26.7,80.5 24.5,80.5 C12.2,80.5 0,70.6 0,56.2 C0,41.8 12.2,31.9 24.4,31.9 Z M114.1,42.8 C124.3,42.8 132.5,50 132.6,60.7 C132.6,72 124.3,79.4 114.1,79.4 C104.2,79.4 95.6,71.9 95.6,60.7 C95.6,49.8 104.1,42.8 114.1,42.8 Z M181.4,42.8 C190.4,42.8 196,45.2 196,54.2 L196,54.2 L196,69.6 C196,72 196.8,73.2 198.8,73.2 C199.8,73.2 200.6,72.8 201,72.6 L201,72.6 L201.9,74.4 C201.1,75.8 198.5,78.4 193.7,78.4 C189.5,78.4 186.9,76.4 186.5,73.2 L186.5,73.2 L186.3,73.2 C184.3,76.8 180.7,79.2 175.5,79.2 C169.3,79.2 165.5,76 165.5,70.2 C165.5,58.8 181.4,62 186,54.4 L186,54.4 L186,52.6 C186,47.2 183.8,46 181.4,46 C174.2,46 177.4,54.4 171,54.4 C167.8,54.4 166.6,52.6 166.6,50.4 C166.6,46.2 171.8,42.8 181.4,42.8 Z M67.6,43.6 L67.6,67 C67.6,71.4 69.8,73.4 73,73.4 C75.6,73.4 78.4,72.2 79.8,69.4 L79.8,50 C79.8,48 79.2,47.2 77,47.2 L74.6,47.2 L74.6,43.6 L89.8,43.6 L89.8,69.3 C89.8,71.7 90.6,72.9 93.4,72.9 L93.8,72.9 L93.8,76.7 L80.2,78.9 L80.2,73.8 L80,73.8 C77.4,77.1 73.6,79.1 68.6,79.1 C62.4,79.1 57.8,75.9 57.8,67.3 L57.8,50 C57.8,48 57,47.2 54.8,47.2 L52.6,47.2 L52.6,43.6 L67.6,43.6 Z M157.9,43 C161.1,43 163.7,44.8 163.7,48.4 C163.7,51 162.5,53.6 158.9,53.6 C155.9,53.6 155.3,50.8 152.7,50.8 C150.5,50.8 148.7,53 148.7,56.2 L148.7,70.4 C148.7,73.6 149.5,74.6 153.1,74.6 L155.1,74.6 L155.1,78.4 L133.5,78.4 L133.5,74.7 L134.9,74.7 C138.5,74.7 138.9,73.7 138.9,70.5 L138.9,50 C138.9,48 137.9,47.2 135.7,47.2 L133.7,47.2 L133.7,43.6 L147.5,43.6 L148.1,50.8 L148.5,50.8 C149.9,45.6 154.1,43 157.9,43 Z M24.5,35.8 C15.3,35.8 11.3,42.7 11.3,56.1 C11.3,69.5 15.3,76.4 24.5,76.4 C26.2,76.4 27.7,76 28.9,75.6 C27.1,71.4 24.7,67.4 20.1,67.4 C19.3,67.4 18.5,67.6 17.7,68 L17.7,68 L16.3,65.2 C18.3,63.5 21,62.2 24.7,62.2 C30.5,62.2 33.5,65 35.9,68.6 C37.3,65.6 37.9,61.4 37.9,56.1 C37.9,42.7 33.9,35.8 24.5,35.8 Z M114.1,46.2 C109.3,46.2 106.5,51 106.5,60.6 C106.5,70.4 109.3,75.4 114.1,75.4 C119.3,75.4 121.3,70.4 121.5,60.6 C121.7,51.1 119.3,46.2 114.1,46.2 Z M185.9,58.6 C182.7,62.1 175.3,62.6 175.3,69 C175.3,72.2 177.3,74 179.9,74 C184.3,74 185.9,70.2 185.9,66 L185.9,66 Z"></path>
    </g>
  </svg>
        </div>
        <div className="qHeader__icons">
          <div onClick = {() => window.location.href = '/'} className="active qHeader__icon">
          <svg width="29" height="29" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.02 11.46L12.63 2.45999C12.34 2.17999 11.89 2.17999 11.6 2.44999L1.99 11.45C1.77 11.66 1.69 11.99 1.8 12.27C1.91 12.56 2.19 12.74 2.5 12.74H5.25V20.49C5.25 20.9 5.59 21.24 6 21.24H9.62C10.03 21.24 10.37 20.9 10.37 20.49V16.36C10.37 15.43 11.09 14.67 12 14.62H12.12C13.08 14.62 13.87 15.4 13.87 16.37V20.5C13.87 20.91 14.21 21.25 14.62 21.25H18C18.41 21.25 18.75 20.91 18.75 20.5V12.75H21.5C21.81 12.75 22.08 12.56 22.2 12.28C22.32 12 22.24 11.67 22.02 11.46Z" fill="#666666" className="icon_svg-fill_as_stroke">
</path>
</svg>
          </div>
          <div onClick = {() => window.location.href = '/allSpaces'} className="qHeader__icon">
          <svg width="29" height="29" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 2.25H5.5C3.71 2.25 2.25 3.71 2.25 5.5V18.5C2.25 20.29 3.71 21.75 5.5 21.75H18.5C20.29 21.75 21.75 20.29 21.75 18.5V5.5C21.75 3.71 20.29 2.25 18.5 2.25ZM8.68 18C8.67 18.32 8.41 18.58 8.1 18.58H6.01C5.69 18.58 5.43 18.32 5.43 18V15.92C5.43 15.6 5.69 15.34 6.01 15.34H8.1C8.42 15.34 8.68 15.6 8.68 15.92V18ZM8.31 13.21H7.05H5.79C5.42 13.21 5.2 12.81 5.38 12.5L6.01 11.41L6.64 10.32C6.82 10 7.28 10 7.46 10.32L8.09 11.41L8.72 12.5C8.9 12.82 8.67 13.21 8.31 13.21ZM7.05 8.63C6.08 8.63 5.29 7.84 5.29 6.87C5.29 5.9 6.08 5.11 7.05 5.11C8.02 5.11 8.81 5.9 8.81 6.87C8.81 7.84 8.02 8.63 7.05 8.63ZM18.11 18.38H11.92C11.51 18.38 11.17 18.04 11.17 17.63C11.17 17.22 11.51 16.88 11.92 16.88H18.11C18.52 16.88 18.86 17.22 18.86 17.63C18.86 18.04 18.52 18.38 18.11 18.38ZM18.11 14.72H11.92C11.51 14.72 11.17 14.38 11.17 13.97C11.17 13.56 11.51 13.22 11.92 13.22H18.11C18.52 13.22 18.86 13.56 18.86 13.97C18.86 14.38 18.52 14.72 18.11 14.72ZM18.11 11.06H11.92C11.51 11.06 11.17 10.72 11.17 10.31C11.17 9.9 11.51 9.56 11.92 9.56H18.11C18.52 9.56 18.86 9.9 18.86 10.31C18.86 10.72 18.52 11.06 18.11 11.06ZM18.11 7.39H11.92C11.51 7.39 11.17 7.05 11.17 6.64C11.17 6.23 11.51 5.89 11.92 5.89H18.11C18.52 5.89 18.86 6.23 18.86 6.64C18.86 7.05 18.52 7.39 18.11 7.39Z" fill="#666666" className="icon_svg-fill_as_stroke"></path></svg>
          </div>


          <div onClick = {() => window.location.href = '/myQuestions'} className="qHeader__icon">
          <svg width="29" height="29" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 11.75C20.09 11.75 19.75 12.09 19.75 12.5V19.75H12.5C12.09 19.75 11.75 20.09 11.75 20.5C11.75 20.91 12.09 21.25 12.5 21.25H20.5C20.91 21.25 21.25 20.91 21.25 20.5V12.5C21.25 12.09 20.91 11.75 20.5 11.75Z" fill="#636466" className="icon_svg-fill_as_stroke"></path><path d="M4.25 11.5V4.25H11.5C11.91 4.25 12.25 3.91 12.25 3.5C12.25 3.09 11.91 2.75 11.5 2.75H3.5C3.09 2.75 2.75 3.09 2.75 3.5V11.5C2.75 11.91 3.09 12.25 3.5 12.25C3.91 12.25 4.25 11.91 4.25 11.5Z" fill="#636466" className="icon_svg-fill_as_stroke"></path><path d="M4.05 18.11L3.6 19.46C3.51 19.73 3.58 20.03 3.78 20.23C3.92 20.37 4.11 20.45 4.31 20.45C4.39 20.45 4.47 20.44 4.55 20.41L5.9 19.96L4.05 18.11Z" fill="#636466" className="icon_svg-fill_as_stroke"></path><path d="M19.65 4.35001C18.62 3.32001 16.83 3.32001 15.8 4.35001L5.17002 14.98C5.09002 15.06 5.03002 15.16 4.99002 15.27L4.58002 16.51L7.49002 19.42L8.74002 19C8.85002 18.96 8.95002 18.9 9.03002 18.82L19.65 8.21001C20.16 7.70002 20.45 7.01002 20.45 6.28001C20.45 5.55001 20.16 4.87001 19.65 4.35001Z" fill="#636466" className="icon_svg-fill_as_stroke"></path></svg>
          </div>




          <div onClick = {() => window.location.href = '/allUsers'} className="qHeader__icon">
          <svg width="29" height="29" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7 9.25C16.75 9.25 15.98 9.52 15.37 9.92C15.8 10.23 16.18 10.6 16.49 11.01C16.83 10.85 17.23 10.75 17.7 10.75C19.48 10.75 20.25 12.12 20.25 12.81V20.25H17.55V21C17.55 21.26 17.5 21.51 17.41 21.75H21C21.41 21.75 21.75 21.41 21.75 21V12.81C21.75 11.32 20.34 9.25 17.7 9.25Z" fill="#666666" className="icon_svg-fill_as_stroke"></path><path d="M17.7 2.73C16.77 2.73 15.95 3.16 15.4 3.82C15.78 4.26 16.07 4.77 16.25 5.34C16.42 4.7 17 4.23 17.69 4.23C18.52 4.23 19.19 4.9 19.19 5.73C19.19 6.56 18.52 7.23 17.69 7.23C17.19 7.23 16.75 6.98 16.48 6.61C16.48 6.65 16.49 6.69 16.49 6.74C16.49 7.3 16.38 7.83 16.19 8.32C16.63 8.58 17.14 8.74 17.69 8.74C19.34 8.74 20.69 7.39 20.69 5.74C20.69 4.09 19.35 2.73 17.7 2.73Z" fill="#666666" className="icon_svg-fill_as_stroke"></path><path d="M7.5 6.73C7.5 6.69 7.51 6.65 7.51 6.6C7.24 6.98 6.8 7.23 6.3 7.23C5.47 7.23 4.8 6.56 4.8 5.73C4.8 4.9 5.47 4.23 6.3 4.23C6.99 4.23 7.57 4.7 7.74 5.34C7.93 4.77 8.22 4.26 8.6 3.82C8.04 3.16 7.23 2.73 6.3 2.73C4.65 2.73 3.3 4.08 3.3 5.73C3.3 7.38 4.65 8.73 6.3 8.73C6.85 8.73 7.36 8.57 7.8 8.31C7.61 7.81 7.5 7.28 7.5 6.73Z" fill="#666666" className="icon_svg-fill_as_stroke"></path><path d="M12 3.73C10.35 3.73 9 5.08 9 6.73C9 8.38 10.35 9.73 12 9.73C13.65 9.73 15 8.38 15 6.73C15 5.08 13.65 3.73 12 3.73ZM12 8.23C11.17 8.23 10.5 7.56 10.5 6.73C10.5 5.9 11.17 5.23 12 5.23C12.83 5.23 13.5 5.9 13.5 6.73C13.5 7.56 12.83 8.23 12 8.23Z" fill="#666666" className="icon_svg-fill_as_stroke"></path><path d="M6.45 21V20.25H3.75V12.81C3.75 12.11 4.52 10.75 6.3 10.75C6.79 10.75 7.18 10.86 7.5 11.01C7.81 10.6 8.19 10.23 8.63 9.92C7.97 9.49 7.17 9.25 6.3 9.25C3.66 9.25 2.25 11.32 2.25 12.81V21C2.25 21.41 2.59 21.75 3 21.75H6.59C6.5 21.51 6.45 21.26 6.45 21Z" fill="#666666" className="icon_svg-fill_as_stroke"></path><path d="M7.95 21C7.95 21.41 8.29 21.75 8.7 21.75H15.3C15.71 21.75 16.05 21.41 16.05 21V13.91C16.05 12.42 14.64 10.35 12 10.35C9.36 10.35 7.95 12.42 7.95 13.91V21ZM9.45 13.91C9.45 13.21 10.22 11.85 12 11.85C13.78 11.85 14.55 13.22 14.55 13.91V20.25H9.45V13.91Z" fill="#666666" className="icon_svg-fill_as_stroke"></path></svg>
          </div>



          <div onClick = {() => window.location.href = '/notifications'} className="qHeader__icon">
          <svg  width="29" height="29" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.88 14.95L20.48 14.54C20.22 14.27 19.98 14 19.76 13.73C19.57 13.49 19.4 13.27 19.26 13.07C19.07 12.79 19 12.62 18.97 12.54C18.93 12.45 18.82 12.09 18.74 11.12C18.69 10.51 18.67 9.81 18.68 9.12C18.68 9.05 18.68 8.97 18.68 8.87C18.68 5.22 15.68 2.25 12 2.25C8.32 2.25 5.32 5.23 5.32 8.89V9.11C5.33 9.82 5.31 10.51 5.26 11.13C5.19 12.1 5.07 12.47 5.03 12.55C5 12.63 4.92 12.8 4.74 13.07C4.6 13.27 4.44 13.49 4.24 13.73C4.02 14 3.78 14.27 3.52 14.54L3.17 14.9C2.78 15.27 2.56 15.78 2.56 16.32V17.1C2.56 17.96 3.26 18.65 4.12 18.65H8.23C8.58 20.41 10.14 21.75 12.01 21.75C13.88 21.75 15.44 20.42 15.79 18.65H19.9C20.76 18.65 21.46 17.95 21.46 17.1V16.32C21.44 15.78 21.22 15.26 20.88 14.95ZM12 20.25C10.97 20.25 10.1 19.58 9.78 18.65H14.22C13.9 19.58 13.03 20.25 12 20.25Z" fill="#666666" className="icon_svg-fill_as_stroke"></path></svg>
          </div>


        </div>
        <div className='header-icon'>
      <div className='Header_search'>
   <SearchOutlinedIcon className='searchicon'/>
    <input   type="text" placeholder="       Search questions" /></div>
    </div>

        <div className='header-icon'>
<button className='header_trypro'>Try Quora+</button>
    </div>


    <div className='header-icon'>
<div className='header_profile'>
<img className="q-image" src="https://qph.cf2.quoracdn.net/main-thumb-1117473676-50-dxduoxwnvzyinoqfzvezxitxfhnkumwl.jpeg"  alt="Nikhil"></img>
</div>
</div>


<div className='header-icon'>

    <svg className='header_language'  width="29" height="29" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25C6.62 2.25 2.25 6.62 2.25 12C2.25 17.38 6.62 21.75 12 21.75C17.38 21.75 21.75 17.38 21.75 12C21.75 6.62 17.38 2.25 12 2.25ZM19.34 8.25H15.82C15.31 6.17 14.43 4.78 13.69 3.92C16.16 4.44 18.22 6.07 19.34 8.25ZM14.75 12C14.75 12.83 14.69 13.57 14.59 14.25H9.41C9.31 13.57 9.25 12.83 9.25 12C9.25 11.17 9.31 10.43 9.41 9.75H14.59C14.69 10.43 14.75 11.17 14.75 12ZM12 19.66C11.42 19.17 10.34 17.99 9.72 15.75H14.28C13.66 17.99 12.58 19.16 12 19.66ZM3.75 12C3.75 11.22 3.87 10.47 4.07 9.75H7.9C7.81 10.44 7.75 11.18 7.75 12C7.75 12.82 7.81 13.56 7.9 14.25H4.07C3.87 13.53 3.75 12.78 3.75 12ZM9.72 8.25C10.34 6.01 11.43 4.84 12 4.34C12.58 4.83 13.66 6.01 14.28 8.25H9.72ZM10.31 3.92C9.57 4.78 8.69 6.17 8.18 8.25H4.66C5.78 6.07 7.84 4.44 10.31 3.92ZM4.66 15.75H8.18C8.69 17.83 9.57 19.22 10.31 20.08C7.84 19.56 5.78 17.93 4.66 15.75ZM13.69 20.08C14.43 19.22 15.31 17.83 15.82 15.75H19.34C18.22 17.93 16.16 19.56 13.69 20.08ZM19.93 14.25H16.1C16.19 13.56 16.25 12.82 16.25 12C16.25 11.18 16.19 10.44 16.1 9.75H19.93C20.13 10.47 20.25 11.22 20.25 12C20.25 12.78 20.13 13.53 19.93 14.25Z" fill="#666666" className="icon_svg-fill_as_stroke"></path></svg>

</div>


        <div className="qHeader__Rem">
          <div
            style={{
              border: "1px solid lightgray",
              borderRadius: "50%",
            }}
            className="qHeader__avatar"
          >
            {/* <Avatar
              onClick={handleLogout}
              className="Avatar"
              src={
                "http://tinygraphs.com/labs/isogrids/hexa16/tinygraphs?theme=heatwave&numcolors=4&size=220&fmt=svg"
              }
            /> */}
          </div>
          <button className="myBtn header_addquestion" onClick={() => setIsModalOpen(true)}>Add Question</button>
          <Modal
            open={IsmodalOpen}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            closeIcon={Close}
            closeOnOverlayClick={false}
            center
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          >







<div className="myModal-body">
      <div className="firstQuestion">
        <h2>Add Question!</h2>
        <p>
          <h4 className='firsth4'>How to quickly get a good answer:</h4>
          <ul>
            <li>Keep your question short and to the point</li>
            <li>Check for grammar or spelling errors</li>
            <li>Phrase it like a question</li>
          </ul>
        </p>
      </div>
            <div className="modal__info">
              {/* <Avatar
                className="avatar"
                src={
                  "http://tinygraphs.com/labs/isogrids/hexa16/tinygraphs?theme=heatwave&numcolors=4&size=220&fmt=svg"
                }
              /> */}
              {/* <img src="http://tinygraphs.com/squares/helloworld" /> */}
              {/* <p>{user?.disPlayName ? user?.disPlayName : user?.email} asked</p> */}
            {/* </div>
            <div className="modal__Field">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Start your question with 'What', 'How', 'Why', etc. "
              /> */}
<form className="modal__Field">
        <input 
      // here we are adding this script because we will use usestate function here to add image 
      value={input}
         onChange={(e)=> setInput(e.target.value)}
        className="questionForm" type="text" name="question" placeholder="Start your question with &quot;What&quot;, &quot;Why&quot;, &quot;How&quot;, etc." required maxlength="800" wrap="hard"/>
</form>

        
            </div>  
            <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                className="modal__fieldLink"
              >
              
                <input
                  style={{
                    width: "100%",
                    margin: "5px 0",
                    border: "1px solid lightgray",
                    padding: "10px",
                    outline: "2px solid #000",
                  }}
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  type="text"
                  placeholder="Optional: include a image link that gives context"
                ></input>
                {inputUrl !== "" && (
                  <img style={{
                    height: "40vh",
                    objectFit: "contain"
                  }} src={inputUrl} alt=""></img>
                )}
              </div>
{/* 
            <input type='file'  ref={inputimageRef} className='addimage'onChange={(e) => setInputUrl(e.target.value)}style={{
        display:"none",
}}/>
<p onClick={()=>{handleImageClick()}} className='imageaddtext'>Click to add <FilterIcon className='imgicon'/></p> */}



<div className="myModal-footer">
        <button 
        //here we will apply onclick function like when we click on add question button the question will get ad
        onClick={handleQuestion} 
        className="submitBtn" type="submit" form="question">Add Question</button>
         <form action="" className="form">
          <input className="addAnon" type="checkbox" name="anonymous" value="Add anonymously"/>
          <label for="addAnon" class="addAnon">Add anonymously</label>
        </form>
        <span class="cancel" onClick={() => setIsModalOpen(false)}>Cancel</span>
      </div>
            </div> 
          </Modal>
        </div>
      </div>
    </div>

  );
}




export default QHeader
