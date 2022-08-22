# :chart_with_downwards_trend: Penny Stocks Post Classifier :chart_with_upwards_trend:
Project Website:

## I. Abstract
Reddit has become a large source of financial information for many retail investors since the GameStop short squeeze. This activity has been mostly centered on r/WallStreetBets. I hope to focus on other subreddits that have recieved less attention and I believe the subreddit r/pennystocks has been illogically overlooked by investors due to time constraints faced by retail investors and the high risk perception of penny stocks. I will use r/pennystocks as my dataset and try to classify posts as either valuable or less valuable in order to help any user quickly filter out posts they may want to read. This project aims to expand investing opportunities and save time for people, such as myself, who are interested in trading and investing in the stock market but have little time to do so.


## II. Introduction
The coronavirus pandemic has enticed a new wave of retail investors to try their hand in the stock market rather than leaving it to financial professionals. This new breed of investor draws its information not only from mainstream news outlets but also reddit. Everyone is aware of the infamous r/WallStreetBets but one sub reddit which has been overlooked is r/pennystocks. This maybe due to the risk associated with pennystocks as they can be very volatile or a certain stigma which means retail investors never even look at stocks under $5. However many people tend to forget that many blue chip companies we think of today were at one point classed as penny stocks.

Here are some examples:
- Apple in the early 2000s
- Ford after both the financial crises and the 2020 stock market crash
- Monster Beverage Corp until the late 2000s
- Plug Power until 2020
- AMD until 2016

This was only one aspect of the problem, as r/WallStreetBets has a massive community that have multiple websites and youtube channels that analyse the subreddit for the best stock picks. This means that many retail investors can rely on these people to filter out the memes, bad posts and ads rather than wasting their own time. Since r/pennystocks has been overlooked unreasonably, it does not have the same community that can provide this time saving service. As a result, this project will aim to filter and classify which posts are worth to take a look at.

## III. Materials and Methods
The dataset comes from posts on the subreddit r/pennystocks. They are extracted using the Pushshift API as it provides us with crucial information such as  title, author, text, URL and created time. We used the iexfinance API to obtain financial data based on the stocks peformace from the time the stock was created until now. The API provides the closing price, ticker, financials, cash-flow and volumes of a specific ticker.
