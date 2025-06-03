/*
  # Insert test data into diplomas table

  1. Changes
    - Insert sample diploma records for testing
    - Each record includes:
      - Unique verification code
      - Student name
      - Course
      - Institution
      - Issue date
      - QR code URL
*/

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