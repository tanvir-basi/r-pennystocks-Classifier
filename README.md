# :chart_with_downwards_trend: Penny Stocks Post Classifier :chart_with_upwards_trend:
Project Website:

## I. Abstract
Reddit has become a large source of financial information for many retail investors since the GameStop short squeeze. This activity has been mostly centred on r/WallStreetBets. I hope to focus on other subreddits that have received less attention and I believe the subreddit r/pennystocks has been illogically overlooked by investors due to time constraints faced by retail investors and the high-risk perception of penny stocks. I will use r/pennystocks as my dataset and try to classify posts as either valuable or less valuable in order to help any user quickly filter out posts they may want to read. This project aims to expand investing opportunities and save time for people, such as myself, who are interested in trading and investing in the stock market but have little time to do so.

## II. Introduction
The coronavirus pandemic has enticed a new wave of retail investors to try their hand in the stock market rather than leaving it to financial professionals. This new breed of investor draws its information not only from mainstream news outlets but also reddit. Everyone is aware of the infamous r/WallStreetBets but one sub reddit which has been overlooked is r/pennystocks. This may be due to the risk associated with pennystocks as they can be very volatile or a certain stigma which means retail investors never even look at stocks under $5. However, many people tend to forget that many blue-chip companies we think of today were at one point classed as penny stocks.

Here are some examples:
- Apple in the early 2000s
- Ford after both the financial crises and the 2020 stock market crash
- Monster Beverage Corp until the late 2000s
- Plug Power until 2020
- AMD until 2016

This was only one aspect of the problem, as r/WallStreetBets has a massive community that have multiple websites and YouTube channels that analyse the subreddit for the best stock picks. This means that many retail investors can rely on these people to filter out the memes, bad posts and ads rather than wasting their own time. Since r/pennystocks has been overlooked unreasonably, it does not have the same community that can provide this time saving service. As a result, this project will aim to filter and classify which posts are worth to take a look at.

## III. Materials and Methods
The dataset comes from posts on the subreddit r/pennystocks. They are extracted using the Pushshift API as it provides us with crucial information such as title, author, text, URL and created time. We used the iexfinance API to obtain financial data based on the stock’s performance from the time the stock was created until now. The API provides the closing price, ticker, financials, cash-flow and volumes of a specific ticker.

### Data Preprocessing
After pulling the data from the Pushshift API, we converted the csv to a database in MySQL as it made accessing and modifying data easier. For example, we ran SQL queries to clean the data of empty, removed or deleted posts. I used regular expression to extract tickers from the post and store them in the database. I used the iexfinance API to validate the ticker I and to get its closing price at the date the post was created and present date. I then calculated the percentage growth of the stock in order to label which posts were good and which posts were bad. The threshold for stock growth was set at 1.4%. We arrived at this number by looking at the SnP 500 growth over the last 3 years which was 8.6%. We looked at it over 3 years as our data was extracted over the past 3 years. Although, much of our data was extracted from within the last year where the growth of the index fund has been -7.21%. Therefore, we split the difference between the 2 numbers which was 1.4%. We used the SnP 500 index fund as it has been seen as a marker for the overall stock market but by looking at penny stocks, we want to perform better than the market average.
The text of posts was also prepared for language processing by disposing of punctuation, digits, links, double spaces and tabs. Posts that had less than 50 characters were deleted using SQL queries

SQL database when we pulled in the data initially and joined it all in the pennystocks table
![image](https://user-images.githubusercontent.com/95594161/187049963-8481f13d-34cf-4028-9686-b6cc98fc2b1e.png)

![image](https://user-images.githubusercontent.com/95594161/187049983-a7aa9049-d0d5-4b84-b8b7-48e8c82c569b.png)

![image](https://user-images.githubusercontent.com/95594161/187049991-d6a264d0-913b-4072-880c-2c5c88e95dc5.png)


### Algorithms
I lemmatized the texts of all of the post with Spark NLP, an extension package which provided a pre-trained NLP model so I could obtain features. Subsequently, from PySpark, I used HashingTF and CountVectorizer to change the data from text into vectors. HashingTF produced the document-term matrix but with reduced number of features (performs dimensionality reduction) than when I used CountVectorizer.

#### Naive Bayes
I used Naive Bayes algorithm from PySpark's machine learning library. Naive Bayes is a supervised learning classification model based on applying Bayes' theorem. The results from HashingTF and CountVectorizer are features. the modal type and smoothing value were the two hyperparameters I tested with. As well, I used complement and multinomial, the two most appropriate Naive Bayes model types. Each model type changes the algorithm with a different method to compute the model’s coefficients, where Complement Naive Bayes is more suited for imbalanced datasets than Multinomial Naive Bayes. All these factors were randomized in many iterations to obtain the best combination.

## IV. Results
The label we used to train our Naive Bayes classifier is the growth percentage of the stock linked with a given reddit post, with the instances being the text of each post.
The best model achieved an accuracy of 75.23%. This was created by using: CountVectorizer to vectorize our features, using Multinomial Naive Bayes and a smoothing parameter of 0.2684835. This model had an F1 score of 0.30, precision of 0.20 and recall of 0.49.
In the following tables you can observe the models we received from using complement and multinomial.
[insert pics]
I used 50 for 'number of features' hyperparameter instead of the default which is 20, for HashingTF. This essentially causes dimensionality reduction on each of our instances, which may be why the overall accuracy mean is lower than CountVectorizer as less features are considered during training, leading to loss of information.

![image](https://user-images.githubusercontent.com/95594161/187050005-dca49c1d-26df-4b45-a953-166bdb4cc6be.png)


![image](https://user-images.githubusercontent.com/95594161/187050009-9d036d55-da91-4a7f-927a-39d8a5bc3e6d.png)
![image](https://user-images.githubusercontent.com/95594161/187050011-8714d5bf-fe3b-481b-acae-d027c2b75788.png)

## V. Conclusion
With 75% accuracy, our model is not massively accurate but the goal of this project was to indicate which posts are worth reading for users in order to help them save time. The posts were already heavily filtered with many variables as previously mentioned so the final posts definitely have a good chance to be worth a read.

### Potential Issues
#### Bias 
- The ticker extraction code was very accurate but it did occasionally identify the wrong stock. This can cause bias as the growth percentage label we used afterwards was not relevant for the post it was linked to.

#### Lack of Data
- From 46,000 posts we extracted using the Pushshift API we trimmed the posts down to nearly 15,000 datapoints. These reduced posts were therefore of good quality however it is still a very small quantity. By acquiring even more data, we could better train our model.

### Closing Thoughts
To conclude, this project was extremely interesting as it proved to be my first proper foray into the data science workflow and using Machine Learning. From establishing a useful problem statement, extracting data, training models and reflecting on our results. It was a great learning experience that proved to deliver something useful that can be expanded on further by creating a website with the posts and the predictions listed.
