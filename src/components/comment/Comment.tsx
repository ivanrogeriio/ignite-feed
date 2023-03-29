// Style
import style from './comment.module.css';

// Icons
import {
  Trash,
  HandsClapping,
} from '@phosphor-icons/react';
import { useState } from 'react';

type CommentProps = {
  content: string;
  onDeleteComment: any;
};

export const Comment = ({
  content,
  onDeleteComment,
}: CommentProps) => {
  const [clapCount, setClapCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleClapComment() {
    setClapCount(clapCount + 1);
  }

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
            <button onClick={handleDeleteComment}>
              <Trash
                className={style.icon}
                size={24}
              />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <button onClick={handleClapComment}>
          <HandsClapping size={24} />
          Aplaudir • <span>{clapCount}</span>
        </button>
      </div>
    </article>
  );
};
