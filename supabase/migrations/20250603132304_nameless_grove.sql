/*
  # Insert test data with custom verification code format

  1. Changes
    - Add test diploma with custom verification code format
    - Include safety check to prevent duplicate entries
*/

DO $$ 
BEGIN
  -- Check if data doesn't already exist to avoid duplicates
  IF NOT EXISTS (SELECT 1 FROM diplomas WHERE codigo_verificacao = '412-326-786a78543') THEN
    INSERT INTO diplomas (codigo_verificacao, nome, curso, instituicao, data_emissao, qr_code_url)
    VALUES
      (
        '412-326-786a78543',
        'Carlos Eduardo',
        'Engenharia Civil',
        'Universidade Federal de São Paulo',
        '2025-06-03',
        'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=412-326-786a78543'
      );
  END IF;
END $$;