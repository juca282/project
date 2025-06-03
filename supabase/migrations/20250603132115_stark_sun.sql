/*
  # Insert test diplomas

  1. Changes
    - Insert test data for diploma verification
    - Add three sample diplomas with unique verification codes
    - Include QR codes for each diploma

  2. Test Data
    - DIPL-2025-001: Maria Silva (Engenharia de Software)
    - DIPL-2025-002: João Santos (Ciência da Computação)
    - DIPL-2025-003: Ana Oliveira (Sistemas de Informação)
*/

DO $$ 
BEGIN
  -- Check if data doesn't already exist to avoid duplicates
  IF NOT EXISTS (SELECT 1 FROM diplomas WHERE codigo_verificacao = 'DIPL-2025-001') THEN
    INSERT INTO diplomas (codigo_verificacao, nome, curso, instituicao, data_emissao, qr_code_url)
    VALUES
      (
        'DIPL-2025-001',
        'Maria Silva',
        'Engenharia de Software',
        'Universidade Federal do Brasil',
        '2025-01-15',
        'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=DIPL-2025-001'
      ),
      (
        'DIPL-2025-002',
        'João Santos',
        'Ciência da Computação',
        'Universidade Estadual Tecnológica',
        '2025-02-20',
        'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=DIPL-2025-002'
      ),
      (
        'DIPL-2025-003',
        'Ana Oliveira',
        'Sistemas de Informação',
        'Instituto Federal de Tecnologia',
        '2025-03-10',
        'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=DIPL-2025-003'
      );
  END IF;
END $$;