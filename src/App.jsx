import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import { fetchnews } from './Components/Fetchnews'
import Pagination from './Components/Pagination'

const App = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [currentPage, setCurrentPage] = useState(1)
  const postPerPage = 8;

  const lastIndexOfArticle = currentPage * postPerPage;
  const firstIndexOfArticle = lastIndexOfArticle - postPerPage;

  const currentPost = articles.slice(firstIndexOfArticle, lastIndexOfArticle);

  useEffect(() =>{
    fetchnews('india').then(data => setArticles(data.articles))
  }, []);

  const onNavItemClick = (category) =>{
    fetchnews(category).then(data => setArticles(data.articles))
  }

  const reload = () =>{
    window.location.reload()
  }
  const handleInputChange = (event) =>{
    setSearchQuery(event.target.value)
  }

  const handleSearch = () =>{
    if(!searchQuery) return;
    fetchnews(searchQuery).then(data => setArticles(data.articles))
  }


  return (
    <>
    <Navbar  reload={reload} onNavItemClick={onNavItemClick}  handleInputChange={handleInputChange} handleSearch={handleSearch}/>

    <div className="main-content max-w-[85%] mx-auto">
        <div className="card flex flex-wrap justify-center md:justify-normal gap-3 mt-8">
          {currentPost.map(article => <Card key={article.url} article={article}/>)}
        </div>
    </div>

    <div className="pagination flex justify-center items-center flex-wrap  mt-10 mb-12">
      <Pagination postPerPage={postPerPage} totalPosts={articles.length} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
    </>
  )
}

export default App