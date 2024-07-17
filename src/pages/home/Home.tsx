import React from 'react'
import './Home.css'
import './lightbox.min.css'
function Home() {
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

                <div className="left-column">
                    <div className="card card-left1 mb-4" >
                        <img src="/img/photo-1455448972184-de647495d428.jpg" alt="" className="card-img-top img-fluid" />
                        <div className="card-body text-center ">
                            <img src="/img/avatar-dhg.png" alt="img" width="120px" height="120px" className="rounded-circle mt-n5" />
                            <h5 className="card-title">Dave Gamache</h5>
                            <p className="card-text text-justify mb-2">I wish i was a little bit taller, wish i was a baller, wish i had a girl… also.</p>
                            <ul className="list-unstyled nav justify-content-center">
                               <a href="#" className="text-dark text-decoration-none"> <li className="nav-item">Friends <br /> <strong>12M</strong></li></a>
                              <a href="#" className="text-dark text-decoration-none"> <li className="nav-item">Enimes <br /> <strong>1</strong></li></a> 
                            </ul>

                        </div>




                    </div>
                    <div className="card shadow-sm card-left2 mb-4">

                        <div className="card-body">

                                <h5 className="mb-3 card-title">Hakkında <small><a href="#" className="ml-1">Düzenle</a></small></h5>
                                <p className="card-text"> <i className="fas fa-calendar-week mr-2" style={{width:'30px'}}></i>Doğum Tarihi: </p>
                                <p className="card-text"> <i className="far fa-building mr-2" style={{width:'30px'}}></i>Ünvan: </p>
                                <p className="card-text"> <i className="fas fa-home mr-2" style={{width:'30px'}}></i>İletişim: </p>
                                <p className="card-text"> <i className="fas fa-map-marker mr-2" style={{width:'30px'}}></i>Adres: </p>

                        </div>
                     
                    </div>
                    <div className="card shadow-sm card-left3 mb-4">

                        <div className="card-body">
                            <h5 className="card-title">Paylaşımlarım<small className="ml-2"><a href="#"></a></small></h5>

                            <div className="row">
                                <div className="col-6 p-1">
                                    <a href="/img/left1.jpg" data-lightbox="id" ><img src="/img/left1.jpg" alt="img" className="img-fluid my-2"/></a>  
                                    <a href="/img/left2.jpg"data-lightbox="id"><img src="/img/left2.jpg" alt="img" className="img-fluid my-2"/></a>
                                    <a href="/img/left3.jpg"data-lightbox="id"><img src="/img/left3.jpg" alt="img" className="img-fluid my-2"/></a>
                                </div>
                                <div className="col-6 p-1">
                                        <a href="/img/left4.jpg"data-lightbox="id"><img src="/img/left4.jpg" alt="img" className="img-fluid my-2"/></a>
                                        <a href="/img/left5.jpg"data-lightbox="id"><img src="/img/left5.jpg" alt="img" className="img-fluid my-2"/></a>
                                        <a href="/img/left6.jpg"data-lightbox="id"><img src="/img/left6.jpg" alt="img" className="img-fluid my-2"/></a>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-6" >


                <div className="middle-column">


                    <div className="card" >
                        <div className="card-header bg-transparent">
                            <form className="form-inline">
                                <div className="input-group w-100">
                                    <img src='http://picsum.photos/100/100' width={'60px'} height={'60px'} style={{margin: '7px', borderRadius: '50%'}}/>
                                    <textarea rows={5} name="message" id="message" placeholder="Message" className="form-control form-control-sm" />
                                    <div className="input-group-append" style={{margin: '2px'}}>
                                            <div className="input-group-text" style={{width: '60px', height:'60px'}}>
                                                <i className="fa-solid fa-arrow-up-from-bracket fa-xl ms-2"></i>
                                            </div>
                                   </div>
                                </div>
                            </form>
                        </div>
                                               
                        <div className="card-body">

                            <div className="media">
                                <img src="/img/avatar-dhg.png" alt="img" width="55px" height="55px" className="rounded-circle mr-3" />

                                <div className="media-body">
                                    <h5>Dave Gamache</h5>
                                    <p className="card-text text-justify">Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

                                

                                    <div className="row no-gutters mb-3">
                                        <div className="col-6 p-1 text-center">

                                                <img src="/img/adventure-alps-clouds-2259810.jpg" alt="" className="img-fluid mb-2"/>
                                                <img src="/img/aerial-view-architectural-design-buildings-2228123.jpg" alt="" className="img-fluid" />
                                    

                                        </div>

                                        <div className="col-6 p-1 text-center">

                                                <img src="/img/celebration-colored-smoke-dark-2297472.jpg" alt="" className="img-fluid mb-2" />
                                                <img src="/img/bodybuilding-exercise-fitness-2294361.jpg" alt=""className="img-fluid" />
                                    

                                        </div>


                                    </div>








                                
                                    <div className="media mb-3">
                                            <img src="/img/avatar-dhg.png" alt="img" width="45px" height="45px" className="rounded-circle mr-2" />
                                            <div className="media-body">
                                                    <p className="card-text text-justify">Jacon Thornton: Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.</p>

                                            </div>


                                    </div>

                                    
                                    <div className="media">
                                            <img src="/img/avatar-mdo.png" alt="img" width="45px" height="45px" className="rounded-circle mr-2"/>
                                            <div className="media-body">
                                                    <p className="card-text text-justify">Mark Otto: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

                                            </div>


                                    </div>

                                    
                                    



                                </div>
                                <small>5min</small>
                                


                            </div>


                            



                        </div>
                                  
                        <hr />

                        <div className="card-body">

                            <div className="media">
                                    <img src="/img/avatar-fat.jpg" alt="img" width="55px" height="55px" className="rounded-circle mr-3"/>

                                <div className="media-body">
                                        <h5>Jacob Thornton</h5>
                                        <p className="text-justify">Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>



                                </div>

                                <small>14 min</small>

                            </div>





                        </div>
                        <hr />

                        <div className="card-body">

                            <div className="media">

                                    <img src="/img/avatar-mdo.png" alt="img" width="55px" height="55px" className="rounded-circle mr-3"/>
                                    <div className="media-body">
                                        <h5>Mark Otto</h5>
                                        <p className="text-justify">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                                    <a href="/img/mid5.jpg" data-lightbox="id"><img src="/img/mid5.jpg" alt="" className="img-fluid shadow-sm img-thumbnail"/>   </a>   

                                    </div>


                                    <small className="text-muted">10 min</small>



                            </div>




                        </div>


                    </div>


                </div>

            </div>

            <br/> <br/> <br/><br/> <br /> <br />

            <div className="col-12 col-lg-3">


                <div className="right-column">

                    <div className="card shadow-sm mb-4" >
                        <div className="card-body">
                            <h6 className="card-title">Sponsored</h6>
                            <img src="/img/right1.jpg" alt="card-img" className="card-img mb-3"/>
                            <p className="card-text text-justify"> <span className="h6">It might be time to visit Iceland.</span> Iceland is so chill, and everything looks cool here. Also, we heard the people are pretty nice.  What are you waiting for?</p>
                            <a href="#" className="btn btn-outline-info card-link btn-sm">Buy a ticket</a>


                        </div>

                    </div>


                    <div className="card shadow-sm mb-4">

                        <div className="card-body">

                                <h6 className="card-title ">Likes <a href="#" className="ml-1"><small>.View All</small> </a> </h6>
                                <div className="row no-gutters d-none d-lg-flex">
                                    <div className="col-6 p-1">
                                            <img src="/img/avatar-dhg.png" alt="img" width="80px" height="80px" className="rounded-circle mb-4"/>
                                            <img src="/img/avatar-fat.jpg" alt="img" width="80px" height="80px" className="rounded-circle"/>



                                    </div>
                                    <div className="col-6 p-1 text-left">
                                        <h6>Jacob Thornton @fat</h6>
                                        <a href="#" className="btn btn-outline-info btn-sm mb-3"><i className="fas fa-user-friends"></i>Follow </a>

                                        <h6>Mark otto</h6>
                                        <a href="#" className="btn btn-outline-info  btn-sm"><i className="fas fa-user-friends"></i>Follow </a>

                                    </div>

                                </div>

                        </div>

                        <div className="card-footer">

                            <p className="lead" style={{fontSize: '18px'}}>Dave really likes these nerds, no one knows why though.</p>
                        </div>
                        


                    </div>

                    <div className="card shadow-sm">
                        <div className="card-body">
                            <p>&copy; 2018 Bootstrap



                                    <a href="#">About</a>
                                    <a href="#">Help</a>
                                    <a href="#">Terms</a>
                                    <a href="#">Privacy</a>
                                    <a href="#">Cookies</a>
                                    <a href="#">Ads </a>
                                    <a href="#">Info</a>
                                    <a href="#">Brand</a>
                                    <a href="#">Blog</a>
                                    <a href="#">Status</a>
                                    <a href="#">Apps</a>
                                    <a href="#">Jobs</a>
                                    <a href="#">Advertise</a>
                                
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            </p>
                        </div>

                    </div>









                </div>

                
                

























            </div>

       </div>
    </div>
    </>
  )
}

export default Home