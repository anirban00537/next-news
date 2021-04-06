const news = ({ articles }) => {
  return (
    <div>
      <div>
        {articles.map((article, index) => (
          <p key={index}>{article.title}</p>
        ))}
      </div>
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const pagenumber = context.query.slug;
  // if (pagenumber < 1 || !pagenumber) {
  //   return {
  //     props: {
  //       article: [],
  //       pagenumber: 1,
  //     },
  //   };
  // }
  // const apiKey = "9a8e85f0313246a7a3015f815168628a";
  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=2&page=${pagenumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.apiKey}`,
      },
    }
  );
  const apiJson = await apiResponse.json();
  return {
    props: {
      articles: apiJson.articles,
      pagenumber: Number.parseInt(pagenumber),
    },
  };
};

export default news;
