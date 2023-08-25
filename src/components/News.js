import React, { Component } from 'react'
import Componenets from './Componenets';
import Loading from './Loading';
import PropTypes from 'prop-types'

export default class News extends Component {
 static defaultProps={
  country:'in',
  pagesize:5,
  category: "general"
 }
 static propTypes={
  country:PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string
 }
 articles= [
  {
      "source": {
          "id": null,
          "name": "SciTechDaily"
      },
      "author": null,
      "title": "Transform Your Health in Two Days: Weekend Workouts May Be As Effective as Exercising All Week - SciTechDaily",
      "description": "Compared with inactivity, both the weekend warrior or a more evenly distributed physical activity pattern were associated with similarly lower risks of heart attack, heart failure, atrial fibrillation (an abnormal heart rhythm), and stroke. People who find it…",
      "url": "https://scitechdaily.com/transform-your-health-in-two-days-weekend-workouts-may-be-as-effective-as-exercising-all-week/",
      "urlToImage": "https://scitechdaily.com/images/Silhouette-Victory-Exercise-Strength.jpg",
      "publishedAt": "2023-07-20T02:04:25Z",
      "content": "A recent study indicates that weekend warrior exercise patterns, concentrating physical activity into one or two days a week, offer similar heart health benefits as exercise spread out more evenly ov… [+3276 chars]"
  },
  {
      "source": {
          "id": "reuters",
          "name": "Reuters"
      },
      "author": "Reuters",
      "title": "White House: Russia may attack civilian shipping in Black Sea - Reuters",
      "description": "The White House warned on Wednesday that Russia may expand its targeting of Ukrainian grain facilities to include attacks against civilian shipping in the Black Sea.",
      "url": "https://www.reuters.com/world/europe/white-house-russia-may-attack-civilian-shipping-black-sea-2023-07-19/",
      "urlToImage": "https://www.reuters.com/resizer/v8QogGZRInODVqOC5ELywUc891A=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F2LX6T45V5IXDEZW3LBXAKHOSA.jpg",
      "publishedAt": "2023-07-19T22:32:00Z",
      "content": "WASHINGTON, July 19 (Reuters) - The White House warned on Wednesday that Russia may expand its targeting of Ukrainian grain facilities to include attacks against civilian shipping in the Black Sea.\r\n… [+1232 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "CNBC"
      },
      "author": "Amanda Macias, Natasha Turak",
      "title": "Ukraine war live updates: Russia says it views all Ukraine-bound ships as military cargo carriers; Odesa under attack again - CNBC",
      "description": "The attacks follow Russia's withdrawal from a U.N.-brokered grain deal.",
      "url": "https://www.cnbc.com/2023/07/19/russia-ukraine-live-updates.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107273490-1689758104161-gettyimages-1540755012-AFP_33PC3AP.jpeg?v=1689763274&w=1920&h=1080",
      "publishedAt": "2023-07-19T22:16:00Z",
      "content": "South Africa's president said Tuesday that arresting Russian President Vladimir Putin should he show up at an economic summit next month in Johannesburg would amount to a \"declaration of war\" by his … [+1459 chars]"
  }
]
  constructor(props){

    super(props);
    this.state={
      articles: this.articles,
      Loading:false,
      page:1

    }
    document.title= ` news daily ${this.props.category}`;

  }
  async componentDidMount() {

    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bc495bc9dbb64c149f8ee7cf9f991c02&page=1&pagesize=${this.props.pagesize}`;
    this.setState({Loading:true})
    let data = await  fetch(url)
    
    let parse= await data.json()
 
    this.setState({articles:parse.articles,Loading:false ,totalArticles: parse.totalResults,Loading:false})


  }
  nextbutton = async ()=>{

    if(this.state.page+1>Math.ceil(this.state.totalArticles/this.props.pagesize)){

    }

    else{
          let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bc495bc9dbb64c149f8ee7cf9f991c02&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
          this.setState({Loading:true})
          let data = await  fetch(url)
          let parse= await data.json()

          this.setState(
            {articles:parse.articles,
            Loading:false,
            page:this.state.page+1
          })

        }
      }
  backbutton = async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bc495bc9dbb64c149f8ee7cf9f991c02&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
    this.setState({Loading:true})
    let data = await  fetch(url)
    let parse= await data.json()
    this.setState(
      {articles:parse.articles,
      Loading:false,
      page:this.state.page-1
    })
    

  }
 


  

  render() {
    

   
    return (
      
        <div className='container my-3'>
          <h2 className='text-center' >News daily Top headlines from {this.props.category}</h2>
          { this.state.Loading&& <Loading/>}
          <div className='row '>
          {!this.state.Loading&& this.state.articles.map((element)=>{
            return(
            <div className='col-md-4' key={element.url}>
            <Componenets  title={element.title?element.title.slice(0,43):".."} desc={element.description?element.description.slice(0,106):".."} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/>
           </div>
            )
          })}   
          </div>
          <div className='container d-flex justify-content-between'>
          <button type="button" className="btn btn-dark" disabled={this.state.page<=1} onClick={this.backbutton}> &larr; back</button>
          <button type="button" className="btn btn-dark" disabled={this.state.page+1>Math.ceil(this.state.totalArticles/this.props.pagesize)} onClick={this.nextbutton}>next &rarr;</button>



          </div>
        </div>
      )
  }
}
