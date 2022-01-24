import Layout from 'components/Layout';
import { GetStaticPropsResult } from 'next';
import Image from 'next/image';
import { Button } from 'styles/ui/Button';
import {
  Card,
  CardArticleLink,
  CardHeader,
  CardMediaContent,
  CardsWrapper,
  CardTitle
} from 'styles/ui/Card';

const CalendarPage: React.FC<Props> = ({ calendar }) => {
  return (
    <Layout title="Feed">
      <CardsWrapper>
        {calendar.map((event, idx) => (
          <Card key={idx}>
            <CardHeader isArticle>
              <Image src={event.cover} alt={event.title} width={60} height={60} />

              <CardTitle>
                <h2>{event.title}</h2>
                <p>{event.date}</p>
              </CardTitle>
            </CardHeader>

            <CardMediaContent isArticle>
              <p>{event.description}</p>
              {event.link ? (
                <CardArticleLink>
                  <a href={event.link} target="_blank" rel="noreferrer noopener">
                    <Button>Link</Button>
                  </a>
                </CardArticleLink>
              ) : (
                ''
              )}
            </CardMediaContent>
          </Card>
        ))}
      </CardsWrapper>
    </Layout>
  );
};

export type Props = {
  calendar: {
    cover: string;
    date: string;
    description: string;
    link: string;
    title: string;
  }[];
};

export const getStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
  const calendar: Props['calendar'] = await (
    await fetch(`${process.env.NEXT_PUBLIC_CONTENT_URL}calendar.json`)
  ).json();

  return {
    props: {
      calendar
    },
    revalidate: 3600
  };
};

export default CalendarPage;
