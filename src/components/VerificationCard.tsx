 <button
          onClick={handleVerification}
          className="bg-[#0048A8] text-white px-4 py-2 rounded-md hover:bg-[#003a86] transition duration-300 flex items-center justify-center"
          disabled={isScanning}
        >
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
  );
};

export default VerificationCard;