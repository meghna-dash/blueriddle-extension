 /*global chrome*/
import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardDeck, Progress, Row } from 'reactstrap';
import { CircleProgress } from 'react-gradient-progress';
import Question from './question.png';
import Dislike from './dislike.png';
import Logo from './logo.png';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowUrl: "",
      isAmazonPage: true,
      selection: "",
      asin: "",
      receivedResponse: false,
      response: {
        verdict: false,
        evidence: {
          qas: [],
          reviews: [],
        }
      },
      error: false,
      qasToShow: 3,
      reviewsToShow: 3,
      qasExpanded: false,
      reviewsExpanded: false,
    }
    this.showMoreQas = this.showMoreQas.bind(this);
    this.showMoreReviews = this.showMoreReviews.bind(this);
    this.extractASIN = this.extractASIN.bind(this);
  }

  showMoreQas() {
    this.state.qasToShow === 3 ? (
      this.setState({ qasToShow: this.state.response.evidence.qas.length, qasExpanded: true })
    ) : (
      this.setState({ qasToShow: 3, qasExpanded: false })
    )
  }

  showMoreReviews() {
    this.state.reviewsToShow === 3 ? (
      this.setState({ reviewsToShow: this.state.response.evidence.reviews.length, reviewsExpanded: true })
    ) : (
      this.setState({ reviewsToShow: 3, reviewsExpanded: false })
    )
  }

  extractASIN(url){
    var ASINreg = new RegExp(/(?:\/)([A-Z0-9]{10})(?:$|\/|\?)/);
    var cMatch = url.match(ASINreg);
    if(cMatch == null){
      this.setState({
        isAmazonPage: false,
      })
    }
    this.setState({
      asin: "" + cMatch[1],
    })
  }

  componentDidMount() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      this.setState({
        windowUrl: tabs[0].url,
      })

      if(this.state.windowUrl.includes("amazon")) {
        const url = "https://api.blueriddle.io";
        this.extractASIN(this.state.windowUrl);

        const baseUrl = new URL(this.state.windowUrl).origin

        const fetchData = url + "/product/" + `${this.state.asin}` + '?urlOrigin=' + baseUrl;

        fetch(fetchData)
        .then(res => {
          return res.json();
        })
        .then(result => {
          this.setState({
            response: result.body,
            receivedResponse: true,
          })
        })
        .catch(err => { 
          this.setState({
            error: true,
          })
          console.log(err)
        }) ;
      }
      else {
        this.setState({
          isAmazonPage: false,
        })
      }
    });
  }

  render() {
    if(this.state.isAmazonPage) {
      return (
        <>
          {!this.state.receivedResponse ?
            <div class="loadingWrap" style={{ marginTop: '30px', paddingLeft: '12px', paddingRight: '12px' }}>
              <svg class="loading" viewBox="0 0 84.6 84.6">
                <defs>
                  <filter id="stickyFilter">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="filter" />
                    <feComposite in="SourceGraphic" in2="filter" operator="atop"/>
                  </filter>
                  <linearGradient id="gradient" class="gradient" x1="0%" y1="0%" x2="0%" y2="40%" gradientTransform="rotate(45)">
                    <stop offset="0%"/>
                    <stop offset="100%"/>
                  </linearGradient>
                </defs>
                <clipPath id="clip">
                  <circle cx="42.3" cy="42.3" r="41.6"/>
                </clipPath>
                <g clip-path="url(#clip)">
                  <path class="background" d="M0 0h84.6v84.6H0z"/>
                  <g class="exhaust">
                    <path class="gradientBox" d="M2.37244 65.5981l28.84968-28.84968 16.54614 16.54614-28.84968 28.84968z"/>
                    <path class="gradientBox" d="M6.35189 69.55189l28.84968-28.84968 8.34378 8.34378-28.84968 28.84968z"/>
                    <g class="filteredGroup">
                      <path class="line1 line lineThick" d="M47.7 49.6L13.4 83.9"/>
                      <path class="line2 line lineThick" d="M42.3 42.3L8 76.6"/>
                      <path class="line3 line lineThick" d="M33.5 38.5L-.8 72.8"/>

                      <path class="line4 line lineDots"  d="M45 45.82L10.7 80.12"/>
                      <path class="line5 line lineDots" d="M38.16 40.06L3.86 74.36"/>

                      <path class="line6 line lineStatic" d="M39.46 41.15L18.91 61.7"/>
                      <path class="line7 line lineStatic" d="M43.57 43.77L23.02 64.32"/>
                    </g>
                  </g>
                  <g class="rotate">
                    <g class="rumble">
                      <path class="arrow" d="M60.8 27.2c.6-2.1-1.3-4-3.4-3.4L19.5 35.3c-2.2.7-2.6 3.6-.8 4.9l15.8 7.6c1.1.5 2 1.4 2.5 2.6L44.4 66c1.3 1.9 4.2 1.4 4.9-.8l11.5-38z"/>
                    </g>
                  </g>
                </g>
              </svg>
              <div class="label">Checking where this product was made...</div>
            </div>
          : <div style={{ paddingLeft: '12px', paddingRight: '12px'}}>
            {this.state.response.verdict ?
              <div style={{ paddingLeft: "20px" }}>
                <h2 style={{ color: 'red'}}>
                  <strong> WARNING! </strong> This product was likely made in China.
                </h2>
                <h3>
                  Here's what we found.
                </h3>
              </div>
            : <div>
              <h2 style={{ color: 'green'}}>
                <strong> All good! </strong> This product probably wasn't made in China.
              </h2>
              <h3>
                We searched through questions, reviews, and product information so you don't have to.
              </h3>
            </div>
            }
            <div style={{ width: "300px" }} class="boxes">
              {this.state.response.evidence.qas ? this.state.response.evidence.qas.slice(0, this.state.qasToShow).map((qa, id) => (
                <div class="box" key={id}>
                  <p className="card-type-label">
                    <strong> QUESTION </strong>
                  </p>
                  <h3 className="text-clamp">{qa.question}</h3>
                  <p className="text-clamp">{qa.answer}</p>
                  <div class="svg">
                    <img src={Question} height="40px" width="40px"/>
                  </div>
                </div>
              )) : <div />}
              {this.state.response.evidence.reviews ? this.state.response.evidence.reviews.slice(0, this.state.reviewsToShow).map((review, id) => (
                <div class="box" key={id}>
                  <p className="card-type-label">
                    <strong> REVIEW </strong>
                  </p>
                  <h3 className="text-clamp">{review.title}</h3>
                  <p className="text-clamp">{review.text}</p>
                  <div class="svg">
                   <img src={Dislike} height="40px" width="40px"/>
                 </div>
                </div>
              )) : <div />}
              {this.state.response.verdict ?
                <a className="btn btn-primary showMore" onClick={this.showMoreReviews}>
                  {this.state.reviewsExpanded ? (
                    <span> - Show less</span>
                  ) : (
                    <span> + Show more</span>
                  )}
                </a>
              : <div />}
            </div>
            <footer className="footer">
              <h6 className="category category-absolute">
                Powered by{" "}
                <a
                  href="https://app.blueriddle.io"
                  target="_blank"
                >
                  <img
                    alt="..."
                    className="powered-by-logo"
                    src={require("./logo-black.png")}
                  ></img>
                </a>
              </h6>
            </footer>
          </div>
        }
        </>
      )
    }
    else {
      return (
        <>
          <div style={{ paddingLeft: '12px', paddingRight: '12px'}}>
            <h2>
              <strong> We couldn't find an Amazon product on this page. </strong>
            </h2>
            <div class="label">
              To use Blueriddle, click on the Blueriddle icon from the page of the Amazon product you'd like to check.
            </div>
          </div>
          <div className="backg">
            <div className="sand" />
            <div className="tower">
              <div className="s1"></div>
              <div className="s2"></div>
              <div className="door1"></div>
              <div className="door2"></div>
              <div className="balcony">
                <div className="b1"></div>
                <div className="b2"></div>
                <div className="b3"></div>
                <div className="b4"></div>
                <div className="b5"></div>
                <div className="b6"></div>
                <div className="b7"></div>
                <div className="b8"></div>
                <div className="b9"></div>
              </div>
              <div className="s3"></div>
              <div className="s4"></div>
              <div className="dome"></div>
              <div className="glass"></div>
              <div className="s5"></div>
              <div className="light"></div>
              <div className="sand1"></div>
              <div className="sand2"></div>
            </div>
          </div>
        </>
      )
    }
  }
}

export default Results;
