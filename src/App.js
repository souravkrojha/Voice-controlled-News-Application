import React, { useEffect, useState } from "react";
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumber from 'words-to-numbers';
import NewsCards from './Components/NewsCards/NewsCards';
// import NavBar from "./Components/NavBar/NavBar";

const alanKey = "0a5607a4a46b9fe220163f39a86ddeb92e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticles] = useState(-1);
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if (command === "newHeadlines") {
                    setNewsArticles(articles);
                    setActiveArticles(-1);
                } else if (command === 'highlight') {
                    setActiveArticles((prevActiveArticle) => prevActiveArticle + 1);
                } else if (command === 'open') {
                    const parsedNumber = number.length > 2 ? wordsToNumber(number, { fuzzy: true }) : number;
                    const article = articles[parsedNumber - 1];

                    if (parsedNumber > 20) {
                        alanBtn().playText("please try that again");
                    } else {
                        window.open(article.url, '_blank');
                        alanBtn().playText("opening..");
                    }

                }
            }
        });
    }, []);
    return (
        <div className="home">
            {/* <h1>Hello world</h1> */}

            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        </div>
    );
}

export default App;