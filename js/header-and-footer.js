class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `          
        <header class="theme-main-menu sticky-menu theme-menu-one">
        <div class="inner-content">
            <div class="d-flex align-items-center justify-content-between">
                <div class="logo"><a href="/"><img src="${basePath}images/logo/logo-white.png" alt="" width="147"></a>
                </div>
                <nav class="navbar navbar-expand-lg">
                    <button class="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="d-block d-lg-none">
                                <div class="logo"><a href="/"><img src="${basePath}images/logo/logo-color.png" alt=""
                                            width="127"></a></div>
                            </li>
                            <li class="nav-item dropdown mega-dropdown">
                                <a class="nav-link dropdown-toggle" href="/">Home</a>

                            </li>
                            <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle" href="${basePath}services" role="button" 
                                    data-bs-auto-close="outside" aria-expanded="false">Services</a>
                                <ul class="dropdown-menu">
                                    <li><a href="${basePath}ssi-service" class="dropdown-item"><span>Self-Sovereign
                                                Identity</span></a></li>
                                    <li><a href="${basePath}web3-service" class="dropdown-item"><span>Web 3.0 Development</span></a></li>
                                    <li><a href="${basePath}dev-service" class="dropdown-item"><span>Software Development</span></a></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown mega-dropdown">
                            <a class="nav-link dropdown-toggle" href="${basePath}portfolio">Our Work</a>

                        </li>
                           
                            
                            <li class="nav-item dropdown mega-dropdown">
                                <a class="nav-link dropdown-toggle" href="${basePath}about-us">About us</a>

                            </li>
                            <li class="nav-item dropdown mega-dropdown">
                                <a class="nav-link dropdown-toggle" href="${basePath}blog" >Blog</a>

                            </li>
                            <li class="nav-item dropdown mega-dropdown">
                                <a class="nav-link dropdown-toggle" href="${basePath}contact-us">Contact us</a>

                            </li>
                            
                        </ul>
                        <div class="offcanvas offcanvas-end sidebar-nav" tabindex="-1" id="offcanvasRight">
                        <div class="offcanvas-header">
                          <div class="logo"><a href="/"><img src="${basePath}images/logo/logo-color.png" alt="" width="127"></a>
                          </div>
                          <button type="button" class="close-btn tran3s" data-bs-dismiss="offcanvas" aria-label="Close"><i
                              class="bi bi-x-lg"></i></button>
                        </div>
                  
                        <div class="sidebar-nav-item">
                          <ul class="style-none">
                  
                            <li class="nav-item"><a href="/">Home</a></li>
                            <li class="nav-item"><a href="${basePath}services">Services</a></li>
                            <li class="nav-item"><a href="${basePath}portfolio">Our Work</a></li>
                            <li class="nav-item"><a href="${basePath}career">Careers</a></li>
                            <li class="nav-item"><a href="${basePath}about-us">About us</a></li>
                            <li class="nav-item"><a href="${basePath}blog">Blog</a></li>
                            <li class="nav-item"><a href="${basePath}contact-us">Contact us</a></li>
                          </ul>
                        </div>
                  
                      
                  
                        <div class="address-block">
                          <h4 class="title">Our Address</h4>
                          <p>Yliopistonkatu 4, 00100<br>Helsinki, Finland</p>
                          <p>Want to talk? call us at <br><a href="tel:+358401838373">+358 401 8383 73</a></p>
                        </div>
                        <ul class="d-flex social-icon style-none mt-20">
                          <li><a target="_blank" href="https://instagram.com/nordivohq"><i class="fab fa-instagram"></i></a></li>
                          <li><a target="_blank" href="https://twitter.com/nordivohq"><i class="fab fa-twitter"></i></a></li>
                          <li><a target="_blank" href="https://www.linkedin.com/company/nordivo"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                      </div> <!-- /.sidebar-nav -->
                    </div>
                </nav>
                <div class="right-widget d-flex align-items-center">
                    <button class="sidebar-nav-button d-none d-lg-block" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img
                            src="${basePath}images/icon/icon_02.svg" alt=""></button>
                </div> <!-- /.right-widget -->
            </div>
        </div> <!-- /.inner-content -->
    </header>
          `
  }
}

//Footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
          <!-- Footer -->
          <footer class="vcamp-footer-two pt-150 lg-pt-100">
          <div class="container">
            <div class="row">
              <div class="col-xl-3 col-lg-2 mb-40">
                <div class="logo"><a href="index"><img src="${basePath}images/logo/logo-color.png" alt=""
                      width="127"></a></div>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 mb-40">
                <h5 class="title">Links</h5>
                <ul class="footer-list style-none">
                  <li><a href="/">Home</a></li>
                  <li><a href="${basePath}services">Services</a></li>
                  <li><a href="${basePath}portfolio">Our Work</a></li>
                  <li><a href="${basePath}career">Careers</a></li>
                  <li><a href="${basePath}about-us">About us</a></li>
                  <li><a href="${basePath}blog">Blog</a></li>
                  <li><a href="${basePath}contact-us">Contact us</a></li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-6 mb-40">
                <h5 class="title">Legal</h5>
                <ul class="footer-list style-none">
                  <li><a href="${basePath}legal#terms">Terms & conditions</a></li>
                  <li><a href="${basePath}legal#privacy">Privacy policy</a></li>
                  <li><a href="${basePath}legal#cookies">Cookie policy</a></li>
                </ul>
              </div>
              <div class="col-lg-4 col-md-6 mb-40">
                <div class="newsletter">
                  <h5 class="title">Newsletter</h5>
                  <p>Join to stay updated about us.</p>
                  <form name="newsletter-form" id="newsletter-form">
                    <input type="email" name="email" id="email" placeholder="Enter your email">
                    <button type="submit" name="submit">Sign Up</button>
                    <a id="newsletterDialog" style="display:none;" href="#openModal">Open Modal</a>
                    <div id="openModal" class="modalDialog">
    <div>	<a href="#close" title="Close" class="close">X</a>
        <br/>
        	<h4>Thank you!</h4>

        <p>Thank you for subscribing to our newsletter! Your interest is greatly appreciated, and we're excited to share valuable insights with you. Get ready for a journey of learning and discovery!</p>       
    </div>
</div>
                  </form>
                  <div class="info">We only send interesting and relevant emails.</div>
                </div> <!-- /.newsletter -->
              </div>
            </div>
          </div>
          <div class="container">
            <div class="bottom-footer">
              <div class="row">
                <div class="col-lg-4 order-lg-1 mb-15">
                  <ul class="d-flex justify-content-center justify-content-lg-start footer-nav style-none">
                    <li><a href="${basePath}legal">Privacy & Terms.</a></li>
                    <li><a href="${basePath}contact-us">Contact Us</a></li>
                  </ul>
                </div>
                <div class="col-lg-4 order-lg-3 mb-15">
                  <ul class="d-flex justify-content-center justify-content-lg-end social-icon style-none">
                    <li><a target="_blank" href="https://instagram.com/nordivohq"><i class="fab fa-instagram"></i></a></li>
                    <li><a target="_blank" href="https://twitter.com/nordivohq"><i class="fab fa-twitter"></i></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/company/nordivo"><i
                          class="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
                <div class="col-lg-4 order-lg-2 mb-15">
                  <p class="copyright text-center">© <span id="copyright">                     
                    </span> Nordivo Oy. All rights reserved</p>                  
                </div>
              </div>
            </div>
          </div>
        </footer>
  <!-- Footer -->
  
        `

  }
}


var currentPath = window.location.pathname;
console.log(currentPath)
if (currentPath.includes("/portfolio/")) {
  basePath = "../"
} else {
  basePath = ""
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);


document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))