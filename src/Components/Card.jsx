import React from 'react'

const Card = ({article}) => {

  const date = new Date(article.publishedAt).toLocaleString('en-US', {
    timeZone: "Asia/Jakarta"
});
  return (
    <>

<>
  {!article.urlToImage ? (

    <a href={article.url}>
      <div className="card w-[350px] min-h-[290px] md:min-w-[420px] md:min-h-[430px] shadow-lg cursor-pointer rounded-sm transition-transform ease-in-out duration-150 hover:translate-y-[-2px]">
      <div className="card-header">
        <div className="w-full h-[220px] bg-gray-200 flex items-center justify-center rounded-t-sm">
          <span className="text-gray-500">No Image Available</span>
        </div>
      </div>
      <div className="cardContent p-4">
        <h1 className="text-zinc-700 text-xl font-semibold mb-1">{article.title}</h1>
        <h2 className="text-blue-700 text-sm mb-2">{article.author}</h2>
        <h3 className="text-gray-600 text-sm mb-4">{article.source.name} • {date}</h3>
        <p className="text-gray-700">{article.description}</p>
      </div>
    </div>
    </a>
    
  ) : (
    <a href={article.url}>
      <div className="card max-w-[350px] min-h-[290px] md:min-w-[420px] md:min-h-[430px] shadow-lg cursor-pointer rounded-sm transition-transform ease-in-out duration-150 hover:translate-y-[-2px]">
      <div className="card-header">
        <img src={article.urlToImage} alt="Article Image" className="w-full h-[220px] object-cover rounded-t-sm" />
      </div>
      <div className="cardContent p-4">
        <h1 className="text-zinc-700 text-xl font-semibold mb-1">{article.title}</h1>
        <h2 className="text-blue-700 text-sm mb-2">{article.author}</h2>
        <h3 className="text-gray-600 text-sm mb-4">{article.source.name} • {date}</h3>
        <p className="text-gray-700">{article.description}</p>
      </div>
    </div>
    </a>
    
  )}
</>

    </>
  )
}

export default Card