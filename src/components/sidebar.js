import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1><b>MAC OS</b></h1>
              <a href="https://www.apple.com/vn/" target="_blank" rel="noopener noreferrer">Apple Vietnam</a>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Lịch Sử</a></li>
                  <li><a href="#about" data-nav-section="about">Phân Loại</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#comment" data-nav-section="comment">Đánh giá</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/ngocquangpn" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a>
                <a href="https://www.instagram.com/ngocquangpn/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
            <p><small>
              Life is beautiful 
              </small></p>
              <p><small>
                  Made by <a href="https://www.facebook.com/ngocquangpn" target="_blank" rel="noopener noreferrer">Mr.Q</a>
                  <span className="email"><i className="icon-mail"></i> Quangphamngoc99@gmail.com</span>

              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
