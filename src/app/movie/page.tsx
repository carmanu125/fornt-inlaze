/* eslint-disable prettier/prettier */
import RootLayout from "../layout";

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
      <main>
        <div className="row">
          <div className="col-1">
            <img id="movie-img-back" src="/navigate_before.png" alt="atras"  />
          </div>
        </div>
        <div className="movie-main-banner row">
          <div className="col-4">
            <div className="row">
              <div className="col-3"></div>
              <div className="col-8">
                <img className="movie-photo" src="/logo.png" alt="movie photo" />
              </div>
            </div>
            
          </div>
          <div className="col-7">
            <h2 className="banner-tittle">Tittle movie</h2>
            <div className="row ">
              <div className="col-4 banner-date">
                <h5>date movie</h5>
              </div>
              <div className="col-4 text-right banner-date">
                <h5>duration</h5>
              </div>
            </div>
            <h4 className="banner-description">Overview: </h4>
            <p className="banner-description-content">description movie</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="row">
              <div className="col-3"></div>
              <div className="col-8">
                <a id="movie-trailer" className="btn" href="/" >Oficial Trailer</a>                          
              </div>
            </div>
          </div>
          <div className="col-7">
            
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
