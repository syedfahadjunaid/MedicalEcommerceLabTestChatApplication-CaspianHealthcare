import classNames from 'classnames';

function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    'rounded border bg-white p-3 w-full',
    className
  );
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
