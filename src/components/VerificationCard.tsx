import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2, Search, AlertCircle } from 'lucide-react';

// Validate environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Please connect to Supabase using the "Connect to Supabase" button in the top right corner.'
  );
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface DiplomaData {
  codigo_verificacao: string;
  nome: string;
  curso: string;
  instituicao: string;
  data_emissao: string;
  qr_code_url: string;
}

const DiplomaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="105" height="77" viewBox="0 0 105 77" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="1.66212" y="1.66212" width="101.676" height="73.6758" rx="3.32425" fill="white" stroke="#111d7d" strokeWidth="3.32425" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.9735 1.66187C25.9735 0.744045 26.7176 0 27.6354 0H30.3906C31.3084 0 32.0525 0.744045 32.0525 1.66187C32.0525 2.5797 31.3084 3.32374 30.3906 3.32374H27.6354C26.7176 3.32374 25.9735 2.5797 25.9735 1.66187Z" fill="#111d7d"/>
      <path d="M35.3684 1.66187C35.3684 0.744045 36.1125 0 37.0303 0H39.7855C40.7033 0 41.4474 0.744045 41.4474 1.66187C41.4474 2.5797 40.7033 3.32374 39.7855 3.32374H37.0303C36.1125 3.32374 35.3684 2.5797 35.3684 1.66187Z" fill="#111d7d"/>
      <rect x="30.3945" width="9.39474" height="3.32374" fill="#FEFEFE"/>
      <path d="M25.9735 1.66187C25.9735 0.744045 26.7176 0 27.6354 0H30.3906C31.3084 0 32.0525 0.744045 32.0525 1.66187C32.0525 2.5797 31.3084 3.32374 30.3906 3.32374H27.6354C26.7176 3.32374 25.9735 2.5797 25.9735 1.66187Z" fill="#111d7d"/>
      <path d="M35.3684 1.66187C35.3684 0.744045 36.1125 0 37.0303 0H39.7855C40.7033 0 41.4474 0.744045 41.4474 1.66187C41.4474 2.5797 40.7033 3.32374 39.7855 3.32374H37.0303C36.1125 3.32374 35.3684 2.5797 35.3684 1.66187Z" fill="#111d7d"/>
      <mask id="path-7-inside-1" fill="white">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.56581 13.8489C11.7705 13.8489 14.3684 11.2447 14.3684 8.03235C14.3684 7.9395 14.3663 7.84716 14.362 7.75537H90.2451C90.1369 8.19921 90.0796 8.66302 90.0796 9.14025C90.0796 12.3526 92.6775 14.9568 95.8822 14.9568C96.358 14.9568 96.8205 14.8994 97.263 14.7911V62.2089C96.8205 62.1006 96.358 62.0432 95.8822 62.0432C92.6775 62.0432 90.0796 64.6474 90.0796 67.8597C90.0796 68.337 90.1369 68.8008 90.2451 69.2446H14.203C14.3111 68.8008 14.3684 68.337 14.3684 67.8597C14.3684 64.6474 11.7705 62.0432 8.56581 62.0432C8.47312 62.0432 8.38094 62.0454 8.28931 62.0497V13.8424C8.38094 13.8467 8.47312 13.8489 8.56581 13.8489Z"/>
      </mask>
      <path d="M14.362 7.75537V4.98516C13.6048 4.98516 12.8807 5.29508 12.3579 5.84284C11.8352 6.3906 11.5594 7.12845 11.5948 7.88478L14.362 7.75537ZM90.2451 7.75537L92.9365 8.41118C93.1378 7.5852 92.9486 6.71256 92.4235 6.04404C91.8983 5.37552 91.0952 4.98516 90.2451 4.98516V7.75537ZM97.263 14.7911H100.033C100.033 13.9405 99.6424 13.1371 98.9733 12.6119C98.3041 12.0867 97.4308 11.8981 96.6046 12.1003L97.263 14.7911ZM97.263 62.2089L96.6046 64.8997C97.4308 65.1019 98.3042 64.9132 98.9733 64.3881C99.6424 63.8629 100.033 63.0595 100.033 62.2089H97.263ZM90.2451 69.2446V72.0148C91.0952 72.0148 91.8983 71.6244 92.4234 70.9559C92.9486 70.2874 93.1378 69.4148 92.9365 68.5888L90.2451 69.2446ZM14.203 69.2446L11.5115 68.5888C11.3103 69.4148 11.4994 70.2874 12.0246 70.9559C12.5498 71.6244 13.3528 72.0148 14.203 72.0148V69.2446ZM8.28931 62.0497H5.5191C5.5191 62.807 5.82913 63.5313 6.37705 64.054C6.92498 64.5768 7.66303 64.8524 8.41948 64.8168L8.28931 62.0497ZM8.28931 13.8424L8.41944 11.0753C7.66299 11.0397 6.92495 11.3153 6.37704 11.8381C5.82912 12.3608 5.5191 13.0851 5.5191 13.8424H8.28931Z" fill="#111d7d" mask="url(#path-7-inside-1)"/>
      <path d="M65.7206 21.8883C66.5674 21.8883 67.2536 21.2173 67.2536 20.3894C67.2536 19.5615 66.5674 18.8905 65.7206 18.8905H39.8557C39.0089 18.8905 38.3226 19.5615 38.3226 20.3894C38.3226 21.2173 39.0089 21.8883 39.8557 21.8883H65.7206Z" fill="#111d7d"/>
      <path d="M18.7898 30.4885C18.7898 31.3164 19.476 31.9874 20.3228 31.9874H85.2529C86.0997 31.9874 86.786 31.3164 86.786 30.4885C86.786 29.6606 86.0997 28.9896 85.2529 28.9896H20.3228C19.476 28.9896 18.7898 29.6606 18.7898 30.4885Z" fill="#1351B410"/>
      <path d="M20.3228 42.0863H85.2529C86.0997 42.0863 86.786 41.4153 86.786 40.5874C86.786 39.7595 86.0997 39.0885 85.2529 39.0885H20.3228C19.476 39.0885 18.7898 39.7595 18.7898 40.5874C18.7898 41.4153 19.476 42.0863 20.3228 42.0863Z" fill="#1351B410"/>
      <path d="M20.3228 52.1854H50.0145C50.8613 52.1854 51.5476 51.5144 51.5476 50.6865C51.5476 49.8586 50.8613 49.1876 50.0145 49.1876H20.3228C19.476 49.1876 18.7898 49.8586 18.7898 50.6865C18.7898 51.5144 19.476 52.1854 20.3228 52.1854Z" fill="#1351B410"/>
      <rect x="50.2894" y="66.4749" width="6.03947" height="2.76978" fill="#FEFEFE"/>
      <path d="M47.5264 67.8597C47.5264 67.0949 48.1464 66.4749 48.9113 66.4749H50.0494C50.8142 66.4749 51.4343 67.0949 51.4343 67.8597C51.4343 68.6246 50.8142 69.2446 50.0494 69.2446H48.9113C48.1464 69.2446 47.5264 68.6246 47.5264 67.8597Z" fill="#111d7d"/>
      <path d="M54.7108 67.8597C54.7108 67.0949 55.3309 66.4749 56.0957 66.4749H57.2338C57.9987 66.4749 58.6187 67.0949 58.6187 67.8597C58.6187 68.6246 57.9987 69.2446 57.2338 69.2446H56.0957C55.3309 69.2446 54.7108 68.6246 54.7108 67.8597Z" fill="#111d7d"/>
    </svg>
  );
};

