const normalizeRoute = (to) => (to === '/' ? '/' : to.replace(/\/$/, ''));

function RouteLink({ to, children, className = '', onNavigate, ...props }) {
  const route = normalizeRoute(to);

  return (
    <a
      className={className}
      href={`#${route}`}
      onClick={() => {
        onNavigate?.(route);
      }}
      {...props}
    >
      {children}
    </a>
  );
}

export default RouteLink;
