// Rate limiting implementation using a Map to store timestamps
const rateLimitMap = new Map<string, number[]>();

const WINDOW_MS = 60000; // 1 minute window
const MAX_REQUESTS = 30; // Maximum requests per minute
const VERIFICATION_MAX_ATTEMPTS = 5; // Maximum verification attempts per minute

export function rateLimit(key: string, maxRequests: number = MAX_REQUESTS): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(key) || [];
  
  // Remove timestamps outside the window
  const validTimestamps = timestamps.filter(t => now - t < WINDOW_MS);
  
  if (validTimestamps.length >= maxRequests) {
    rateLimitMap.set(key, validTimestamps);
    return false;
  }
  
  validTimestamps.push(now);
  rateLimitMap.set(key, validTimestamps);
  return true;
}

// Input validation and sanitization
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 100); // Limit length
}

// Security headers for the application
export const securityHeaders = {
  'Content-Security-Policy': 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "img-src 'self' data: https: http:; " +
    "connect-src 'self' https://*.supabase.co wss://*.supabase.co;",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
};

// Regular expression for verification code validation
export const VERIFICATION_CODE_REGEX = /^[A-Za-z0-9-]{1,50}$/;

// Error messages
export const ERROR_MESSAGES = {
  RATE_LIMIT: 'Muitas tentativas. Por favor, aguarde um momento antes de tentar novamente.',
  INVALID_CODE: 'Código de verificação inválido. Use apenas letras, números e hífens.',
  NOT_FOUND: 'Diploma não encontrado',
  SYSTEM_ERROR: 'Erro no sistema: Dados do diploma incompletos. Por favor, contate o suporte.',
};