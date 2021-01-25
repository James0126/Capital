import s from "./Button.module.scss";

type Props = { image?: string; link?: string; style?: string; text?: string };
const Button = (props: Props) => {
  const { image, link, style, text } = props;

  const buttonHandle = (e: any) => {
    e.preventDefault();
    link && window.open(link);
  };

  return (
    <button onClick={buttonHandle} className={style ? style : s.button}>
      {image && <img src={image} alt="button" />}
      {text}
    </button>
  );
};

export default Button;
