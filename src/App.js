import css from "./App.css";
import img1 from "./photos/1 (1) 2.png"
import Line from "./photos/Line 1.png"
import Mobile from "./photos/Mobile.png"
import Vector from "./photos/Vector.png";
import foot from "./photos/foot.png"

function App() {
  
  return (
    <div>
      <div>
        <div id="container-first">
          <div><h1 id="title">Check your financial health</h1>
          </div>
          <div className="container-subT"><h1 h1 id="sub-title">Use WeathoMeter to get a free report
            card for your finances- within minutes!</h1>
          </div>
          <div >
            <button id="getStart">Get Started</button>
          </div>
        </div>

        <div id="conatiner-second" >
          <div className="col">

            <div>
              <div>
                <div className="sub-cont">
                  <div> 
                    <img src={img1}alt="My Image1"/>
                  </div>
                  <div>Expected Retirement Age</div>
                </div>
                <div className="sub-cont">
                  <div style={{ marginRight: '41px'}}></div>
                  <div style={{ paddingRight: '50px'}}>
                    <img
                      src={Line}
                      alt="line1"
                      
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="sub-cont">
                  <div> 
                    <img src={img1}alt="My Image1"/>
                  </div>
                  <div>Expected Retirement Age</div>
                </div>
                <div className="sub-cont">
                  <div style={{ marginRight: '41px'}}></div>
                  <div style={{ paddingRight: '50px'}}>
                    <img
                      src={Line}
                      alt="line1"
                      
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col">
            <div> 
              <img
                src={Mobile}
                alt="mobile"
                style={{marginTop:"-100px"}}
              />
            </div>
          </div>

          <div className="col">

            <div>
              <div>
                <div className="sub-cont">
                  <div> 
                    <img src={img1}alt="My Image1"/>
                  </div>
                  <div>Expected Retirement Age</div>
                </div>
                <div className="sub-cont">
                  <div style={{ marginRight: '41px'}}></div>
                  <div style={{ paddingRight: '50px'}}>
                    <img
                      src={Line}
                      alt="line1"
                      
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="sub-cont">
                  <div> 
                    <img src={img1}alt="My Image1"/>
                  </div>
                  <div>Expected Retirement Age</div>
                </div>
                <div className="sub-cont">
                  <div style={{ marginRight: '41px'}}></div>
                  <div style={{ paddingRight: '50px'}}>
                    <img
                      src={Line}
                      alt="line1"
                      
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div id="conatiner-third" >
          <img src={Vector} id="vectorimg"></img>

          <div>
            <h1>How it works?</h1>
          </div>

          <div>
            <img src={foot} alt="footer"></img>
            <div className="datas">
              <div>Answer few questions</div>
              <div>Register using phone and OTP</div>
              <div>Get report and personal roadmap </div>
            </div>
          </div>

          <div >
            <button id="getStart2">Get Started</button>
          </div>
        </div>


      </div>




      <div>2</div>
    </div>
  );
}

export default App;
