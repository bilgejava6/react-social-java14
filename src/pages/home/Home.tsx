import React, { useEffect } from 'react'
import './Home.css'
import './lightbox.min.css'
import HomeLeft from '../../components/organism/HomeLeft'
import HomeContent from '../../components/organism/HomeContent'
import HomeRight from '../../components/organism/HomeRight'
import { SocialDispatch, useAppSelector } from '../../store'
import { useDispatch } from 'react-redux'
import { fetchgetUserProfile, fetchSearchUserList, IUserProfile } from '../../store/feature/userSlice'
import AddCommentPopup from '../../components/molecules/AddCommentPopup'
import CommentListPopup from '../../components/molecules/CommentListPopup'
import { fetchFollowList } from '../../store/feature/followSlice'
import { clearToken, setToken } from '../../store/feature/authSlice'
function Home() {
  const dispatch = useDispatch<SocialDispatch>();      
  const token = useAppSelector(state => state.auth.token);     
  const userProfile: IUserProfile | null = useAppSelector(state=> state.user.userProfile);
  
  useEffect(()=>{
        dispatch(fetchgetUserProfile(token)).then((data)=>{
             if(data.payload.code!==200){
                localStorage.removeItem('token');
                dispatch(clearToken());
                }
        })
        dispatch(fetchSearchUserList({token: token, userName:''}));
        dispatch(fetchFollowList(token));
  },[]);

  return (
    <>
        <nav className="navbar navbar-expand-md navbar-dark mb-4" style={{backgroundColor:'#3097D1'}}>
            <a href="index.html" className="navbar-brand"><img src="/img/brand-white.png" alt="logo" className="img-fluid" width="80px" height="100px" /></a>

            <button className="navbar-toggler" data-toggle="collapse" data-target="#responsive"><span className="navbar-toggler-icon"></span></button>

            <div className="collapse navbar-collapse" id="responsive">
                <ul className="navbar-nav mr-auto text-capitalize">
                    <li className="nav-item"><a href="index.html" className="nav-link active">home</a></li>
                    <li className="nav-item"><a href="profile.html" className="nav-link">profile</a></li>
                    <li className="nav-item"><a href="#modalview" className="nav-link" data-toggle="modal">messages</a></li>
                    <li className="nav-item"><a href="notification.html" className="nav-link">docs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link d-md-none">growl</a></li>
                    <li className="nav-item"><a href="#" className="nav-link d-md-none">logout</a></li>

                </ul>

            </div>
        </nav>
        <div className="modal fade" id="modalview">
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">

            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-title h4">Messages</div>

                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                    <ul className="list-unstyled">


                        <a href="#" className="text-decoration-none">
                            <li className="media hover-media">
                              
                                    <img src="/img/avatar-dhg.png" alt="img" width="60px" height="60px" className="rounded-circle mr-3" />

                                    <div className="media-body text-dark">
                                            <h6 className="media-header">Jchob Thunder and <strong> 1 others</strong></h6>
                                            <p className="media-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                    </div>

                            </li>
                        </a>
                        <hr className="my-3" />


                        
                        <a href="#" className="text-decoration-none">
                                <li className="media hover-media">
                                  
                                        <img src="/img/avatar-fat.jpg" alt="img" width="60px" height="60px" className="rounded-circle mr-3" />
        
                                        <div className="media-body text-dark">
                                                <h6 className="media-header">Mark Otto and <strong> 3 others</strong></h6>
                                                <p className="media-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        
                                        </div>
        
                                </li>
                        </a>


                        <hr className="my-3" />


                        <a href="#" className="text-decoration-none">
                                <li className="media hover-media">
                                  
                                        <img src="/img/avatar-mdo.png" alt="img" width="60px" height="60px" className="rounded-circle mr-3" />
        
                                        <div className="media-body text-dark">
                                                <h6 className="media-header">Archer andu and <strong> 5 others</strong></h6>
                                                <p className="media-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        
                                        </div>
        
                                </li>
                        </a>

                        <hr className="my-3" />


                        <a href="#" className="text-decoration-none">
                                    <li className="media hover-media">
                                      
                                            <img src="/img/avatar-dhg.png" alt="img" width="60px" height="60px" className="rounded-circle mr-3" />
            
                                            <div className="media-body text-dark">
                                                    <h6 className="media-header">Jchob Thunder and <strong> 1 others</strong></h6>
                                                    <p className="media-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            
                                            </div>
            
                                    </li>
                        </a>

                        <hr className="my-3" />
        
        
                            
                        <a href="#" className="text-decoration-none">
                                    <li className="media hover-media">
                                       
                                            <img src="/img/avatar-fat.jpg" alt="img" width="60px" height="60px" className="rounded-circle mr-3" />
            
                                            <div className="media-body text-dark">
                                                    <h6 className="media-header">Mark Otto and <strong> 3 others</strong></h6>
                                                    <p className="media-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            
                                            </div>
            
                                    </li>
                        </a>
        
        
                        <hr className="my-3" />
        
        
                        <a href="#" className="text-decoration-none">
                                    <li className="media hover-media">
                                       
                                            <img src="/img/avatar-mdo.png" alt="img" width="60px" height="60px" className="rounded-circle mr-3" />
            
                                            <div className="media-body text-dark">
                                                    <h6 className="media-header">Archer andu and <strong> 5 others</strong></h6>
                                                    <p className="media-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            
                                            </div>
            
                                    </li>
                        </a>

                        
                        <hr className="my-3" />
                        <a href="#" className="text-decoration-none">
                                        <li className="media hover-media">
                                           
                                                <img src="/img/avatar-dhg.png" alt="img" width="60px" height="60px" className="rounded-circle mr-3" />
                
                                                <div className="media-body text-dark">
                                                        <h6 className="media-header">Jchob Thunder and <strong> 1 others</strong></h6>
                                                        <p className="media-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                
                                                </div>
                
                                        </li>
                        </a>
                                    
                        <hr className="my-3" />
                
                
                                    
                        <a href="#" className="text-decoration-none">
                                            <li className="media hover-media">
                                               
                                                    <img src="/img/avatar-fat.jpg" alt="img" width="60px" height="60px" className="rounded-circle mr-3" />
                    
                                                    <div className="media-body text-dark">
                                                            <h6 className="media-header">Mark Otto and <strong> 3 others</strong></h6>
                                                            <p className="media-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    
                                                    </div>
                    
                                            </li>
                        </a>
                    
                        <hr className="my-3" />
                
                
                        <a href="#" className="text-decoration-none">
                                            <li className="media hover-media">
                                               
                                                    <img src="/img/avatar-mdo.png" alt="img" width="60px" height="60px" className="rounded-circle mr-3" />
                    
                                                    <div className="media-body text-dark">
                                                            <h6 className="media-header">Archer andu and <strong> 5 others</strong></h6>
                                                            <p className="media-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    
                                                    </div>
                    
                                            </li>
                        </a>
    
    


                    </ul>
                </div>
            </div>
        </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-3">
                    <HomeLeft user={userProfile} />                    
                </div>

                <div className="col-12 col-lg-6" >
                    <HomeContent />
                </div>

                <br/> <br/> <br/><br/> <br /> <br />

                <div className="col-12 col-lg-3">
                    <HomeRight />
                </div>
            </div>
            <AddCommentPopup />
            <CommentListPopup />
        </div>
    </>
  )
}

export default Home