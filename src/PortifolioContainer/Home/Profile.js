import React from 'react'
import '../../style.css';
import Typical from'react-typical'

export default function Profile() {
    return (
        <div className='profile-container'>

            <div className='profile-parent'>

                <div className='profile-details'>

                    <div className='colz'>
                    
                    <div className='colz-icon'>
                        <a href="#">
                            <i className='fa fa-facebook-square'></i>
                        </a>

                        <a href="#">
                            <i className='fa fa-google-plus-square'></i>
                        </a>

                        <a href="#">
                            <i className='fa fa-instagram'></i>
                        </a>

                        <a href="#">
                            <i className='fa fa-youtube-square'></i>
                        </a>

                        <a href="#">
                            <i className='fa fa-twitter'></i>
                        </a>
                        
                    </div>
                        
                    </div>

                    <div className='profile-details-name'>

                        <span className='priamry-text'>

                        {""}
                        Hello, I 'M <span className='highlited-text'>Tawanda</span>



                        </span>
                        
                    </div>

                    <div className='profile-details-role'>

                        <span className='primary-text'>

                            {" "}
                            <h1>

                            {" "}
                            <Typical
                            
                            loop={Infinity}
                            wrapper="p"
                            steps={[
                                "Enthusiastic Dev 💻",1000,
                                "Front-End Developer 🌐",1000,
                                "Flutter Dev 📱",1000,
                                "React/Native Dev 📱",1000,
                                
                            ]}
                            
                            
                            />
                            
                            

                            </h1>

                            <span className='profile-role-tagline'>

                            knack of building application with front and back operations

                            </span>

                        </span>

                        
                    </div>

                    <div className='profile-options'>
                        <button className='primary-btn'>
                            {""}
                            Hire Me{""}
                        </button>
                        <a href="mashanda.png" download="mashanda.png">
                            <button className="highlited-btn">Get Resume</button>
                        </a>
                    </div>
                    
                </div>

                <div className='profile-picture'>

                    <div className='profile-picture-background'>
                        
                    </div>
                    
                </div>

            </div>


            
        </div>
    )
}
