import React, { useEffect, useState } from 'react'
import News from './News'

export default function NewsList(props) {

  const [articales, setArticales] = useState([]);

  // let category = "sports"
  // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=1&apiKey=24e5993d67894e49bb9f26a982e43aa4`;

  // const fetchData = async () => {
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   setArticales(data.articles)

  // }

  // useEffect(() => {
  //   fetchData();
  // }, [])


  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=1&apiKey=24e5993d67894e49bb9f26a982e43aa4`;

    (async () => {
      let response = await fetch(url);
      let data = await response.json();
      setArticales(data.articles)
    })();

  },[props.category])

  return (
    <div className='container mx-auto my-4 px-3 md:px-6 lg:px-10 space-y-6'>
      {articales.map((element,key)=>{
      return (<News key={key} name={element.source.name} author={element.author} title={element.title} description={element.description} url={element.url} imgurl={element.urlToImage} publishedAt={element.publishedAt}/>)
    })}
    </div>
  )
}
