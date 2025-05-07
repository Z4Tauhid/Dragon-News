import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const Category = () => {
    const {id} = useParams()
    const newsData = useLoaderData()
    const [categoryNews, setCategoryNews] =useState([])
    useEffect(() =>{

        if (id == '0') {
            setCategoryNews(newsData)
            return

        }

        if (id == '1') { 
            const filteredNews = newsData.filter (news => news.others.is_today_pick == true)
            setCategoryNews(filteredNews)
            return

        }

        else {

            const filteredNews = newsData.filter (news=> news.category_id == id )

        
            setCategoryNews(filteredNews)
        }




       


    }, [newsData, id])
    return (
        <div>
            <h1> {categoryNews.length} News Found</h1>

            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news = {news}></NewsCard> )
                }
            </div>
        </div>
    );
};

export default Category;