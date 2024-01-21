type LoaderProps = {
  fallback: React.ReactNode;
  isLoading: boolean;
  children: React.ReactNode;
};

export const Loader = ({ isLoading, fallback, children }: LoaderProps) => {
  return <>{isLoading ? fallback : children}</>;
};
