// Style
import style from './post.module.css';

// Component
import { Comment } from '../comment/Comment';
import {
  ContentComment,
  PostProps,
} from '../../pages/Home/Home';

// Date-fns
import {
  format,
  formatDistanceToNow,
} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

export const Post = ({
  author,
  content,
  publishedAt,
}: PostProps) => {
  const [comments, setComments] = useState([
    'Post muito bacana!',
  ]);

  const [newCommentText, setNewCommentText] =
    useState('');

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'min'",
    {
      locale: ptBR,
    },
  );

  const publishedDateRelativeToNow =
    formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true,
    });

  function handleCreateNewComment() {
    event?.preventDefault();

    // Imutabilidade
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    setNewCommentText(event?.target.value);
  }

  return (
    <article className={style.post}>
      <header className={style.header}>
        <article>
          <img
            src={author.avatarUrl}
            alt={author.name}
          />
          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </article>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={style.comment}>
        {content?.map((line: ContentComment) => {
          if (line.type === 'paragraph') {
            return (
              <p key={line.content}>
                {line.content}
              </p>
            );
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href=''>{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <hr />
      <div className={style.form}>
        <strong>Deixe seu feedback</strong>
        <form
          onSubmit={() =>
            handleCreateNewComment()
          }
          onChange={handleNewCommentChange}
        >
          <textarea
            name='comment'
            placeholder='Insira aqui sua mensagem'
            value={newCommentText}
          />

          <button type='submit'>Publicar</button>
        </form>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
            />
          );
        })}
      </div>
    </article>
  );
};
