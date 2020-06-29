import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Campanha Promocional 2020</title>
          <link rel="icon" href="https://www.uptime.com.br/favicon.ico" />
          <meta charset="UTF-8"></meta>
          <meta
            name="description"
            content="Ganhe óculos VR para estudar inglês!"
          ></meta>
          <meta
            name="keywords"
            content="Comunicação em Inglês, curso de inglês, escola de inglês, inglês em 12 meses, fluência em 12 meses, up time"
          ></meta>
          <meta name="author" content="1"></meta>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:500,700,700i&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossOrigin="anonymous"
          ></link>
          <link
            media="all"
            type="text/css"
            rel="stylesheet"
            href="https://www.uptime.com.br/css/site/campanha_2020.css"
          ></link>
        </Head>

        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NMJN56Q"
              height="0"
              width="0"
              // style="display:none;visibility:hidden"
            ></iframe>
          </noscript>
          <div className="container-master">
            <div
              id="carouselExampleIndicators"
              className="carousel slide masthead"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item fase1 active">
                  <img
                    className="img-fluid d-block d-md-none"
                    src="https://www.uptime.com.br/images/campanha_2020/fase1.jpg"
                    alt="First slide"
                  />
                  <div className="carousel-caption">
                    <div className="row d-none d-lg-flex">
                      <div className="col-6">
                        <a
                          href="https://www.youtube.com/watch?v=ONKGBL6E96U"
                          className="btn btn-outline-light btn-block"
                          target="_blank"
                        >
                          Conheça a história da Aimée
                        </a>
                        <a
                          href="https://www.uptime.com.br/home"
                          className="btn btn-outline-light btn-block"
                          target="_blank"
                        >
                          Ir para o site UPTIME
                        </a>
                        <a href="#main" className="btn btn-dark btn-block">
                          Seja Fluente em Inglês
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item fase12">
                  <img
                    className="img-fluid d-block d-md-none"
                    src="https://www.uptime.com.br/images/campanha_2020/fase12.jpg"
                    alt="First slide"
                  />
                  <div className="carousel-caption">
                    <div className="row d-none d-lg-flex">
                      <div className="col-6">
                        <a
                          href="https://www.youtube.com/watch?v=5I9QijaU5sw"
                          className="btn btn-outline-light btn-block"
                          target="_blank"
                        >
                          Conheça a história do Wellington
                        </a>
                        <a
                          href="https://www.uptime.com.br/home"
                          className="btn btn-outline-light btn-block"
                          target="_blank"
                        >
                          Ir para o site UPTIME
                        </a>
                        <a href="#main" className="btn btn-dark btn-block">
                          Seja Fluente em Inglês
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item fase13">
                  <img
                    className="img-fluid d-block d-md-none"
                    src="https://www.uptime.com.br/images/campanha_2020/fase13.jpg"
                    alt="First slide"
                  />
                  <div className="carousel-caption">
                    <div className="row d-none d-lg-flex">
                      <div className="col-6">
                        <a
                          href="https://www.youtube.com/watch?v=2-cW19eJUVw"
                          className="btn btn-outline-light btn-block"
                          target="_blank"
                        >
                          Conheça a história da Bella
                        </a>
                        <a
                          href="https://www.uptime.com.br/home"
                          className="btn btn-outline-light btn-block"
                          target="_blank"
                        >
                          Ir para o site UPTIME
                        </a>
                        <a href="#main" className="btn btn-dark btn-block">
                          Seja Fluente em Inglês
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            <main className="p-5" id="main">
              <form
                method="post"
                action="https://www.uptime.com.br"
                className="row ml-0 mr-0 justify-content-center"
              >
                <div className="pl-0 pr-0 col-lg-10 offset-lg-2">
                  <h1 className="text-dark h3 text-uppercase">
                    Comece hoje a construir sua história
                  </h1>
                </div>
                <div className="col-lg-4 pl-0 pr-0 pr-lg-2">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Nome:"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="E-mail:"
                      required
                    />
                  </div>
                  <div className="form-group mb-3 mb-lg-0">
                    <input
                      type="text"
                      className="form-control phone"
                      name="telefone"
                      id="telefone"
                      placeholder="Telefone:"
                      maxLength="15"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-4 pr-0 pl-0 pl-lg-2">
                  <div className="form-group mb-3">
                    <select
                      name="uf"
                      id="states_lead_campanha"
                      className="form-control"
                    >
                      <option value="">Selecione seu estado</option>
                      <option value="AL">AL</option>
                      <option value="AM">AM</option>
                      <option value="BA">BA</option>
                      <option value="CE">CE</option>
                      <option value="DF">DF</option>
                      <option value="ES">ES</option>
                      <option value="GO">GO</option>
                      <option value="MA">MA</option>
                      <option value="MG">MG</option>
                      <option value="MS">MS</option>
                      <option value="MT">MT</option>
                      <option value="PB">PB</option>
                      <option value="PE">PE</option>
                      <option value="PR">PR</option>
                      <option value="RJ">RJ</option>
                      <option value="RO">RO</option>
                      <option value="RS">RS</option>
                      <option value="SC">SC</option>
                      <option value="SE">SE</option>
                      <option value="SP">SP</option>
                      <option value="TO">TO</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <select
                      name="city"
                      id="cities_lead_campanha"
                      className="form-control"
                    >
                      <option value="">Selecione sua cidade</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      name="branch"
                      id="branches_lead_campanha"
                      className="form-control"
                    >
                      <option value="">Escolha a unidade mais próxima</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-success btn-block">
                    Cadastrar
                  </button>
                  <a
                    href="https://www.uptime.com.br/home"
                    className="btn btn-light btn-block mt-3 mb-0 d-block d-lg-none"
                    target="_blank"
                  >
                    Ir para o site UPTIME
                  </a>
                </div>
              </form>
            </main>
          </div>
        </body>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossOrigin="anonymous"
        ></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

        <script src="//cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.2.0/bootbox.min.js"></script>

        <script src="//malsup.github.io/jquery.form.js"></script>

        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery.blockUI/2.66.0-2013.10.09/jquery.blockUI.min.js"></script>

        <script src="https://www.uptime.com.br/js/site/jquery.mask.min.js"></script>

        <script src="https://www.uptime.com.br/js/site/jquery.noty.packaged.min.js"></script>

        <script src="https://www.uptime.com.br/js/site/jquery.mobile.1.3.2.min.js"></script>

        <script src="https://www.uptime.com.br/js/site/jquery.youtubepopup.min.js"></script>

        <script src="https://www.uptime.com.br/js/site/campanha_2020.js"></script>
      </div>
      <style jsx>{`
        .fase12 {
          background-image: url("https://www.uptime.com.br/images/campanha_2020/fase12.jpg");
        }

        .fase13 {
          background-image: url("https://www.uptime.com.br/images/campanha_2020/fase13.jpg");
        }

        .fase1 {
          background-image: url("https://www.uptime.com.br/images/campanha_2020/fase1.jpg");
        }

        body {
          background-color: #fcba38 !important;
        }

        h1 {
          font-weight: 700;
          font-style: italic;
        }

        .btn,
        .form-control {
          border-radius: 100px;
        }

        button[type="submit"] {
          font-weight: 700;
        }

        .carousel-caption {
          position: absolute;
          right: 15%;
          /*bottom: 250px;*/
          left: 7%;
          z-index: 10;
          padding-top: 20px;
          padding-bottom: 20px;
          text-align: center;
        }

        .masthead .carousel-item {
          padding-top: 10rem;
          padding-bottom: calc(10rem - 72px);
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: scroll;
          background-size: cover;
        }

        @media (min-width: 992px) {
          .masthead .carousel-item {
            height: 100vh;
            min-height: 40rem;
            padding-top: 72px;
            padding-bottom: 0;
          }
        }

        @media (max-width: 767px) {
          .masthead .carousel-item {
            padding-top: 0;
            background-image: none !important;
            padding-bottom: 0;
          }
        }

        .bg-sucesso {
          background-color: #fba839 !important;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }

        * {
          font-family: "Montserrat", sans-serif;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}
