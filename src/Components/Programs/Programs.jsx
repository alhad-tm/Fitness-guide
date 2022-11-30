import React from 'react'
import { programsData } from '../../data/programsData'
import "./Programs.css"
import Rightarrow from "../../assets/rightArrow.png"

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        {/* header */}
        <div className="programs-header">
            <span className='stroke-text'>explore</span>
            <span>our programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
          {/* cards */}
        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join now</span>
                        <img src={Rightarrow} alt="" />
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Programs