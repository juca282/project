import { RateLimiterMemory } from 'rate-limiter-flexible';
import xss from 'xss';

// Rate limiter configuration
const rateLimiter = new RateLimiterMemory({
  points: 5, // Number of points
  duration: 60, // Per 60 seconds
});

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return xss(input.trim(), {
    whiteList: {}, // No tags allowed
    stripIgnoreTag: true,
    stripIgnoreTagBody: ['script']
  });
};

// Rate limiting function
export const checkRateLimit = async (ip: string): Promise<boolean> => {
  try {
    await rateLimiter.consume(ip);
    return true;
  } catch (error) {
    return false;
  }
};

// Validate verification code format
export const validateVerificationCode = (code: string): boolean => {
  // Add your verification code format validation logic here
  const codeRegex = /^[A-Za-z0-9-]{6,32}$/;
  return codeRegex.test(code);
};

// Security headers for API responses
export const securityHeaders = {
  'Cache-Control': 'no-store, max-age=0',
  'Pragma': 'no-cache',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Content-Security-Policy': "default-src 'self'",
};

// URL parameter sanitization
export const sanitizeUrlParams = (params: URLSearchParams): URLSearchParams => {
  const sanitizedParams = new URLSearchParams();
  params.forEach((value, key) => {
    sanitizedParams.append(key, sanitizeInput(value));
  });
  return sanitizedParams;
};

// Generate secure random values
export const generateSecureRandom = (length: number): string => {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};