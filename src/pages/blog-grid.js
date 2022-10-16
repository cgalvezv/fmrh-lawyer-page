import Link from 'next/link'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import Pagination from '../common/Pagination'
import Layout from '../components/layout/Layout'
import blogData from '../data/blog_data.json'

function BlogGrid() {
  return (
    <>
     <Layout>
    <Breadcrumb title="Blog Grid" pageName="Blog Grid" />
    <div className="blog-grid-section pt-120 pb-120">
  <div className="container">
    <div className="grid-wrap">
  
    </div>


    <div className="row justify-content-center">
        
      <div className="col-lg-4 col-md-6 col-sm-10 order-lg-1 order-3">
      
        <div className="blog-single1 style-2">
          <div className="image">
            <span className="blog-badge">Violence</span>
            <Link href="/blog-details"><a><img src="assets/images/blog/bgrid-1.png" className="img-fluid" alt="image" /></a></Link>
          </div>
          <div className="text">
            <div className="post-meta">
              <div className="date">20 May, 2022</div>
              <Link href="/blog-details" className="comment"><a>Comments (20)</a></Link>
            </div>
            <h4><Link href="/blog-details"><a>In a augue sit amet erat Suspe eleifend suscipit issen.</a></Link></h4>
          </div>
        </div>
        <div className="blog-single1 style-2">
          <div className="image">
            <span className="blog-badge">Helth Care</span>
            <Link href="/blog-details"><a><img src="assets/images/blog/bgrid-2.png" className="img-fluid" alt="image" /></a></Link>
          </div>
          <div className="text">
            <div className="post-meta">
              <div className="date">20 May, 2022</div>
              <Link href="/blog-details" className="comment"><a>Comments (20)</a></Link>
            </div>
            <h4><Link href="/blog-details"><a>In a augue sit amet erat Suspe eleifend suscipit issen.</a></Link></h4>
          </div>
        </div>
        <div className="blog-single1 style-2">
          <div className="image">
            <span className="blog-badge">Insurance</span>
            <Link href="/blog-details"><a><img src="assets/images/blog/bgrid-3.png" className="img-fluid" alt="image" /></a></Link>
          </div>
          <div className="text">
            <div className="post-meta">
              <div className="date">20 May, 2022</div>
              <Link href="/blog-details" className="comment"><a>Comments (20)</a></Link>
            </div>
            <h4><Link href="/blog-details"><a>In a augue sit amet erat Suspe eleifend suscipit issen.</a></Link></h4>
          </div>
        </div>
        <div className="blog-single1 style-2">
          <div className="image">
            <span className="blog-badge">Injury</span>
            <Link href="/blog-details"><a><img src="assets/images/blog/bgrid-4.png" className="img-fluid" alt="image" /></a></Link>
          </div>
          <div className="text">
            <div className="post-meta">
              <div className="date">20 May, 2022</div>
              <Link href="/blog-details" className="comment"><a>Comments (20)</a></Link>
            </div>
            <h4><Link href="/blog-details"><a>In a augue sit amet erat Suspe eleifend suscipit issen.</a></Link></h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10 order-2">
        <div className="blog-single1 style-2">
          <div className="image">
            <span className="blog-badge">Education</span>
            <Link href="/blog-details"><a><img src="assets/images/blog/bgrid-5.png" className="img-fluid" alt="image" /></a></Link>
          </div>
          <div className="text">
            <div className="post-meta">
              <div className="date">20 May, 2022</div>
              <Link href="/blog-details" className="comment"><a>Comments (20)</a></Link>
            </div>
            <h4><Link href="/blog-details"><a>In a augue sit amet erat Suspe eleifend suscipit issen.</a></Link></h4>
          </div>
        </div>
        <div className="blog-single1 style-2">
          <div className="image">
            <span className="blog-badge">Real Estate</span>
            <Link href="/blog-details"><a><img src="assets/images/blog/bgrid-6.png" className="img-fluid" alt="image" /></a></Link>
          </div>
          <div className="text">
            <div className="post-meta">
              <div className="date">20 May, 2022</div>
              <Link href="/blog-details" className="comment"><a>Comments (20)</a></Link>
            </div>
            <h4><Link href="/blog-details"><a>In a augue sit amet erat Suspe eleifend suscipit issen.</a></Link></h4>
          </div>
        </div>
        <div className="blog-single1 style-2">
          <div className="image">
            <span className="blog-badge">Attorney</span>
            <Link href="/blog-details"><a><img src="assets/images/blog/bgrid-7.png" className="img-fluid" alt="image" /></a></Link>
          </div>
          <div className="text">
            <div className="post-meta">
              <div className="date">20 May, 2022</div>
              <Link href="/blog-details" className="comment"><a>Comments (20)</a></Link>
            </div>
            <h4><Link href="/blog-details"><a>In a augue sit amet erat Suspe eleifend suscipit issen.</a></Link></h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 order-lg-3 order-1">
        <div className="row">
          <div className="col-lg-12 col-md-6">
            <div className="blog-single1 style-2">
              <div className="image">
                <span className="blog-badge">Financial</span>
                <Link href="/blog-details"><a><img src="assets/images/blog/bgrid-8.png" className="img-fluid" alt="image" /></a></Link>
              </div>
              <div className="text">
                <div className="post-meta">
                  <div className="date">20 May, 2022</div>
                  <Link href="/blog-details" className="comment"><a>Comments (20)</a></Link>
                </div>
                <h4><Link href="/blog-details"><a>In a augue sit amet erat Suspe eleifend suscipit issen.</a></Link></h4>
              </div>
            </div>
            <div className="blog-single1 style-2">
              <div className="image">
                <span className="blog-badge">Drug</span>
                <Link href="/blog-details"><a><img src="assets/images/blog/bgrid-9.png" className="img-fluid" alt="image" /></a></Link>
              </div>
              <div className="text">
                <div className="post-meta">
                  <div className="date">20 May, 2022</div>
                  <Link href="/blog-details" className="comment"><a>Comments (20)</a></Link>
                </div>
                <h4><Link href="/blog-details"><a>In a augue sit amet erat Suspe eleifend suscipit issen.</a></Link></h4>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-6">
            <div className="blog-single1 style-2">
              <div className="image">
                <span className="blog-badge">Offence</span>
                <Link href="/blog-details"><a><img src="assets/images/blog/bgrid-10.png" className="img-fluid" alt="image" /></a></Link>
              </div>
              <div className="text">
                <div className="post-meta">
                  <div className="date">20 May, 2022</div>
                  <Link href="/blog-details" className="comment"><a>Comments (20)</a></Link>
                </div>
                <h4><Link href="/blog-details"><a>In a augue sit amet erat Suspe eleifend suscipit issen.</a></Link></h4>
              </div>
            </div>
            <div className="blog-single1 style-2">
              <div className="image">
                <span className="blog-badge">Violence</span>
                <Link href="/blog-details"><a><img src="assets/images/blog/bgrid-11.png" className="img-fluid" alt="image" /></a></Link>
              </div>
              <div className="text">
                <div className="post-meta">
                  <div className="date">20 May, 2022</div>
                  <Link href="/blog-details" className="comment"><a>Comments (20)</a></Link>
                </div>
                <h4><Link href="/blog-details"><a>In a augue sit amet erat Suspe eleifend suscipit issen.</a></Link></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination/>
  </div>
</div>

    </Layout>  
    </>
  )
}

export default BlogGrid