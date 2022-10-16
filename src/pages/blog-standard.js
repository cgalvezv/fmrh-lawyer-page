import Link from "next/link";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Pagination from "../common/Pagination";
import BlogCategoryWidget from "../components/blog/BlogCategoryWidget";
import BlogCommentsSlider from "../components/blog/BlogCommentsSlider";
import BlogSearchWidget from "../components/blog/BlogSearchWidget";
import BlogTagWidget from "../components/blog/BlogTagWidget";
import RecentBlogPost from "../components/blog/RecentBlogPost";
import Layout from "../components/layout/Layout";

function BlogStandard() {
  return (
    <>
      <Layout>
        <Breadcrumb title="Blog Standard" pageName="Blog Standard"/>
        <div className="blog-standard-section pt-120 pb-120">
  <div className="container">
    <div className="row gy-5">
      <div className="col-lg-8">
        <div className="blog-standard-area">
          <div className="blog-standard-single">
            <div className="image">
              <span className="blog-badge">Violence</span>
              <Link href="/blog-details"><a><img src="assets/images/blog/blog-stand1.png" className="img-fluid" alt="image" /></a></Link>
            </div>
            <div className="text">
              <h2><Link href="/blog-details"><a>Nullam feugiat et quam in accumsan this is awsome blog.</a></Link></h2>
              <ul className="post-meta-list">
                <li><img src="assets/images/icons/user.svg" alt="image" /><span>By, Admin</span></li>
                <li><img src="assets/images/icons/calendr.svg" alt="image" /><span>25 May, 2022</span></li>
                <li><img src="assets/images/icons/bubble.svg" alt="image" /><span>Comments (02)</span></li>
              </ul>
              <p className="para">Integer quis libero semper, interdum odio non, consequat sem. Quisque woner pretium, quamtenti utendi lacinianti ultricies, est urna cursus purus, ut tristique purusenali pretium, quam ut laciniaun est urna cursusvoli purus, ut tristique purusenali mauris.....</p>
              <Link href="/blog-details" ><a className="read-more-btn">Continue Reading<i className="bi bi-arrow-right" /></a></Link>
            </div>
          </div>
          <div className="blog-standard-single">
            <div className="image">
              <span className="blog-badge">Violence</span>
              <Link href="/blog-details"><a><img src="assets/images/blog/blog-stand2.png" className="img-fluid" alt="image" /></a></Link>
            </div>
            <div className="text">
              <h2><Link href="/blog-details"><a>Pellentesque convallis fermentum leo. this is awsome blog.</a></Link></h2>
              <ul className="post-meta-list">
                <li><img src="assets/images/icons/user.svg" alt="image" /><span>By, Admin</span></li>
                <li><img src="assets/images/icons/calendr.svg" alt="image" /><span>25 May, 2022</span></li>
                <li><img src="assets/images/icons/bubble.svg" alt="image" /><span>Comments (02)</span></li>
              </ul>
              <p className="para">Integer quis libero semper, interdum odio non, consequat sem. Quisque woner pretium, quamtenti utendi lacinianti ultricies, est urna cursus purus, ut tristique purusenali pretium, quam ut laciniaun est urna cursusvoli purus, ut tristique purusenali mauris.....</p>
              <Link href="/blog-details" ><a className="read-more-btn">Continue Reading<i className="bi bi-arrow-right" /></a></Link>
            </div>
          </div>
          <div className="blog-standard-single">
            <div className="image">
              <span className="blog-badge">Violence</span>
              <Link href="/blog-details"><a><img src="assets/images/blog/blog-stand3.png" className="img-fluid" alt="image" /></a></Link>
            </div>
            <div className="text">
              <h2><Link href="/blog-details"><a>Integer et mauris id purus consequat this is awsome blog.</a></Link></h2>
              <ul className="post-meta-list">
                <li><img src="assets/images/icons/user.svg" alt="image" /><span>By, Admin</span></li>
                <li><img src="assets/images/icons/calendr.svg" alt="image" /><span>25 May, 2022</span></li>
                <li><img src="assets/images/icons/bubble.svg" alt="image" /><span>Comments (02)</span></li>
              </ul>
              <p className="para">Integer quis libero semper, interdum odio non, consequat sem. Quisque woner pretium, quamtenti utendi lacinianti ultricies, est urna cursus purus, ut tristique purusenali pretium, quam ut laciniaun est urna cursusvoli purus, ut tristique purusenali mauris.....</p>
              <Link href="/blog-details" ><a className="read-more-btn">Continue Reading<i className="bi bi-arrow-right" /></a></Link>
            </div>
          </div>
        </div>
        <Pagination/>
        
      </div>
      <div className="col-lg-4">
        <div className="blog-sidebar">
         <BlogSearchWidget/>
        <BlogCategoryWidget/>
          <RecentBlogPost/>
          
          <BlogTagWidget/>
       
          <BlogCommentsSlider/>
          
        </div>
      </div>
    </div>
  </div>
</div>

      </Layout>
    </>
  );
}

export default BlogStandard;
