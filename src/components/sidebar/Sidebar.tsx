// Style
import style from './sidebar.module.css';

// Icons
import { PencilSimpleLine } from '@phosphor-icons/react';

export const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src='https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=100'
        alt='teste'
      />
      <section className={style.profile}>
        <img
          src='https://github.com/ivanrogeriio.png'
          alt='avatar'
        />

        <strong>Ivan Rogério</strong>
        <span>CEO at Digisource</span>
      </section>

      <footer className={style.footer}>
        <a href='#'>
          <PencilSimpleLine
            size={20}
            stroke='1.5'
          />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
