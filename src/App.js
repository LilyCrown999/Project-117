import { Accordion, Card, Button, Tabs, Tab, Row, Col, Table } from "react-bootstrap";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h5> Case Review  </h5>
      <Card >
         <div className="head">
          Customer : Doe,Jane | Account: 9999999991000
         </div>
        <Card.Body className="card-body-default">
            <Card>
                <Card.Header className="card-head"> Overview </Card.Header>
                <Card.Body>
                  <div className="">
                    <Tabs defaultActiveKey="case" id="uncontrolled-tab-example" className="mb-0">
                      <Tab eventKey="case" title="Case" className="">
                        <table class="table table-striped table-borderless">
                          <tbody>
                            <tr>
                              <td><span class="head"> Case Number:</span><span> 11200 </span></td>
                              <td><span class="head"> Tran Amount:</span> <span> 300.00 </span></td>
                              <td><span class="head"> Risk:</span> <span> Low </span></td>
                            </tr>
                            <tr>
                              <td><span class="head"> Service Type:</span> <span> c </span></td>
                              <td><span class="head"> Case Creation Date:</span> <span> 5/6/2014 </span></td>
                              <td><span class="head"> Creation Score:</span> <span> 608 </span></td>
                            </tr>
                            <tr>
                              <td><span class="head"> Service Sub Type:</span> <span> N </span></td>
                              <td><span class="head"> Transaction Type:</span> <span> credit authorization or posting </span></td>
                              <td><span class="head"> High Score:</span> <span> 903 </span></td>
                            </tr>
                            <tr>
                              <td><span class="head"> Locked By:</span> <span> admin 22 </span></td>
                              <td><span class="head"> Queue:</span> <span> Find Case </span></td>
                              <td><span class="head"></span></td>
                            </tr>
                          </tbody>
                        </table>
                      </Tab>
                      <Tab eventKey="customer" title="Customer">
                        <h2>customer</h2>
                      </Tab>
                      <Tab eventKey="account" title="Account">
                        <h3> account </h3>
                      </Tab>
                      <Tab eventKey="response" title="Response">
                        <h3> response </h3>
                        {/* <Comment /> */}
                      </Tab>
                      <Tab eventKey="summary" title="Summary">
                        <h3> summary </h3>
                      </Tab>
                    </Tabs>
                  </div>
                </Card.Body>
              </Card>
              <Card className="mt-2">
                <Card.Header className="card-head">Investigation</Card.Header>
                <Card.Body>
                    <div className="card-group">
                        <Card className=" inve">
                          <select name="close_fraud" id="" >
                            <option  selected disabled> Closed Fraud </option>
                          </select>
                            <div className="card mt-2">
                            <span> <input type="checkbox" name="" id="" /> Add to fraud file </span>
                            <span> <input type="checkbox" name="" id="" /> Approve with ID </span>
                            <span> <input type="checkbox" name="" id="" /> Fraud block </span>
                            <span> <input type="checkbox" name="" id="" /> Police report field </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            </div>
                        </Card>
                        <Card className=" inve">
                            <select name="app_fraud" id="" >
                              <option  selected disabled> Application Fraud </option>
                            </select>
                          <div className="card mt-2">
                            <span><input type="checkbox" name="" id="" /> Aldready Worked </span>
                            <span> <input type="checkbox" name="" id="" /> Called Corresponding Bank </span>
                            <span> <input type="checkbox" name="" id="" /> Customer Verified FPS </span>
                            <span> <input type="checkbox" name="" id="" /> Left Message Home and field </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            <span> <input type="checkbox" name="" id="" /> void </span>
                            </div>
                        </Card>
                        <Card className=" inve">
                          <div id="additional-details">
                             Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              Fuga, quam voluptates natus necessitatibus nesciunt provident,
                               laudantium magnam vel quas architecto cupiditate ullam modi qui itaque debitis error maxime alias deserunt.

                               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Ut itaque maxime sit quas quia et blanditiis quos quo quibusdam voluptas optio esse accusamus,
                                consectetur quis, officia nesciunt perspiciatis alias aspernatur.

                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Excepturi maxime eveniet enim natus minus facilis assumenda, quasi veniam officia in esse,
                                 blanditiis tempore iusto. Doloremque totam nam esse exercitationem eos.
                          </div>
                        </Card>
                    </div>
                    <div className="tab2 mt-0">
                      <Tabs defaultActiveKey="transaction" id="uncontrolled-tab-example" className="mb-0">
                        <Tab eventKey="transaction" title="Transaction">
                        </Tab>
                        <Tab eventKey="history" title="History">
                          <h3> History </h3>
                        </Tab>
                        <Tab eventKey="link" title="Link">
                          <h3> Link </h3>
                        </Tab>
                      </Tabs>
                    </div>
                </Card.Body>
              </Card>
        </Card.Body>
      </Card>
    </div>
  )
}

export default App;
