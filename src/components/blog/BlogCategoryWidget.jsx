import Link from 'next/link'
import React from 'react'

function BlogCategoryWidget() {
  return (
    <>
     <div className="blog-widget-item">
            <div className="blog-category">
              <h5 className="blog-widget-title">CATEGORY</h5>
              <div className="blog-widget-body">
                <ul className="category-list">
                  <li><Link href="/blog-details"><a><span>Criminal Law</span><span>(15)</span></a></Link></li>
                  <li><Link href="/blog-details"><a><span>Family Law</span><span>(18)</span></a></Link></li>
                  <li><Link href="/blog-details"><a><span>Drug Offense</span><span>(20)</span></a></Link></li>
                  <li><Link href="/blog-details"><a><span>Juvenile Crimes</span><span>(25)</span></a></Link></li>
                  <li><Link href="/blog-details"><a><span>Workplace Accident</span><span>(35)</span></a></Link></li> 
                  <li><Link href="/blog-details"><a><span>Education Law</span><span>(45)</span></a></Link></li> 
                </ul>
              </div>
            </div>
          </div>   
    </>
  )
}

export default BlogCategoryWidget