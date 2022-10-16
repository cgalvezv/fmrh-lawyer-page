import React from 'react'

function BlogSearchWidget() {
  return (
    <>
      <div className="blog-widget-item">
            <div className="search-area">
              <div className="blog-widget-body">
                <form>
                  <div className="search-with-btn">
                    <input type="text" placeholder="Search Here" />
                    <button><i className="bi bi-search" /></button>
                  </div>
                </form>
              </div>
            </div>
          </div>   
    </>
  )
}

export default BlogSearchWidget