const VerificationCard: React.FC = () => {
  const [code, setCode] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [diplomaData, setDiplomaData] = useState<DiplomaData | null>(null);
  const [error, setError] = useState('');
  const [verificationStep, setVerificationStep] = useState<'idle' | 'scanning' | 'success' | 'error'>('idle');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const handleVerify = async () => {
    if (!code.trim()) {
      setError('Por favor, digite um código válido.');
      return;
    }

    setIsScanning(true);
    setError('');
    setVerificationStep('scanning');

    try {
      const { data, error: supabaseError } = await supabase
        .from('diplomas')
        .select('*')
        .eq('codigo_verificacao', code)
        .limit(1);

      if (supabaseError) throw supabaseError;

      if (!data || data.length === 0) {
        throw new Error('Diploma não encontrado');
      }

      const diploma = data[0];
      
      const requiredFields: (keyof DiplomaData)[] = ['codigo_verificacao', 'nome', 'curso', 'instituicao', 'data_emissao', 'qr_code_url'];
      const missingFields = requiredFields.filter(field => !diploma[field]);
      
      if (missingFields.length > 0) {
        throw new Error('Erro no sistema: Dados do diploma incompletos. Por favor, contate o suporte.');
      }

      await new Promise(resolve => setTimeout(resolve, 2000));
      setVerificationStep('success');
      await new Promise(resolve => setTimeout(resolve, 1000));
      setDiplomaData(diploma as DiplomaData);
    } catch (err) {
      setVerificationStep('error');
      setError(err instanceof Error ? err.message : 'Erro ao verificar o diploma');
    } finally {
      setIsScanning(false);
    }
  };

  if (diplomaData) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex justify-center md:justify-start">
            <img
              src={diplomaData.qr_code_url}
              alt={`QR Code do diploma de ${diplomaData.nome}`}
              className="w-32 h-32"
            />
          </div>
          
          <div className="md:col-span-2 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Nome do Estudante</h3>
              <p className="text-lg font-semibold text-gray-900">{diplomaData.nome}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Curso</h3>
              <p className="text-lg text-gray-900">{diplomaData.curso}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Instituição</h3>
              <p className="text-lg text-gray-900">{diplomaData.instituicao}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Data de Emissão</h3>
                <p className="text-lg text-gray-900">{formatDate(diplomaData.data_emissao)}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Código de Verificação</h3>
                <p className="text-lg text-gray-900">{diplomaData.codigo_verificacao}</p>
              </div>
            </div>
          </div>
        </div>
        
        <button
          onClick={() => {
            setDiplomaData(null);
            setCode('');
            setVerificationStep('idle');
          }}
          className="mt-6 w-full py-3 rounded-md text-white font-medium bg-[#0048A8] hover:bg-[#003366] transition"
        >
          Verificar outro diploma
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.20]"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjY0MCIgdmlld0JveD0iMCAwIDY0MCA2NDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zMjAgNDBDMjEzLjU0MyA0MCA5OS4zMDc4IDc5LjQzMDMgMTkuMTA3NiAxNTkuNjMxQy02MS4wOTI1IDIzOS44MzEgLTEwMC41MjMgMzU0LjA2OCAtMTAwLjUyMyA0NjAuNTI1Qy0xMDAuNTIzIDU2Ni45ODEgLTYxLjA5MjUgNjgxLjIxOCAxOS4xMDc2IDc2MS40MThDOTkuMzA3OCA4NDEuNjE5IDIxMy41NDMgODgxLjA0OSAzMjAgODgxLjA0OUM0MjYuNDU3IDg4MS4wNDkgNTQwLjY5MyA4NDEuNjE5IDYyMC44OTMgNzYxLjQxOEM3MDEuMDk0IDY4MS4yMTggNzQwLjUyNCA1NjYuOTgxIDc0MC41MjQgNDYwLjUyNUM3NDAuNTI0IDM1NC4wNjggNzAxLjA5NCAyMzkuODMxIDYyMC44OTMgMTU5LjYzMUM1NDAuNjkzIDc5LjQzMDMgNDI2LjQ1NyA0MCAzMjAgNDBaTTMyMCAxMDBDNDAzLjQ3NCAxMDAgNDgzLjU3IDEzMi42MDkgNTQ0LjU1OCAxOTMuNTk4QzYwNS41NDcgMjU0LjU4NiA2MzguMTU2IDMzNC42ODMgNjM4LjE1NiA0MTguMTU2QzYzOC4xNTYgNTAxLjYzIDYwNS41NDcgNTgxLjcyNyA1NDQuNTU4IDY0Mi43MTVDNDQ3LjU3IDc0MC43MDMgMzEyLjE1NCA4MDEuNjkyIDIyMi4yODUgNzc2LjY5M0MxMzIuNDE3IDc1MS42OTMgNjQuODQzOCA2NjEuOTUzIDI3LjE5ODggNTcyLjMzMkMtMTAuNDQ2MiA0ODIuNzEyIC0xMS4wMTM4IDM4Mi42MDMgNS4yNTEyNSAyOTEuNTEyQzIxLjUxNjIgMjAwLjQyMSA2My45NjI1IDEyMy44OTggMTIzLjkwNiA2My45NTRDMTU2LjE5NSAzMS42NjU2IDIzMy45OTggMTAwIDMyMCAxMDBaTTMyMCAxNjBDMjU3LjkzNCAxNjAgMjAwLjA2MiAxODQuNzE5IDE1Ni4yNzMgMjI4LjUwOEMxMTIuNDg0IDI3Mi4yOTcgODcuNzY1NiAzMzAuMTY5IDg3Ljc2NTYgMzkyLjIzNUM4Ny43NjU2IDQ1NC4zMDEgMTEyLjQ4NCA1MTIuMTc0IDE1Ni4yNzMgNTU1Ljk2M0MyMDAuMDYyIDU5OS43NTIgMjU3LjkzNCA2MjQuNDcxIDMyMCA2MjQuNDcxQzM4Mi4wNjYgNjI0LjQ3MSA0MzkuOTM4IDU5OS43NTIgNDgzLjcyNyA1NTUuOTYzQzUyNy41MTYgNTEyLjE3NCA1NTIuMjM0IDQ1NC4zMDEgNTUyLjIzNCAzOTIuMjM1QzU1Mi4yMzQgMzMwLjE2OSA1MjcuNTE2IDI3Mi4yOTcgNDgzLjcyNyAyMjguNTA4QzQzOS45MzggMTg0LjcxOSAzODIuMDY2IDE2MCAzMjAgMTYwWk0zMjAgMjIwQzM2NS4wODggMjIwIDQwOC4zMjYgMjM3LjkyMSA0NDAuODgyIDI3MC40NzhDNDczLjQzOCAzMDMuMDM0IDQ5MS4zNTkgMzQ2LjI3MiA0OTEuMzU5IDM5MS4zNThDNDkxLjM1OSA0MzYuNDQ1IDQ3My40MzggNDc5LjY4MyA0NDAuODgyIDUxMi4yMzlDNDA4LjMyNiA1NDQuNzk1IDM2NS4wODggNTYyLjcxNiAzMjAgNTYyLjcxNkMyNzQuOTEzIDU2Mi43MTYgMjMxLjY3NCA1NDQuNzk1IDIwOS4xMTggNTEyLjIzOUMxODYuNTYzIDQ3OS42ODMgMTY4LjY0MiA0MzYuNDQ1IDE2OC42NDIgMzkxLjM1OEMxNjguNjQyIDM0Ni4yNzIgMTg2LjU2MyAzMDMuMDM0IDIwOS4xMTggMjcwLjQ3OEMyMzEuNjc0IDIzNy45MjEgMjc0LjkxMyAyMjAgMzIwIDIyMFpNMzIwIDI4MEMzMTMuNjM2IDI4MCAzMDcuMzYyIDI4MS4yNTggMzAxLjU1MiAyODMuNzA4Qzk0Ljc0NDIgMzI4LjEyNSAyNzEuMTc0IDMzNy43OTQgMjcxLjE3NCAzNDMuMTI1QzI3MS4xNzQgMzQ4LjQ1NiAyNzMuNzQyIDM1NC4xNTggMjc0LjE3NCAzNTkuNTlDMjc0LjYwNiAzNjQuOTQ0IDI3NC4xNzQgMzcwLjE0NSAyNzQuMTc0IDM3NC4yODFDMjc0LjE3NCAzNzkuNDY3IDI3NS4wMTQgMzg0LjQ2IDI3Ni42MTkgMzg5LjE2N0MyNzkuNTg0IDM5OC4wMzggMjgzLjc0MiA0MDYuMDc0IDI4OC44MTcgNDEzLjAzOUMyODkuNTcxIDQxMy4yNTMgMjkwLjMyNiA0MTMuNDY2IDI5MS4wNzggNDEzLjY3OEMyOTYuNzE0IDQxNS45NTQgMzAyLjY5IDQxOC4xOTggMzA4LjM5IDQyMC40NzRDMzE0LjQ5NCA0MTcuNDg4IDMyMC4yOCA0MTQuNTgzIDMyNiA0MDguOTE5QzMzNi4yNCAzOTcuNTk1IDM0Ni40OCAzODYuMjcxIDM1Ni43MiAzNzQuOTQ3QzM2NCAzNjcuNjgzIDM3MS4yIDM2MC4zNSAzNzggMzUyLjk5QzQzMC4zNTggMzUwLjU5NCA0ODIuNzE2IDM0OC4xOTggNTM1LjA3NCAzNDUuODAyQzQ2Ni4yMzUgMzQxLjA1NSAzOTcuMzk2IDMzNi4zMDggMzI4LjU1NyAzMzEuNTYxQzMzMS4zNTcgMzM0LjM2MSAzMzQuMTU3IDMzNy4xNjEgMzM2Ljk1NyAzMzkuOTYxWiIgZmlsbD0iIzBEOUVGRiIvPgo8L3N2Zz4=')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none'
        }}
      />

      <div className="flex flex-col items-center text-center relative">
        <div className="relative w-20 h-20 mb-4">
          {verificationStep === 'idle' && 
            <DiplomaIcon className="w-full h-full" />
          }
          
          {verificationStep === 'scanning' && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="flex items-center justify-center"
            >
              <Search className="w-12 h-12 text-[#0048A8]" />
            </motion.div>
          )}

          {verificationStep === 'success' && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center justify-center"
            >
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </motion.div>
          )}

          {verificationStep === 'error' && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center justify-center"
            >
              <AlertCircle className="w-12 h-12 text-red-500" />
            </motion.div>
          )}
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          Verificar a conformidade do Diploma
        </h2>
        <p className="text-gray-600 mb-8">
          (IN SESU N°1/2020 e suas alterações)
        </p>

        <div className="w-full max-w-md space-y-6">
          <div className="space-y-4">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Digite o código aqui..."
              disabled={isScanning}
              className="w-full px-4 py-3 border border-[#0048A8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0048A8] focus:ring-opacity-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />

            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}

            <button 
              onClick={handleVerify}
              disabled={!code.trim() || isScanning}
              className={`w-full py-3 rounded-md text-white font-medium transition flex items-center justify-center ${
                code.trim() && !isScanning ? 'bg-[#0048A8] hover:bg-[#003366]' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {isScanning ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Verificando...
                </>
              ) : (
                'Verificar'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationCard;