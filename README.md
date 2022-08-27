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

### Data Preprocessing
After pulling the data from the Pushshift API, we converted the csv to a database in MySQL as it made accessing and modifying data easier. For example, we ran SQL queries to clean the data of empty, removed or deleted posts. I used regular expression to extract tickers from the post and store them in the database. I used the iexfinance API to validate the ticker I and to get its closing price at the date the post was created and present date. I then calculated the percentage growth of the stock in order to label which posts were good and which posts were bad. 
The threshold for stock growth was set at 1.4%. We arrived at this number by looking at the SnP 500 growth over the last 3 years which was 8.6%. We looked at it over 3 years as our data was extracted over the past 3 years. Although, much of our data was extracted from within the last year where the growth of the index fund has been -7.21%^. Therefore we split the difference between the 2 numbers which was 1.4%. We used the SnP 500 index fund as it has been seen as a marker for the overall stockmarket but by looking at pennystockies, we want to peform better than the market average.

The text of posts were also prepared for language procesing by disposing of punctuation, digits, links, double spaces and tabs. Posts that had less than 50 characters were deleted using SQL queries

### Algorithims
We first lemmatized the texts of each post with Spark NLP, an extension package which provides a pre-trained NLP model in order to extract features.

We also had to add the urls from one of the previous tabless to the table with the predictions
