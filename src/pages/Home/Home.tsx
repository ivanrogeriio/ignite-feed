// Components
import { Header } from '../../components/header/Header';
import { Post } from '../../components/post/Post';
import { Sidebar } from '../../components/sidebar/Sidebar';

// Style
import style from './home.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        'https://github.com/ivanrogeriio.png',
      name: 'Ivan Rogério',
      role: 'CEO @ Digisource',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Salve galera, blz?',
      },
      {
        type: 'paragraph',
        content:
          'Hoje fiz o lançamento da minha marca e também do site do mesmo! Utilizei diversas tecnologias recentes como o Next 13 e também GraphQL.',
      },
      {
        type: 'link',
        content: 'digisource.agency',
      },
    ],
    publishedAt: new Date('2023-03-26 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        'https://media.licdn.com/dms/image/C4E03AQFYw6v359Mlvg/profile-displayphoto-shrink_200_200/0/1549402947351?e=1684972800&v=beta&t=LHgERGwRzlHIfyZVmf97KmmuFL_PNT1XIBpDuPhimSM',
      name: 'Lucas Simas',
      role: 'LT @ F1RST',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Salve galera, blz?',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: '@f1rst',
      },
    ],
    publishedAt: new Date('2023-04-01 20:00:00'),
  },
];

export type ContentComment = {
  type: 'paragraph' | 'link';
  content: string;
};

export type PostProps = {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: Array<ContentComment>;
  publishedAt?: any;
};

export const Home = () => {
  return (
    <>
      <Header />

      <main className={style.wrapper}>
        <Sidebar />
        <section className={style.postSection}>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </section>
      </main>
    </>
  );
};
