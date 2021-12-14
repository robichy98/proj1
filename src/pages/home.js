import React from 'react';
import lazy from '../components/lazy.png';

class Home extends React.Component {

    render() {
        return (
        <div class="row">
            <div class="col-sm-6 ">
                <div className="container-fluid text center">
                <img src={lazy} class="rounded mx-auto d-block"  width="500" height="300"/>
                </div>
                
        </div> 

            <div class="col-sm-6 ">
                <div className="container-fluid text-center">
                <h1>Introduction</h1>    
                <p> My name is Robi. My major is computer science. I am a lazy and shy person.</p>
                </div>
            </div>  
            

        </div>
        )
    }
}

export default Home;