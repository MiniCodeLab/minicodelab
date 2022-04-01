import Layout from 'components/Layout';
import { getCourseContent } from 'libs/dataSources';
import { GetStaticPropsResult } from 'next';
import { Course } from 'types/common';
import { getMetaData } from 'utils/common';
import {
  Card,
  CardArticleLink,
  CardHeader,
  CardMediaContent,
  CardsWrapper,
  CardTitle
} from 'styles/ui/Card';
import Image from 'next/image';

const CoursePage: React.FC<Props> = ({ courses }) => {
  return (
    <Layout
      title="Videos"
      headChildren={getMetaData({
        title: 'MiniCodeLab Courses',
        description: 'Listado de cursos que ofrecemos en MiniCodeLab'
      })}
    >
      {courses.map((course, idx) => (
        <Card key={idx}>
          <CardHeader isArticle>
            <Image src="/images/flask.png" alt="logo" width={60} height={60} />
            <CardTitle>
              <h2>{course.name}</h2>
              <p>{course.duration}</p>
            </CardTitle>
          </CardHeader>
          <CardMediaContent isArticle>
            <p>{course.description}</p>
          </CardMediaContent>
        </Card>
      ))}
    </Layout>
  );
};

export type Props = {
  courses: Course[];
};

export const getStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
  return {
    props: {
      courses: await getCourseContent()
    },
    revalidate: 3600
  };
};

export default CoursePage;
