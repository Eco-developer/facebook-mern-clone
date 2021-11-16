//const news = 'https://newsapi.org/v2/everything?q=covid-19&sources=bbc,nbc,thenewyorktimes,cnn&sortBy=relevancy&language=en&apiKey=ecdfccc482f04d37a48af9bcbc1ff410';

const newsApi = `https://gnews.io/api/v4/search?q=covid19&lang=en&sortBy=relevance&max=10&token=${process.env.REACT_APP_NEWS_API_KEY}`

export default newsApi;