import Link from 'next/link'
import React from 'react'

function Blog4() {
  return (
    <>
     <div className="blog-section pb-120 pt-120">
        <div className="container-fluid">
          <div className="row">
            <div className="section-title-area sibling2">
              <div className="marquee">
                <div>
                  <span>Articale Post</span>
                  <span>Articale Post</span>
                </div>
              </div>
              <div className="section-title sibling2">
                <span>LATEST BLOG</span>
                <h2>Read and Learn from our Daily articles.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="200ms">
              <div className="blog-single2 sibling2">
                <div className="image">
                  <span className="blog-badge">By, Admin</span>
                  <Link href="/blog-details"><a><img src="assets/images/blog/blog-single21.png" className="img-fluid" alt="image" /></a></Link>
                </div>
                <div className="content">
                  <ul className="post-meta-list">
                    <li>Skirmish</li>
                    <li>22.05.2022</li>
                  </ul>
                  <h5><Link href="/blog-details"><a>Ut faucibus sit amet metus utoi porttitor sem et posuere.</a></Link></h5>
                  <p>Integer quis libero semper, interdum odion boi non, consequat sem.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms">
              <div className="blog-single2 sibling2">
                <div className="image">
                  <span className="blog-badge">By, Admin</span>
                  <Link href="/blog-details"><a><img src="assets/images/blog/blog-single22.png" className="img-fluid" alt="image" /></a></Link>
                </div>
                <div className="content">
                  <ul className="post-meta-list">
                    <li>Skirmish</li>
                    <li>22.05.2022</li>
                  </ul>
                  <h5><Link href="/blog-details"><a>hendrerit mi at eleifend massin porttitor sem et posuere.</a></Link></h5>
                  <p>Integer quis libero semper, interdum odion boi non, consequat sem.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="600ms">
              <div className="blog-single2 sibling2">
                <div className="image">
                  <span className="blog-badge">By, Admin</span>
                  <Link href="/blog-details"><a><img src="assets/images/blog/blog-single23.png" className="img-fluid" alt="image" /></a></Link>
                </div>
                <div className="content">
                  <ul className="post-meta-list">
                    <li>Skirmish</li>
                    <li>22.05.2022</li>
                  </ul>
                  <h5><Link href="/blog-details"><a>gravida elementu an mattisinai porttitor sem et posuere.</a></Link></h5>
                  <p>Integer quis libero semper, interdum odion boi non, consequat sem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default Blog4