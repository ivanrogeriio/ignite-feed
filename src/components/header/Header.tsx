// Style
import style from './header.module.css';

// Logo
import igniteLogo from '../../assets/ignite-logo.svg';

export const Header = () => {
  return (
    <header className={style.header}>
      <img
        src={igniteLogo}
        alt='ignite-feed-logo'
      />
      <h1>Ígnite Feed</h1>
    </header>
  );
};
