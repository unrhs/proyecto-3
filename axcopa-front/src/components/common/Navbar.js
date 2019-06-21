import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ _id, email, username, logout }) => (
  <nav>
    {" "}
    <nav>
      <nav
        className="uk-navbar-container uk-navbar-transparent  "
        uk-navbar="true"
      >
        <div className="uk-navbar-center">
          <a className="uk-navbar-item uk-logo">ACOXPA</a>
          <div className="uk-divider-icon" />
        </div>{" "}
      </nav>
      <nav
        className="uk-navbar-container uk-navbar-transparent  "
        uk-navbar="true"
      >
        <div className="uk-navbar-center">
          <nav
            className="uk-navbar-container"
            uk-navbar="boundary-align: true; align: left;"
          >
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li>
                  <a href="#">Compra</a>
                  <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li className="uk-active">
                        <a href="#">Electrónica</a>
                      </li>
                      <li className="uk-nav-divider" />
                      <li>
                        <a href="#">Moda - Niños</a>
                      </li>
                      <li>
                        <a href="#">Moda - Hombres</a>
                      </li>
                      <li>
                        <a href="#">Moda - Mujeres</a>
                      </li>
                      <li className="uk-nav-divider" />
                      <li>
                        <a href="#">Perfumerías</a>
                      </li>
                      <li className="uk-nav-divider" />
                      <li>
                        <a href="#">Hogar</a>
                      </li>
                      <li className="uk-nav-divider" />
                      <li>
                        <a href="#">Jugueterías</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">Servicios</a>
                  <div className="uk-navbar-dropdown uk-navbar-dropdown-width-2">
                    <div
                      className="uk-navbar-dropdown-grid uk-child-width-1-2"
                      uk-grid="true"
                    >
                      <div>
                        <ul className="uk-nav uk-navbar-dropdown-nav">
                          <li className="uk-active">
                            <a href="#">Peluquerías</a>
                          </li>
                          <li>
                            <a href="#">Agencias de Viajes</a>
                          </li>
                          <li className="uk-nav-header">Autolavados</li>
                          <li>
                            <a href="#">Cines</a>
                          </li>
                          <li>
                            <a href="#">Agencias Automotrices</a>
                          </li>
                          <li className="uk-nav-divider" />
                          <li>
                            <a href="#">Servicio de Cable</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="uk-nav uk-navbar-dropdown-nav">
                          <li className="uk-active">
                            <a href="#">Gasolinerías</a>
                          </li>
                          <li>
                            <a href="#">Renta de Salones</a>
                          </li>
                          <li className="uk-nav-header">
                            Elétricos y Cerrajeros
                          </li>
                          <li>
                            <a href="#">Pintores</a>
                          </li>
                          <li>
                            <a href="#">Abogados</a>
                          </li>
                          <li className="uk-nav-divider" />
                          <li>
                            <a href="#">Otros Servicios</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">Restaurantes</a>
                  <div className="uk-navbar-dropdown uk-navbar-dropdown-width-3">
                    <div
                      className="uk-navbar-dropdown-grid uk-child-width-1-3"
                      uk-grid="true"
                    >
                      <div>
                        <ul className="uk-nav uk-navbar-dropdown-nav">
                          <li className="uk-active">
                            <a href="#">Restaurantes</a>
                          </li>
                          <li>
                            <a href="#">Asiática</a>
                          </li>
                          <li>
                            <a href="#">Internacional</a>
                          </li>
                          <li>
                            <a href="#">Cómida Rápida</a>
                          </li>
                          <li>
                            <a href="#">Mexicana</a>
                          </li>
                          <li>
                            <a href="#">Mariscos</a>
                          </li>

                          <li>
                            <a href="#">Cafeterías</a>
                          </li>
                          <li className="uk-nav-divider" />
                          <li>
                            <a href="#">Otros Restaurantes</a>
                          </li>
                          <li>
                            <a href="#">Panaderías</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="uk-nav uk-navbar-dropdown-nav">
                          <li className="uk-active">
                            <a href="#">Electrónicos</a>
                          </li>
                          <li>
                            <a href="#">Item</a>
                          </li>
                          <li className="uk-nav-header">Header</li>
                          <li>
                            <a href="#">Item</a>
                          </li>
                          <li>
                            <a href="#">Item</a>
                          </li>
                          <li className="uk-nav-divider" />
                          <li>
                            <a href="#">Item</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="uk-nav uk-navbar-dropdown-nav">
                          <li className="uk-active">
                            <a href="#">Active</a>
                          </li>
                          <li>
                            <a href="#">Item</a>
                          </li>
                          <li className="uk-nav-header">Header</li>
                          <li>
                            <a href="#">Item</a>
                          </li>
                          <li>
                            <a href="#">Item</a>
                          </li>
                          <li className="uk-nav-divider" />
                          <li>
                            <a href="#">Item</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav">
                <li>
                  <a href="#">Item</a>
                  <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li className="uk-active">
                        <a href="#">Active</a>
                      </li>
                      <li>
                        <a href="#">Item</a>
                      </li>
                      <li className="uk-nav-header">Header</li>
                      <li>
                        <a href="#">Item</a>
                      </li>
                      <li>
                        <a href="#">Item</a>
                      </li>
                      <li className="uk-nav-divider" />
                      <li>
                        <a href="#">Item</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div className="uk-navbar-right">
            {!_id ? (
              <ul className="uk-navbar-nav">
                <li>
                  <Link to="/login">Iniciar sesión</Link>
                </li>
                <li>
                  <Link to="/register">Registro</Link>
                </li>
              </ul>
            ) : (
              <ul className="uk-navbar-nav">
                <li onClick={logout}>
                  <a href="#">Cerrar sesión</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      <nav
        className="uk-navbar-container uk-margin uk-navbar-left"
        uk-navbar="true"
      >
        <div className="uk-navbar-center">
          <ul className="uk-navbar-nav">
            <li>
              <a href="#">
                <span
                  className="uk-icon uk-margin-small-right"
                  uk-icon="icon: star"
                />
                OFERTAS
              </a>
            </li>
          </ul>

          <div className="uk-navbar-item">
            <div>
              Nombre <a href="#">/</a>
            </div>
          </div>

          <div className="uk-navbar-item">
            <form action="javascript:void(0)">
              <input
                className="uk-input uk-form-width-small"
                type="text"
                placeholder="Negocio"
              />
              <button className="uk-button uk-button-default">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    </nav>
  </nav>
);

export default NavBar;
