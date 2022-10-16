import Link from "next/link";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import BlogCategoryWidget from "../components/blog/BlogCategoryWidget";
import BlogCommentsSlider from "../components/blog/BlogCommentsSlider";
import BlogSearchWidget from "../components/blog/BlogSearchWidget";
import BlogTagWidget from "../components/blog/BlogTagWidget";
import RecentBlogPost from "../components/blog/RecentBlogPost";
import Layout from "../components/layout/Layout";

function BlogDetails() {
  return (
    <>
      <Layout>
        <Breadcrumb title="Blog Details" pageName="Blog Details" />
        <div className="blog-details-section pt-120 pb-120">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-8">
                <div className="blog-details-single">
                  <div className="image">
                    <span className="blog-badge">Violence</span>
                    <Link href="/blog-details">
                      <a>
                        <img
                          src="assets/images/blog/blog-details1.png"
                          className="img-fluid"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="text">
                    <h2>
                      <Link href="/blog-details">
                        <a>Nullam feugiat et quam in accumsan.</a>
                      </Link>
                    </h2>
                    <ul className="post-meta-list">
                      <li>
                        <img src="assets/images/icons/user.svg" alt="image" />
                        <span>By, Admin</span>
                      </li>
                      <li>
                        <img
                          src="assets/images/icons/calendr.svg"
                          alt="image"
                        />
                        <span>25 May, 2022</span>
                      </li>
                      <li>
                        <img src="assets/images/icons/bubble.svg" alt="image" />
                        <span>Comments (02)</span>
                      </li>
                    </ul>
                    <p className="para">
                      Integer quis libero semper, interdum odio non, consequat
                      sem. Quisque woner pretium, quamtenti utendi lacinianti
                      ultricies, est urna cursus purus, ut tristique purusenali
                      pretium, quam ut laciniaun est urna cursusvoli purus, ut
                      tristique purusenali mauris.....
                    </p>
                    <p className="para">
                      Vestibulum eget mauris dui. Proin luctus est lacus, eu
                      lobortis orci dignissim at. Ut nec vulputateri nisl.
                      Mauris vel dolor augue. Praesent sit amet eros dui. Sed
                      porta gravida mollis. In odio dolorcoul maximus a finibus
                      eget, euismod vitae tellus. Vivamus condimentum nulla
                      rhoncus ipsum jougara vehicula, quis bibendum massa
                      auctor. Suspendisse potenti. Nam vulputate diam tempus
                      orcilagri rhoncus tincidunt et nec dolor. Curabitur id
                      nunc hendrerit
                    </p>
                  </div>
                  <div className="blockquote-area">
                    <img
                      src="assets/images/icons/bquote1.svg"
                      className="bquote1"
                      alt="image"
                    />
                    <img
                      src="assets/images/icons/bquote2.svg"
                      className="bquote2"
                      alt="image"
                    />
                    <blockquote>
                      {" "}
                      Integer quis libero semper, interdum odio non, consequat
                      sem. Qui woner pretium, tristique purusenali pretium, quam
                      ut laciniaun est urna.quamtenti utendi lacinianti
                      ultricies, est urna cursus purus, ut tristique purusenali
                      pretium
                    </blockquote>
                  </div>
                  <div className="image">
                    <Link href="/blog-details">
                      <a>
                        <img
                          src="assets/images/blog/blog-details2.png"
                          className="img-fluid"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="text">
                    <p className="para">
                      Vestibulum eget mauris dui. Proin luctus est lacus, eu
                      lobortis orci dignissim at. Ut nec vulputateri nisl.
                      Mauris vel dolor augue. Praesent sit amet eros dui. Sed
                      porta gravida mollis. In odio dolorcoul maximus a finibus
                      eget, euismod vitae tellus. Vivamus condimentum nulla
                      rhoncus ipsum jougara vehicula, quis bibendum massa
                      auctor. Suspendisse potenti. Nam vulputate diam tempus
                      orcilagri rhoncus tincidunt et nec dolor. Curabitur id
                      nunc hendrerit
                    </p>
                  </div>
                </div>
                <div className="blog-sharea-area">
                  <div className="row align-items-center g-4">
                    <div className="col-lg-9 col-md-8">
                      <ul className="tag-list d-flex justify-content-md-start justify-content-center flex-wrap gap-3 p-0">
                        <li>
                          <Link href="#">Law Firm</Link>
                        </li>
                        <li>
                          <Link href="#">Juvenile</Link>
                        </li>
                        <li>
                          <Link href="#">Lawyers</Link>
                        </li>
                        <li>
                          <Link href="#">Family</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 d-flex justify-content-md-end justify-content-center">
                      <div className="blog-share">
                        <div className="front">
                          <span>Share Now</span>
                        </div>
                        <div className="back">
                          <ul className="share-list d-flex flex-row justify-content-end align-items-end gap-3">
                            <li>
                              <a href="https://www.facebook.com/">
                                <i className="bx bxl-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.twitter.com/">
                                <i className="bx bxl-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/">
                                <i className="bx bxl-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.pinterest.com/">
                                <i className="bx bxl-pinterest" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="another-post-area">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                      <div className="prev-post text-md-start text-center">
                        <span>
                          <svg
                            width={15}
                            height={6}
                            viewBox="0 0 15 6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 3L5 5.88675V0.113249L0 3ZM4.5 3.5H15V2.5H4.5V3.5Z" />
                          </svg>
                          PREV
                        </span>
                        <h5>Nullam feugiat et quam in accumsan.</h5>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex justify-content-md-end justify-content-center">
                      <div className="next-post text-md-end text-center">
                        <span>
                          NEXT
                          <svg
                            width={15}
                            height={6}
                            viewBox="0 0 15 6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M15 3L10 0.113249V5.88675L15 3ZM0 3.5H10.5V2.5H0V3.5Z" />
                          </svg>
                        </span>
                        <h5>Nullam feugiat et quam in accumsan.</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-area pt-120">
                  <h3 className="comment-title">Comment</h3>
                  <ul className="comment-list">
                    <li className="single-comment">
                      <div className="image">
                        <img
                          src="assets/images/blog/comment-author.png"
                          alt="image"
                        />
                      </div>
                      <div className="content">
                        <div className="comment-author">
                          <div className="designation">
                            <h5>Polard Girdet</h5>
                            <span>11 January, 2022 At 01.56 pm</span>
                          </div>
                          <button className="reply-btn">
                            <i className="bi bi-reply" />
                            Reply
                          </button>
                        </div>
                        <p className="para mb-0">
                          Vestibulum eget mauris dui. Proin luctus est lacus, eu
                          lobortis orci dignissim atei. Ut nec vulputateri nisl.
                          Mauris vel dolor augue. Praesent sit amet eros dui.
                          Sedant porta gravida mollis. In odio dolorcoul maximus
                          a finibus eget.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="comment-form pt-120">
                  <h3 className="comment-title">Leave A Comment</h3>
                  <form className="comment-form">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-inner">
                          <input type="text" placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-inner">
                          <input type="email" placeholder="Enter Your Email" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-inner mb-0">
                          <textarea
                            name="message"
                            rows={5}
                            placeholder="Type your Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="eg-btn btn--dark btn--lg rounded-2 cmment-submit-btn"
                        >
                          Submit Comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog-sidebar">
                  <BlogSearchWidget />
                  <BlogCategoryWidget />
                  <RecentBlogPost />
                  <BlogTagWidget />
                  <BlogCommentsSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default BlogDetails;
