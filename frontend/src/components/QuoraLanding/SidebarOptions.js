// import { Add } from "@material-ui/icons";
import React from "react";
import "./SidebarOption.css";
import AddIcon from '@mui/icons-material/Add';

function SidebarOptions() {
  return (
    <div className='sidebaroptions_main'>

    <div className="sidebarOption active">
            <AddIcon className='addicon '/>
            <p className="text ">Create Space</p>
           
          </div>
    
    
    <div className='sidebarOption'>
    
      <img className="sidebarImg1" src="https://qph.cf2.quoracdn.net/main-thumb-ti-3204259-50-kaxpmytkjygsrjwxhniqnepgoluywphc.jpeg" alt="" width="18" height="18"/>
    <p> MEMEs | world </p>
    </div>
    
    <div className='sidebarOption'>
    <img className="sidebarImg2" src="https://qph.cf2.quoracdn.net/main-thumb-ti-2144986-50-zycizndvmgrlpzgvmyqvpczrbshrsxcc.jpeg" alt="" width="18" height="18"/>
    <p> Informative Diaries</p>
    </div>
    
    
    <div className='sidebarOption'>
    <img className="sidebarImg3" src="https://qph.cf2.quoracdn.net/main-thumb-ti-1646645-50-yivziwjmefotolsaxijyzzlqbkwywlgq.jpeg" alt="" width="18" height="18"/>
    <p> India GDP </p>
    </div>
    
    <div className='sidebarOption'>
     <img className="sidebarImg4" src="https://qph.cf2.quoracdn.net/main-thumb-ti-2655873-50-cxdietebidstpmcghblkicdxedvfsiug.jpeg" alt="" width="18" height="18"/>
    <p> IT & Companies</p>
    </div>
    
    
    
    <div className='sidebarOption'>
    <img className="sidebarImg5" src="https://qph.cf2.quoracdn.net/main-thumb-ti-1597745-50-jgefyexjdloqszhzcvgivyfsakbugsni.jpeg" alt="" width="18" height="18"/>
    <p> Memes are Life</p>
    </div>
    
    
    
    <div className='sidebarOption'>
    <img className="sidebarImg6" src="https://qph.cf2.quoracdn.net/main-thumb-ti-1578736-50-qrcddnhqbqymirsnflsoxjbdpvdudoak.jpeg" alt="" width="18" height="18"/>
    <p> Tech Trend </p>
    </div>
    
    
    
    
    <div className='sidebarOption'>
    <img className="sidebarImg7" src="https://qph.cf2.quoracdn.net/main-thumb-ti-862-50-wpftnbhmeklorazswextfhvxnjxiellm.jpeg" alt="" width="18" height="18"/>
    <p> Focused Life</p>
    </div>
    
    
    
    
    </div>
      )
    }

export default SidebarOptions;
