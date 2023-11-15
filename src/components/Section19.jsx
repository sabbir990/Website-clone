import React from 'react'
import '../index.css'
import { FaSign } from 'react-icons/fa'

export default function Section19() {
    return (
        <div className='section19-parent'>
            <div className='section19-left'>
                <h1>Sparring partner & coach</h1><br /><br /><br />
                <p>You have been working with Google Ads for quite some time now, and you have mastered the basics. You navigate through the Google Ads interface like Speedy Gonzales; you know the Google Ads Editor like the back of your hand and creating new campaigns is done in minutes, not hours. <br /><br /> You just notice you’re hitting the ceiling. You want to take the next step as a Google Ads specialist. You are looking for confirmation and would like to be able to spar at a high level. Do you recognize this? Then my unique 1-on-1 coaching sessions are a godsend. Of course, you can also call me in case of acute or smaller issues! <br /></p><br />
                <button>I want a schedule call</button>
            </div>
            <div className='section19-right'>
                <h1>Do you recognize this?</h1><br /><br />
                <p><FaSign /> You want to increase your knowledge and broaden your horizon but have outgrown regular training sessions.</p><br /><br />
                <p><FaSign /> You are the only Google Ads specialist on the team and have no one to turn to with questions.</p><br /><br />
                <p><FaSign /> You have doubts about implementing optimizations and don't know if you are doing the right thing.</p><br /><br />
                <p><FaSign /> You get stuck and are looking for concrete solutions or someone who thinks along with you on a level.</p>
            </div>
        </div>
    )
}
