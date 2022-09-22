function DefaultLayout(props: DefaultLayoutProps) {
  const { children } = props;
  return (
    <div className="default-layout-root">
      <div className="default-layout__header">{/* <Header /> */}</div>
      <div className="default-layout__main">
        <div className="main__sidebar">{/* <Sidebar /> */}</div>
        <div className="main__content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;

export interface DefaultLayoutProps {
  children: any;
}
