const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-xl w-full">
        <h1 className="text-3xl font-semibold text-primary mb-8 text-center">
          Titanic Survival Predictor
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
