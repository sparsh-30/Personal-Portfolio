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
						<h6>April 2019</h6> — The launch of Aryacoin; AYA ICO, resulting in over 30BTC collected
					</span>
					<div className="t-square"></div>
				</div>
			</div>
			
			<div className="single-timeline d-flex-2">
				<div className="timeline-blank"></div>
				<div className="timeline-text d-flex-2">
					<span>
						<h6>December 2019 </h6>— The launch of AYA Pay
					</span>
					<div className="t-square"></div>
				</div>
			</div>
			
			
			
			<div className="single-timeline d-flex-2">
				<div className="timeline-blank"></div>
				<div className="timeline-text d-flex-2">
					<span>
						<h6>June 2020</h6> — Aryna Exchange goes live, opening more trading opportunities globally
					</span>
					<div className="t-square"></div>
				</div>
			</div>
			
			<div className="single-timeline d-flex-2">
				<div className="timeline-blank"></div>
				<div className="timeline-text d-flex-2">
					<span>
						<h6>July 2020</h6> — The enabling of our Coin Exchanger
					</span>
					<div className="t-square"></div>
				</div>
			</div>
			
			<div className="single-timeline d-flex-2">
				<div className="timeline-blank"></div>
				<div className="timeline-text d-flex-2">
					<span>
						<h6>November 2020</h6> — The implementation of Smart Contracts into the Aryacoin Ecosystem
					</span>
					<div className="t-square"></div>
				</div>
			</div>
			
			<div className="single-timeline d-flex-2">
				<div className="timeline-blank"></div>
				<div className="timeline-text d-flex-2">
					<span>
						<h6>Q1 2021</h6> — Alef B goes live (more details coming soon)
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