import React from 'react';
import Pic from '../components/pic.jpg';

class About extends React.Component {

    render() {
        return (
            <div>
                <div class='column'>
                    <div class="col-sm-6 ">
                        <div className="container-fluid text-center">

                        <div class="col-sm-6 ">
                        <img src={Pic} class="center"  width="500" height="400"/>
                    </div>
                    
                    
                    <h1> About me </h1>
                                         
                        <p>My life is full of experiences and risks. I may not have full of achievements, but I can say that I did some in my life.
                             One of my greatest achievements in life so far is I just completed my Associate degree. Well, it may not a great achievement
                              for others, but for me, I accomplished something in life. As an immigrant, it is hard to learn a new language and culture of
                               a country that I have never been to. This country is one of the great countries in the world. People desire to come to this
                                country. Coming to this country and complete education is dream come true. Surviving without parents also a great task for me.
                                 My father passed away after he brought me here. I almost lost all the hopes. I thought I will not be able to complete higher
                                  education. But my father always wanted from me just one thing which is higher education. So, jumped into this mission. I 
                                  could not finish school back home, so I had to take the TASC test. I failed in my first attempt. But I did not lose hope. 
                                  I stood up and took the test again and passed. Now time to finish college. I enrolled at BMCC. I studied so hard that I am 
                                  doing well academically. I learned many important lessons throughout this long journey. Never lose hope and be patient.
                                   Patience is one of my greatest weapons. I never lose patience and try to do my best in every situation. The journey was
                                    not easy for me. It affected me emotionally. But when I see the outcome of my hard work, it gives me great peace and pleasure.</p> 
                        </div>
                    </div>
                    
                </div>
            </div>
          );
    }
}

export default About;
