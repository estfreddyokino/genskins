export function meta() {
    return [
      { title: 'Genskins | Políticas de Frete' },
      { icon: 'app/image/favicon.png' }
    ];
  }
  
  export default function TrocasEDevolucoes() {
    return (
      <div className="max-w-6xl mx-auto py-20 px-6 text-[#0047FF]">
        {/* Definindo a fonte personalizada com @font-face */}
        <style>
          {`
            @font-face {
              font-weight: 700;
              font-family: 'custom_114584';
              font-style: normal;
              src: url("https://c-p.rmcdn1.net/custom-fonts/font-c49e977d-a711-4f49-b2a1-beca235fa87c.ttf") format('truetype');
            }
          `}
        </style>
  
        <h1
          className="text-4xl font-bold mb-4"
          style={{
            marginTop: '50px',
            marginLeft: '20px',
            marginBottom: '10px',
            fontFamily: 'custom_114584, Inter, sans-serif', // Aplicando a fonte personalizada
            fontWeight: '900',
            fontSize: '25px',
          }}
        >
          
          Trocas & Devoluções
        </h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Coluna 1 */}
          <div>
            <div className="border-b-2 border-[#0047FF] mb-6 w-full" style={{marginLeft: '20px', marginBottom: '10px' }}></div>
            <h2 className="text-2xl font-semibold mb-4"  style={{marginLeft: '20px', marginBottom: '10px' }}>Políticas de trocas e devoluções</h2>
            <p className="text-base font-medium"  style={{marginLeft: '20px', marginBottom: '10px' }}>
            Aceitamos devoluções dentro de 30 dias a partir da <br/> data da sua compra.
            </p>
          </div>
  
          
          
           
           
             
         
        </div>
      </div>
    );
  }
  