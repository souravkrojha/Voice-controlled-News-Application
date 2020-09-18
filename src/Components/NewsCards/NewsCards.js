import React from 'react'
import NewsCard from '../NewsCard/NewsCard';
import { Grid, Grow, Typography, CardActionArea } from '@material-ui/core';
import useStyles from './Style';

const infoCards = [
    { color: '#00B0FF', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#00BFA6', title: 'News by Categories', info: 'Business, Entertainment, General, ', text: 'Give me the latest Technology news' },
    { color: '#F50057', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'Tell me about playstation 5' },
    { color: '#F9A826', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
    { color: '#00c853', title: 'Tips ', info: "You can open any article ", text: 'Open article number [1]' },
    { color: '#ff6d00', title: 'Talk with alan', info: 'You can talk with Alan', text: 'Hello or how are you?' },
    { color: '#ff4081', title: 'AlanAi', info: 'The most Advanced Conversational voice AI platform', text: "alan.app", href: "https://alan.app/" },
    { color: '#aa00c7', title: 'Created by', info: 'Sourav Kumar Ojha', text: 'GhostWheel', href: "https://github.com/bughunter-99" },
];





const NewsCards = ({ articles, activeArticle }) => {

    const classes = useStyles();

    if (!articles.length) {
        return (
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {infoCards.map((infoCard) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                            <CardActionArea href={infoCard.href} target="_blank" >
                                <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                                    <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                                    {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong> <br />{infoCard.info}</Typography> : null}
                                    <Typography variant="h6" component="h6">hint:<br /><i>{infoCard.text}</i></Typography>
                                </div>
                            </CardActionArea>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        );
    }

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    articles.map((article, i) => (
                        <Grid item sx={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                            <NewsCard article={article} i={i} activeArticle={activeArticle} />
                        </Grid>

                    ))
                }
            </Grid>
        </Grow>
    )
}

export default NewsCards
