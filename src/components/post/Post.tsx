// Style
import { Comment } from '../comment/Comment';
import style from './post.module.css';

export const Post = () => {
  return (
    <article className={style.post}>
      <header className={style.header}>
        <article>
          <img
            src='https://media.licdn.com/dms/image/C4E03AQFYw6v359Mlvg/profile-displayphoto-shrink_200_200/0/1549402947351?e=1684972800&v=beta&t=LHgERGwRzlHIfyZVmf97KmmuFL_PNT1XIBpDuPhimSM'
            alt=''
          />
          <div>
            <strong>Lucas Simas</strong>
            <span>LT in Santander</span>
          </div>
        </article>
        <span>publicado há 1h</span>
      </header>
      <p className={style.comment}>
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Hic, repudiandae odio?
        Nesciunt fuga ullam amet doloremque
        repellat dolorum, quasi atque, ipsum enim
        animi quis! Et aliquid iure voluptatibus
        eum quas?
      </p>
      <hr />
      <div className={style.form}>
        <strong>Deixe seu feedback</strong>
        <form action=''>
          <textarea
            name=''
            id=''
            placeholder='Insira aqui sua mensagem'
          />

          <button type='submit'>Publicar</button>
        </form>
        <Comment />
      </div>
    </article>
  );
};
