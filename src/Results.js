 /*global chrome*/
import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardDeck, Progress, Row } from 'reactstrap';
import { CircleProgress } from 'react-gradient-progress';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: "",
      response: {
        alert: true,
        reasons: ["This manufacturer is based in China.", "Verified customers have confirmed that this product was made in China."]
      }
    }
  }

  // componentDidMount() {
  //   var text = "";
  //   var _this = this;
  //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //     const port = chrome.tabs.connect(tabs[0].id);
  //     port.onMessage.addListener((response) => {
  //       text = response.selection;
  //       _this.query(text);
  //     });
  //     port.postMessage({cmd: "select"});
  //   })
  // }
  //
  // query(text) {
  //   this.setState({
  //     selection: text,
  //   });
  //   var body = { 
  //     "query": text
  //   } ;
  //
  //   const url = "http://ec2-107-22-26-250.compute-1.amazonaws.com:5000/";
  //
  //   if (this.state.selection) {
  //     fetch(url,
  //       { 
  //         method: "POST",
  //         headers: { 
  //           "Accept": "application/json",
  //           "Content-Type": "application/json" 
  //       }, 
  //       body: JSON.stringify(body)
  //     })
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(result => {
  //       var body = JSON.parse(result.body);
  //       this.setState({
  //         response: body,
  //       })
  //     })
  //     .catch(err => { 
  //       this.setState({
  //         response: "error: " + err
  //       })
  //     }) ;
  //   }
  // }

  render() {
    return (
      <div>
        {this.state.response.alert ?
          <div style={{ color: 'red' }}>
            <h3>
              <strong> WARNING </strong>
            </h3>
          </div>
        : <div/>}
        <div style={{ width: "300px" }}>
          {this.state.response.reasons ? this.state.response.reasons.map((reason, id) => (
            <>
              <Card className="link-card" style={{ backgroundColor: "#DEEFF5"}}>
                 <CardBody>
                   <CardTitle>
                     <h3>
                      {reason}
                     </h3>
                   </CardTitle>
                 </CardBody>
             </Card>
             <br/>
           </>
          )) : <div />}
        </div>
      </div>
    )
  }
}

export default Results;
