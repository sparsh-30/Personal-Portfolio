import React from 'react'
import './Timeline.css'

const Timeline = () => {
  return (
    <div className="timeline-area">
	<div className="container">
		<div className="timelines">
			<h2>Timelines</h2>
		</div>
		<div className="all-timelines">
			
			<div className="single-timeline d-flex-2">
				<div className="timeline-blank"></div>
				<div className="timeline-text d-flex-2">
					<span>
						<h6>2018</h6><br />
						Passed class 10th from Oxford Sen. Sec. School, Moga
					</span>
					<div className="t-square"></div>
				</div>
			</div>
			
			<div className="single-timeline d-flex-2">
				<div className="timeline-blank"></div>
				<div className="timeline-text d-flex-2">
					<span>
						<h6>2018-2020</h6><br />
						Passed class 12th from Punjab Convent School, Baghapurana
					</span>
					<div className="t-square"></div>
				</div>
			</div>
			
						
			<div className="single-timeline d-flex-2">
				<div className="timeline-blank"></div>
				<div className="timeline-text d-flex-2">
					<span>
						<h6>2020-Present</h6><br />
						Currently studying at Chitkara University
					</span>
					<div className="t-square"></div>
				</div>
			</div>
			
			
		</div>
	</div>
    </div>
  )
}

export default Timeline