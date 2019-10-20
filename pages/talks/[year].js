import Layout from "../../components/Layout";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import MediaCard from "../../components/Card/MediaCard";
import WabyCard from "../../components/Card/WabyCard";
import Carousel from "../../components/Carousel/Carousel";
import { two } from "../../utils";
const Talk = props => {
  const { year, speakers, summaryUrl } = props;
  // const testImages = [
  //   `https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60%20100w,%20https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60%20200w,%20https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60%20300w,%20https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60%20400w,%20https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60%20500w,%20https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60%20600w,%20https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60%20700w,%20https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60%20800w,%20https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60%20900w,%20https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60%201000w,%20https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60%201100w,%20https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60%201200w,%20https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60%201296w,%20https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60%201400w,%20https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60%201600w,%20https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=60%201800w,%20https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=60%202000w,%20https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=60%202200w,%20https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=60%202400w,%20https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&auto=format&fit=crop&w=2592&q=60%202592w`,
  //   `https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60%20100w,%20https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60%20200w,%20https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60%20300w,%20https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60%20400w,%20https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60%20500w,%20https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60%20600w,%20https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60%20700w,%20https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60%20800w,%20https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60%20900w,%20https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60%201000w,%20https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60%201100w,%20https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60%201200w,%20https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60%201296w,%20https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60%201400w,%20https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60%201600w,%20https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=60%201800w,%20https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=60%202000w,%20https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=60%202200w,%20https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=60%202400w,%20https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2592&q=60%202592w`
  // ];
  return (
    <Layout>
      <Head>
        <title>{year}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      {Boolean(summaryUrl) && (
        <iframe
          width="825px"
          height="465px"
          src={summaryUrl}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
      <div>
        {two(speakers).map((twoSpeakers, i) => (
          <WabyCard key={i}>
            {twoSpeakers.map(({ name, id, summary, videoUrl }) => (
              <MediaCard
                title={name}
                key={id}
                content={summary}
                youtubeUrl={videoUrl}
              />
            ))}
          </WabyCard>
        ))}
      </div>
      <style jsx>{`
        div div {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </Layout>
  );
};

Talk.getInitialProps = async ({ query }) => {
  const { year } = query;
  const reqSpeakers = await fetch(`http://localhost:3001/speakers/${year}`);
  const { data: speakers, summaryUrl } = await reqSpeakers.json();
  return { speakers, year, summaryUrl };
};

export default Talk;
