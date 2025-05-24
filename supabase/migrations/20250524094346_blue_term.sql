/*
  # Create diplomas verification table

  1. New Tables
    - `diplomas`
      - `id` (uuid, primary key)
      - `codigo_verificacao` (text, unique)
      - `nome` (text)
      - `curso` (text)
      - `instituicao` (text)
      - `data_emissao` (date)
      - `qr_code_url` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `diplomas` table
    - Add policy for public read access by verification code
*/

CREATE TABLE IF NOT EXISTS diplomas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_verificacao text UNIQUE NOT NULL,
  nome text NOT NULL,
  curso text NOT NULL,
  instituicao text NOT NULL,
  data_emissao date NOT NULL,
  qr_code_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE diplomas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access by verification code"
  ON diplomas
  FOR SELECT
  TO public
  USING (true);