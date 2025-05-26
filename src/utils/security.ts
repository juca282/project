// Rate limiting implementation using a Map to store timestamps
const rateLimitMap = new Map<string, number[]>();

const WINDOW_MS = 60000; // 1 minute window

export function rateLimit(key: string, maxRequests: number): boolean {
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
};