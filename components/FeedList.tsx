import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'styles/ui/Button';
import {
  Card,
  CardArticleLink,
  CardHeader,
  CardMediaContent,
  CardsWrapper,
  CardTitle
} from 'styles/ui/Card';
import { PostCover } from 'types/common';
import { getPostAuthor, sortByDate } from 'utils/common';

const FeedList = ({ covers }: Props) => {
  return (
    <CardsWrapper>
      {sortByDate(covers).map((post) => (
        <Card key={post.slug}>
          <CardHeader isArticle>
            <div>
              <Image src={post.cover} alt={post.title} width={60} height={60} layout="fixed" />
            </div>

            <CardTitle>
              <h2>{post.title}</h2>
              <p>Creado por: {getPostAuthor(post.author)}</p>
            </CardTitle>
          </CardHeader>

          <CardMediaContent isArticle>
            <p>{post.description}</p>

            <CardArticleLink>
              <Link href={`/feed/${post.slug}`} passHref>
                <a>
                  <Button>Leer más</Button>
                </a>
              </Link>
            </CardArticleLink>
          </CardMediaContent>
        </Card>
      ))}
    </CardsWrapper>
  );
};

export type Props = {
  covers: PostCover[];
};

export default FeedList;
