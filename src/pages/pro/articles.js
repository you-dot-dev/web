import React, {useState, useEffect} from "react";
import { graphql } from "gatsby";
import axios from "axios";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageTransition from 'gatsby-plugin-page-transitions';

const ProArticles = (props) => {

  console.log("props?...", props);

  const slug = props["*"];

  const [loaded, setLoaded] = useState(false);
  const [title, setTitle] = useState("loading...");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [displayDate, setDisplayDate] = useState("");
  const [image, setImage] = useState("base64 thingie");
  const [timeToRead, setTimeToRead] = useState(0);

  useEffect( () => {

    async function getArticle(slug) {
      try {
        const result = await axios.get(`http://localhost:7890/articles/${slug}`);
        return result.data.article;
      } catch (err) {
        return err;
      }
    }

    getArticle(slug).then( (article) => {
      setLoaded(true);
      console.log("article?:", article);
      if (article) {
        const {author, body, created_at, image, title, time_to_read} = article;
        setAuthor(article.author);
        setBody(article.body);
        setDisplayDate(article.created_at);
        setImage(article.image);
        setTitle(article.title);
        setTimeToRead(article.time_to_read);
      } else {
        setAuthor("Not found");
        console.log("no article");
      }
    }).catch( (err) => {
      console.log("getArticle err:", err);
    });

    return () => {
      console.log("cleaning up");
    }
  }, []);

  return (
    <Layout>
      <PageTransition>
      <SEO title="Page two" />
        <div className="blog-post-container">

          <div className="blog-post">
            <div className="article-card">
              <div className="article-card-header">
                <h1>{title}</h1>
              </div>

              <img src={`data:image/png;base64,${image}`} alt="article image"/>
              <div className="article-card-content">
                <h4>{author}</h4>
                <h4>{displayDate}</h4>
                <p><i class="fa fa-clock"></i>{timeToRead} minute read</p>
              </div>
            </div>

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>

        </div>

        <div className="links blog-post-container">
          <div className="comment">
            <i class="fa fa-thumbs-up helpful"></i>
            <i class="fa fa-comments helpful" aria-hidden="true"></i>
          </div>
          <div className="next">
            <i class="fa fa-long-arrow-right helpful" aria-hidden="true">
            </i>
          </div>
        </div>
      </PageTransition>
    </Layout>
  )
}

export default ProArticles
