import React from 'react';
import Laundry from '../components/laundry.png';
class Projects extends React.Component {
   
    render() {
        return (
            <div>
                
                <div class='row'>
                <div class="col-sm-6 ">
                <img src={Laundry} class="rounded mx-auto d-block"  width="400" height="400"/>
                </div>
                </div>
                 <div class='row'>
                    <div class="col-sm-6 ">
                        <div className="container-fluid text-center">
                            
                         </div>
                         </div>
                    <div class="col-sm-6 ">
                        
                    </div>
                            <div class="col-sm-6 ">
                            <div className="container-fluid text-center">
                            <h2> Laundry Room sign up Project</h2>
                            <a href="https://github.com/robichy98/myprogrammingproject"> github </a>
                            <p> Laundry room project </p>
                        </div>
                    </div>
                    
                </div>
            </div>
          );
    }
}

export default Projects; 