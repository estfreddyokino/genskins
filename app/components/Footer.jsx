import 'app/styles/Footer.css';
export function Footer() {
  return (
    <footer
      className="bg-[#F1F3F5] text-[#1A1A1A] px-16 py-6 text-[12px]"
      style={{paddingTop: '0px', paddingBottom: '20px'}}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-light text-[#0047FF]">
            <img src="app/image/footerLogo.png" alt="Logo" />
          </h1>

          <div>
            <p
              className="text-[#0047FF] font-semibold"
              style={{fontFamily: '12px'}}
            >
              CADASTRE SEU EMAIL
            </p>
            <p style={{fontSize: '9px', color: '#8b8c8d', fontWeight: '600'}}>
              Cadastre seu e-mail e seja o primeiro
              <br />a saber das novidades da GENSKINS!
            </p>
            <form className="flex mt-4">
              <input
                type="email"
                placeholder="email"
                className="px-4 py-2 rounded-l-full border border-gray-300 w-full focus:outline-none"
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  borderColor: '#fff',
                  marginRight: '5px',
                  height: '30px',
                  width: '170px',
                }}
              />
              <button
                type="submit"
                style={{
                  height: '35px',
                  borderColor: '0047FF',
                  backgroundColor: '#0047FF',
                  color: '#fff',
                  borderRadius: '20px',
                  padding: '10px 20px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                enviar
              </button>
            </form>
          </div>
        </div>

        <div style={{marginTop: '80px', marginLeft: '100px'}}>
          <p
            className="text-[#0047FF] font-semibold text-center mb-4"
            style={{fontSize: '12px'}}
          >
            PRECISA DE AJUDA?
          </p>
          <ul className="space-y-1 text-center">
            <li>
              <a
                href="/politica-de-frete"
                style={{color: '#8b8c8d', fontWeight: '600'}}
              >
                Políticas de frete
              </a>
            </li>
            <li>
              <a
                href="/trocas-e-devolucoes"
                style={{color: '#8b8c8d', fontWeight: '600'}}
              >
                Trocas & Devoluções
              </a>
            </li>
            <li>
              <a
                href="/termos-de-uso"
                style={{color: '#8b8c8d', fontWeight: '600'}}
              >
                Termos de uso
              </a>
            </li>
          </ul>
        </div>

        <div style={{marginTop: '80px', marginLeft: '100px'}}>
          <p
            className="text-[#0047FF] font-semibold mb-2"
            style={{fontSize: '12px'}}
          >
            NOSSO CONTATO
          </p>
          <a
            href="mailto:mygenskins@gmail.com.br"
            style={{
              fontSize: '9px',
              color: '#8b8c8d',
              fontWeight: '700',
              textDecoration: 'none',
            }}
          >
            mygenskins@gmail.com.br
          </a>
        </div>

        <div>
          <p
            className="text-[#0047FF] font-semibold mb-2"
            style={{
              marginTop: '80px',
              marginLeft: '100px',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            SEGUE A GENTE
          </p>
          <div
            className="flex gap-4 text-[#0047FF] text-xl"
            style={{textAlign: 'center', marginLeft: '100px'}}
          >
            <img
              src="app/image/face.png"
              alt="Logo"
              style={{height: '18px', marginTop: '10px'}}
            />
            <img
              src="app/image/insta.png"
              alt="Logo"
              style={{height: '18px', marginTop: '10px'}}
            />
            <img
              src="app/image/x.png"
              alt="Logo"
              style={{height: '18px', marginTop: '10px'}}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 font-light">
        <p style={{fontSize: '8px', fontWeight: '700', color: '#8b8c8d'}}>
          GENSKINS COMERCIAL IMPORTADORA LTDA
        </p>
        <p style={{fontSize: '8px', fontWeight: '700', color: '#8b8c8d'}}>
          Direitos reservados. 57728715000182 - R. ALMIRANTE TAMANDARÉ,20,
          CENTRO - ITAJAÍ, SC.
        </p>
      </div>
    </footer>
  );
}
