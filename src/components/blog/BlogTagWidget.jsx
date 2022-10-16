import React from "react";
import Link from "next/link"
function BlogTagWidget() {
  return (
    <>
      <div className="blog-widget-item">
        <div className="post-tag">
          <h5 className="blog-widget-title">TAGS</h5>
          <div className="blog-widget-body">
            <ul className="tag-list d-flex justify-content-start flex-wrap gap-3">
              <li>
                <Link href="#">
                  <a>Drugs</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Criminal</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Goverment3</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Real Estate</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Juvenile</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Lawyers</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Law Firm</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Workplace</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Family</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogTagWidget;
