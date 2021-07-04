import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Layout = ({ children, ...rest }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-1 flex flex-col">{children}</div>
      <Footer />
    </div>
  );
};
