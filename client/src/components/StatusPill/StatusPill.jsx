import classNames from 'classnames'

export function StatusPill({ value }) {
  const active = value;

  return (
    <span
      className={
        classNames(
          "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
          active === '1' ? "bg-green-100 text-green-800" : null,
          active === '0' ? "bg-yellow-100 text-yellow-800" : null
        )
      }
    >
      {active === '1' ? 'Active' : 'Inactive'}
    </span>
  );
};