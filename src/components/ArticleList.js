import React from "react";


const ArticleList = ({posts})=>{
    return(
        <main>
          {posts.map(post=>(
            <article
            key={post.id} 
          title={post.title}
          date={post.date}
          preview={post.preview}
          />
        
          ))} 
        </main>
    )

}
export default ArticleList;