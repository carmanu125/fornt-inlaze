import RootLayout from "./layout";

export default function Home(): JSX.Element {
  return (
    <RootLayout>
      <header className="row">
        <div className="col-1"></div>
        <div className="col-2">
            <img className="img-logo" src="/logo.png" alt="logo App" />
        </div>
        <div className="col-6 text-right">
          <div className="row">
            <div className="col-2">
            <a href="/classification" className="btn btn-lg text-light btn-header">popular</a>
            </div>
            <div className="col-2">
            <a href="/favorites" className="btn btn-lg text-light btn-header">favoritos</a>
            </div>
          </div>
        </div>
        <div className="col-2 text-end">
          <img id="user-photo" src="/yellow-user.png" alt="user" />
        </div>
      </header>
      <div className="slider"></div>
      <main>
        <div className="row">
          <div className="col-2">
            <div className="row">
              <div className="col-3"></div>
              <div className="col-8">
                <img className="movie-photo" src="/logo.png" alt="movie photo" />
              </div>
            </div>
          </div>
          <div className="col-10"></div>
        </div>        
      </main>

    </RootLayout>
  );
}
