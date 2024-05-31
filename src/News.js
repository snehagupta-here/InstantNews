import React, { Component } from 'react'
import NewsItem from "./NewsItem"
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    country:"in",
    pageSize:9,
    category:"general"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
    // articles =  [
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Imagazine.pl"
    //         },
    //         "author": "Dariusz Hałas",
    //         "title": "Green Cell GC HabuDen – premiera polskiego wallboksa",
    //         "description": "Podczas elektromobilnego pikniku EV Experience 2024 odbywającego się na Torze Modlin (o imprezie informowałem już wcześniej), polska marka Green Cell zaprezentowała swój najnowszych produkt: ładowarkę ścienną do samochodów elektrycznych HabuDen o mocy 22 kW. …",
    //         "url": "https://imagazine.pl/2024/05/27/green-cell-gc-habuden-premiera-polskiego-wallboksa/",
    //         "urlToImage": "https://imagazine.pl/wp-content/uploads/2024/05/IMG_2188.jpg",
    //         "publishedAt": "2024-05-27T05:00:01Z",
    //         "content": "Podczas elektromobilnego pikniku EV Experience 2024 odbywajcego si na Torze Modlin (o imprezie informowaem ju wczeniej), polska marka Green Cell zaprezentowaa swój najnowszych produkt: adowark cienn … [+4810 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "FREDZONE"
    //         },
    //         "author": "Habib ADECHOKAN",
    //         "title": "Elon Musk veut construire un superordinateur pour alimenter Grok, l'IA d’xAI",
    //         "description": "Elon Musk, le célèbre entrepreneur à la tête de Tesla, SpaceX et X (anciennement Twitter), semble lui aussi avoir un amour assez prononcé pour l’intelligence artificielle. Selon un récent rapport du media americain The Information, Musk prévoit de se lancer d…",
    //         "url": "https://www.fredzone.org/elon-musk-construire-superordinateur-alimenter-grok-ia-xai",
    //         "urlToImage": "https://www.fredzone.org/wp-content/uploads/2024/04/grok-musk-ia.jpg",
    //         "publishedAt": "2024-05-27T04:55:06Z",
    //         "content": "Selon un récent rapport du media americain The Information, Musk prévoit de se lancer dans un nouveau projet d’envergure : la construction d’un superordinateur pour sa société d’IA, xAI. \r\nUne levée … [+2598 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "la-nacion",
    //             "name": "La Nacion"
    //         },
    //         "author": "BBC Mundo",
    //         "title": "El país donde organizan polémicas milicias de voluntarios para combatir la violencia con armas, silbatos y látigos",
    //         "description": "Sudáfrica tiene una de las tasas más altas de homicidios del mundo; un equipo patrulla las calles para mantener a sus familias seguras, incluso aunque eso signifique arriesgar sus vidas",
    //         "url": "https://www.lanacion.com.ar/el-mundo/el-pais-donde-organizan-polemicas-milicias-de-voluntarios-para-combatir-la-violencia-con-armas-nid27052024/",
    //         "urlToImage": "https://resizer.glanacion.com/resizer/v2/abel-rapelego-dice-que-su-equipo-de-voluntarios-5IG6HV5C5ZBQXMQJHP472DEGQA.jpg?auth=f66d265820564a0004679dc432ae2a912000d0618051c8dbf4eb3d9788a69355&width=768&quality=70&smart=false",
    //         "publishedAt": "2024-05-27T04:48:42Z",
    //         "content": "La preocupación sobre la violencia y el crimen estará en la mente de los sudafricanos cuando vayan a votar a finales de este mes, con los políticos prometiendo cualquier cantidad de cosas para luchar… [+7461 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Ferra.ru"
    //         },
    //         "author": "Булат Кармак",
    //         "title": "Первый пользователь мозгового чипа Neuralink попросил об апгрейде",
    //         "description": "Нолан Арбо, первый человек с вживленным нейроимплантом от компании Neuralink, в интервью изданию Wired рассказал о своем желании улучшить устройство.",
    //         "url": "https://www.ferra.ru/news/techlife/pervyi-polzovatel-mozgovogo-chipa-neuralink-poprosil-ob-apgreide-26-05-2024.htm",
    //         "urlToImage": "https://www.ferra.ru/imgs/2024/05/26/16/6480635/436e08392706f2f5a4f7ecbe006a142803c50d27.png",
    //         "publishedAt": "2024-05-27T04:20:13Z",
    //         "content": ", 2024 , , 8 , , .\r\n , Optimus Tesla. .\r\n, . , , .\r\n Civilization VI, .\r\n , ."
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Marketscreener.com"
    //         },
    //         "author": null,
    //         "title": "EMEA Morning Briefing: Shares to Stall Ahead of U.S., Eurozone Inflation",
    //         "description": "(marketscreener.com) \n MARKET WRAPS \n\n Watch For: \n\n Germany Ifo ${this.props.category} climate index; no major corporate updates expected \n\n Opening Call: \n\n Shares in Europe could waver in muted trade on Monday given the public holidays in the U.S. and U.K. In Asia, stoc…",
    //         "url": "https://www.marketscreener.com/quote/currency/EURO-US-DOLLAR-EUR-USD-4591/news/EMEA-Morning-Briefing-Shares-to-Stall-Ahead-of-U-S-Eurozone-Inflation-46829835/",
    //         "urlToImage": "https://www.marketscreener.com/images/reuters/2017-03-07T002306Z_1_LYNXMPED2600J_RTROPTP_2_JAPAN-ECONOMY-BOJ.JPG",
    //         "publishedAt": "2024-05-27T04:17:33Z",
    //         "content": "MARKET WRAPS \r\nWatch For: \r\nGermany Ifo ${this.props.category} climate index; no major corporate updates expected \r\nOpening Call: \r\nShares in Europe could waver in muted trade on Monday given the public holidays i… [+7481 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "dh.be"
    //         },
    //         "author": "Yannick Natelhoff",
    //         "title": "Course au tout électrique, certains constructeurs font marche arrière, le marché européen s’essouffle : “En Belgique, tout pourrait s’écrouler en 2025”",
    //         "description": "La vente des voitures électriques, en pleine croissance en Belgique, détonne du marasme européen. ...",
    //         "url": "https://www.dhnet.be/conso/auto-moto/2024/05/27/course-au-tout-electrique-certains-constructeurs-font-marche-arriere-le-marche-europeen-sessouffle-en-belgique-tout-pourrait-secrouler-en-2025-VKPXQQMAYRFY5DSDDGFB4JVQNU/",
    //         "urlToImage": "https://www.dhnet.be/resizer/v2/UWF2V6GT65B3HLMCBSVEWGUDW4.jpg?auth=83bf05f7882e23ec52d1eb555d749a23fb15894610e282c032bf3e37c242d29a&width=1200&height=630&quality=85&focal=3680%2C2456&watermark=https%3A%2F%2Fcloudfront-eu-central-1.images.arcpublishing.com%2Fipmgroup%2FDZNGDE46VVGXRGHD3TEI5RB3GM.png%3A100%3A0%2C559",
    //         "publishedAt": "2024-05-27T04:11:48Z",
    //         "content": "Mais cest surtout depuis quelques années que lélectrique a pris son envol : alors que la quasi-totalité des constructeurs automobiles ne proposaient que des moteurs à combustion, essence ou diesel, p… [+9887 chars]"
    //     }];
     capitalize = (s)=>
    {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
    constructor(props){
            super(props);
            this.state = {
                // articles:this.articles,
                articles:[],
                loading:false,
               page:1
            }
            console.log("hi i am a news ctor");
            document.title = `${this.capitalize(this.props.category)} - InstantNews`
        }
        updateNews = async ()=>{
          this.setState({loading:true});
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b6249cc9134047a688dd8498b7620e33&page=1&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false});
            console.log(parsedData.articles);
        }
        async componentDidMount(){
            // this.setState({loading:true});
            // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b6249cc9134047a688dd8498b7620e33&page=1&pageSize=21`;
            // let data = await fetch(url);
            // let parsedData = await data.json();
            // console.log(parsedData);
            // this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false});
            // console.log(parsedData.articles);
            this.updateNews();
        }
        handlePrevious = async () =>{
            // this.setState({loading:true});
            // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b6249cc9134047a688dd8498b7620e33&page=${this.state.page-1}&pageSize=21`;
            // let data = await fetch(url);
            // let parsedData = await data.json();
            // this.setState({
            //     page:this.state.page-1,
            //     articles:parsedData.articles,
            //     loading:false
            // })
            this.setState({page:this.state.page-1});
this.updateNews();
        }
         handleNext = async () =>{
            // if(!(this.state.page+1 > Math.ceil(this.state.totalResults/21))){
            //     this.setState({loading:true});
            //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b6249cc9134047a688dd8498b7620e33&page=${this.state.page+1}&pageSize=21`;
            //     let data = await fetch(url);
            //     let parsedData = await data.json();
            //     this.setState({
            //         page:this.state.page+1,
            //         articles:parsedData.articles,  
            //         loading:false              
            //     })
            // }
            this.setState({page:this.state.page+1});
            this.updateNews();
        }

  render() {
    return (
        <>
      <div  className='container my-3' >
    <h2 className='text-center' style={{marginTop:"75px",marginBottom:"25px"}}>InstantNews - Top {this.capitalize(this.props.category)}  Headlines</h2>
   {this.state.loading && <Spinner  />}  
    <div className='row'>
        {!this.state.loading && this.state.articles.map((element)=>{
            console.log(element);
            return  <div className='col-md-4' key={element.url}>
            <NewsItem source={element.source.name} title={element.title?element.title.slice(0,45):""} author={element.author} publishedAt={element.publishedAt}   description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://media.cnn.com/api/v1/images/stellar/prod/c-gettyimages-2153309254.jpg?c=16x9&q=w_800,c_fill"} newsUrl={element.url} />
              </div>
        })}
         {/* <div className='col-md-4'>
       <NewsItem title="mytitle"   description="mydesc" imageUrl="https://imagazine.pl/wp-content/uploads/2024/05/IMG_2188.jpg" newsUrl="TODO" />
         </div>
         <div className='col-md-4'>
       <NewsItem title="mytitle" description="mydesc" />
         </div>
         <div className='col-md-4'>
       <NewsItem title="mytitle" description="mydesc" />
       </div> */}
    </div>
      </div>
      <div className='container d-flex justify-content-between mb-4'>
                 <button className='btn btn-dark' disabled={this.state.page <= 1} onClick={this.handlePrevious}>&larr; Previous</button>
                 <button className='btn btn-dark' disabled={this.state.page === Math.ceil(this.state.totalResults/21)} onClick={this.handleNext}>Next &rarr;</button>
      </div>
      </>
    )
  }
}
