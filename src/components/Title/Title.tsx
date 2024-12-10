import './Title.scss';

export const Title = (props: { children: string }) => {
  return (
    <div className="title">
      <h2 className="title__text">{props.children}</h2>
    </div>
  );
};
