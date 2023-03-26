// Components
import { Header } from '../../components/header/Header';
import { Post } from '../../components/post/Post';
import { Sidebar } from '../../components/sidebar/Sidebar';

// Style
import style from './home.module.css';

export const Home = () => {
  return (
    <>
      <Header />

      <main className={style.wrapper}>
        <Sidebar />
        <section className={style.postSection}>
          <Post />
          <Post />
        </section>
      </main>
    </>
  );
};
