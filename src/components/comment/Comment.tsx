// Style
import style from './comment.module.css';

// Icons
import {
  Trash,
  HandsClapping,
} from '@phosphor-icons/react';

export const Comment = () => {
  return (
    <article className={style.comment}>
      <img
        className={style.avatar}
        src='https://github.com/ivanrogeriio.png'
        alt='avatar'
      />
      <div className={style.commentSection}>
        <div className={style.commentBox}>
          <header>
            <div>
              <h2>Ivan Rogério</h2>
              <span>Cerca de 2h</span>
            </div>
            <Trash
              className={style.icon}
              size={24}
            />
          </header>
          <p>Ficou muito da hora!</p>
        </div>
        <span className={style.aplaudir}>
          <HandsClapping size={24} />
          Aplaudir • 03
        </span>
      </div>
    </article>
  );
};
