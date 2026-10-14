import Header from './Header';
import Footer from './Footer';

type LayoutProps = { children: React.ReactNode };

function Layout({ children }: LayoutProps) {
  return (
    <div id="page">
      <div id="pageHeader">
        <Header />
      </div>
      <div id="pageContent">{children}</div>
      <div id="pageFooter">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;