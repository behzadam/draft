import { Logo } from '../logo/logo';
import { NavbarSite } from '../navbar/navbar-site';

export const LayoutSite = ({
  children
}: React.PropsWithChildren) => {
  return (
    <>
      <header className="border-b border-gray-100">
        <section className="container flex items-center justify-between w-full max-w-screen-lg py-4">
          <Logo />
          <NavbarSite />
        </section>
      </header>
      <main>{children}</main>
    </>
  );
};
