import React from 'react'
import './about.css'
import Jump from 'react-reveal/Jump'
import Profile from '../../assets/images/stylish.jpg'
const About = () => {
  return (
    <>
      {/* <Jump> */}
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img
              //   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
              src={Profile}
              alt="progile_pic"
            />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              Hi this is Abhishek from From Motihari(East Champaran) Bihar.
              Currently i am pursuing B.tech degree from kalinga institute of
              industrial technology (bhubaneswar ,odisha). Currenlty i am in 6th
              semester and till 4th semester my cgpa is 8.26/10 .
            </p>
          </div>
        </div>
      </div>
      {/* </Jump> */}
    </>
  )
}

export default About
