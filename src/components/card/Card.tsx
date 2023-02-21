import React,{FC} from "react"
import { ICourseDetails } from "../inputs/helpers/course.interface";
import "./styles/Card.css"

export interface CardProps extends ICourseDetails {}

const Card:FC<CardProps>= ({department, courseNumber, year, semester}) => {
  return (
    <div className="card">
        <div className="card__title">{department} {courseNumber}</div>
        <div className="card__container">
            <div className="row">
                <span className="column">Department:</span> 
                <span className="column">{department}</span>
            </div>
            <div className="row">
                <span className="column">Course:</span> 
                <span className="column">{courseNumber}</span>
            </div>
            <div className="row">
                <span className="column">Year:</span> 
                <span className="column">{year}</span>
            </div>
            <div className="row">
                <span className="column">Semester:</span> 
                <span className="column">{semester}</span>
            </div>
        </div>
    </div>
  )
}

export default Card;