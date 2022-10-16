import Link from 'next/link'
import React from 'react'

function RecentBlogPost() {
  return (
    <>
      <div className="blog-widget-item">
            <div className="recent-blog">
              <h5 className="blog-widget-title">Recent Post</h5>
              <div className="blog-widget-body">
                <ul className="recent-post-list">
                  <li>
                    <div className="recent-post-item">
                      <div className="recent-post-img">
                        <img src="assets/images/blog/recent-post1.png" alt="image" />
                      </div>
                      <div className="recent-post-content">
                        <span>30th May, 2022</span>
                        <h6><Link href="/blog-details"><a>Quisque laoreet Maece facilisis tristique.</a></Link></h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="recent-post-item">
                      <div className="recent-post-img">
                        <img src="assets/images/blog/recent-post2.png" alt="image" />
                      </div>
                      <div className="recent-post-content">
                        <span>1st Jun, 2022</span>
                        <h6><Link href="/blog-details"><a>Etiam vel diam volutpa pellentesque.</a></Link></h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="recent-post-item">
                      <div className="recent-post-img">
                        <img src="assets/images/blog/recent-post3.png" alt="image" />
                      </div>
                      <div className="recent-post-content">
                        <span>3rd Jun, 2022</span>
                        <h6><Link href="/blog-details"><a>Nunc finibus gravidato porta. Nulla vitae.</a></Link></h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>   
    </>
  )
}

export default RecentBlogPost