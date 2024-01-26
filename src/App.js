import css from "./App.css";
import img1 from "./photos/1 (1) 2.png"
import Line from "./photos/Line 1.png"
import Mobile from "./photos/Mobile.png"

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
          <div>
            <div>
              <div>
                <div className="sub-cont">
                  <div> 
                    <img
                      src={img1}
                      alt="My Image"
                    />
                  </div>
                  <div>Expected Retirement Age</div>
                </div>
                <div className="sub-cont">
                  <div style={{ marginRight: '41px' }}></div>
                  <div>
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
                    <img
                      src={img1}
                      alt="My Image"
                    />
                  </div>
                  <div>Expected Retirement Age</div>
                </div>
                <div className="sub-cont">
                  <div style={{ marginRight: '41px' }}></div>
                  <div>
                    <img
                      src={Line}
                      alt="line1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div> 
              <img
                src={Mobile}
                alt="mobile"
              />
            </div>
          </div>

          <div>
            <div>
              <div>
                <div>
                  <div> 
                    <img
                      src={img1}
                      alt="img3"
                    />
                  </div>
                  <div>Expected Retirement Age</div>
                </div>
                <div>
                  <div></div>
                  <div>
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
                <div>
                  <div> 
                    <img
                      src={img1}
                      alt="img4"
                    />
                  </div>
                  <div>Expected Retirement Age</div>
                </div>
                <div>
                  <div></div>
                  <div>
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


      </div>




      <div>2</div>
    </div>
  );
}

export default App;
