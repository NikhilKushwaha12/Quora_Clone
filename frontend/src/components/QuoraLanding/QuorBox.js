
import React from "react";
import "./QuoraBox.css";
import './QHeader'
export default function QuorBox() {
  return (
    <div className="quoraBox">
      <div className='feedBox_main'>
        <div className='feedBox'>
<img class="AskQuestionIMG" src="https://qph.cf2.quoracdn.net/main-thumb-1117473676-50-dxduoxwnvzyinoqfzvezxitxfhnkumwl.jpeg" width="20" height="20" alt="for Nikhil"/>
<div className='askques'>
  <p>What do you want to ask or share?</p>
  </div>
 </div>


 <div className='askQuesicons'>

 <div className='ask'
 >
 <svg    width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd"><g transform="translate(9 7)"><path d="M3 6v-.5A2.5 2.5 0 1 0 .5 3" stroke-linecap="round" stroke-linejoin="round"></path><circle class="icon_svg-fill_as_stroke" fill="#666" cx="3" cy="8.5" r="1" stroke="none"></circle></g><path d="M7.5 4h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3L9 22v-3H7.5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z" stroke-linejoin="round"></path></g></svg>
<span  className='asktext'>Ask</span>
</div>


<div className='answer'>
<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke-width="1.5" fill="none" fill-rule="evenodd"><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9h0a2 2 0 0 1 2.828 0Z" class="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon_svg-fill_as_stroke" fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path><path d="M14.5 19.5h5v-5m-10-10h-5v5" class="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
<span  className='asktext'>Answer</span>
</div>



<div className='posticon'>
<svg className='svgpost' width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9a2 2 0 0 1 2.828 0Z" class="icon_svg-stroke" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon_svg-fill_as_stroke" fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path></g></svg>
<span  className='asktext'>Post</span>
</div>

</div>

    </div>
    </div>
  );
}
