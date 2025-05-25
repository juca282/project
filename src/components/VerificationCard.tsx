            {isScanning ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Verificando...
              </>
            ) : (
              'Verificar Diploma'
            )}
          </button>
        </div>

        {diplomaData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 p-4 border border-gray-300 rounded-md shadow-sm text-left bg-white"
          >
            <p className="text-gray-800">
              <strong>Código:</strong> {diplomaData.codigo_verificacao}
            </p>
            <p className="text-gray-800">
              <strong>Nome:</strong> {diplomaData.nome}
            </p>
            <p className="text-gray-800">
              <strong>Curso:</strong> {diplomaData.curso}
            </p>
            <p className="text-gray-800">
              <strong>Instituição:</strong> {diplomaData.instituicao}
            </p>
            <p className="text-gray-800">
              <strong>Data de Emissão:</strong> {formatDate(diplomaData.data_emissao)}
            </p>
            <div className="mt-4">
              <a
                href={diplomaData.qr_code_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0048A8] underline"
              >
                Ver QR Code
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto mt-10">
      {cardContent}
    </div>
  );
};

export default VerificationCard;
