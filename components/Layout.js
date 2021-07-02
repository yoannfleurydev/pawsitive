import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const Layout = ({ children, ...rest }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};
