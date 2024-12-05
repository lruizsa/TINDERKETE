import React from 'react';
import img1 from '../images/facebookAplicacion.png';
import img2 from '../images/logoInsta.png';
import img3 from '../images/Xaplicacion.png';
import logo from '../images/logo.png';

function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {/* Burua ezkerra */}
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src={logo} className="h-8 me-3" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Tinderkete
              </span>
            </a>
          </div>

          {/* Burua eskubi */}
          <div className="flex grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Kontaktua
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    lruizsa23wg@ikzubirimanteo.com
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    oaginagabo23wg@ikzubirimanteo.com
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    imarticorenair23wg@ikzubirimanteo.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Elemento único */}
        <div className="text-center my-8">
          <h3 className="text-2xl font-bold text-white">
            "Kirola baino gehiago, benetako loturak!"
          </h3>
          <p className="text-gray-400 mt-4">
          Tinderketen, pasioa eta tradizioa batzen ditugu. Prest zaude hurrengo erronkarako?
          </p>
        </div>

        {/* Sare sozialak */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()} Tinderkete. All Rights Reserved.
          </span>
          <div className="flex sm:justify-center sm:mt-0 gap-2">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <img
                src={img1}
                alt="Facebook"
                className="w-12 h-12 rounded-5 transition-transform duration-200 hover:scale-110"
              />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <img
                src={img2}
                alt="Instagram"
                className="w-12 h-12 rounded-5 transition-transform duration-200 hover:scale-110"
              />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <img
                src={img3}
                alt="X"
                className="w-12 h-12 rounded-5 transition-transform duration-200 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
