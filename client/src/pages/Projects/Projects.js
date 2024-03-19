import React from 'react'
import './projects.css'
import Spin from 'react-reveal/Spin'
import tindog from '../../assets/images/tindog_project.png'

const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pd-3 text-center">
          What is a paragraph? Paragraphs are the building blocks of papers.
          Many students define paragraphs in terms of length: a paragraph is a
          group of at least five sentences, a paragraph is half a page long,
          etc. In reality, though, the unity and coherence of ideas among
          sentences is what constitutes a paragraph.
        </p>
        <div className="row" id="ads">
          {/* <Spin> */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={tindog} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Portifolio Website</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/Abhishek030104/Tindog"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Mobile App</span>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Portifolio Website</h5>
                </div>
                <a className="ad-btn" href="#">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://staticlearn.shine.com/l/m/images/blog/job_search_portals.png"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Portifolio Website</h5>
                </div>
                <a className="ad-btn" href="#">
                  View
                </a>
              </div>
            </div>
          </div>
          {/* </Spin> */}
        </div>
      </div>
    </>
  )
}

export default Projects
