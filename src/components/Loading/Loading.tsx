import './Loading.scss';

export const Loading = (props: { children: string }) => {
  return (
    <div className="loading _message-fixed">
      <div className="loading__text">{props.children}</div>
      <div className="loading__dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
