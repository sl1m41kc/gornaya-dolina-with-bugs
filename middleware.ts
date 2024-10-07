// middleware.ts или middleware.js в корне папки 'app'
import { NextRequest, NextResponse } from 'next/server';
import { isBooking } from './app/utils/isBooking';

export function middleware(req: NextRequest) {
  console.log('middleware work');
  if (!isBooking) return NextResponse.redirect(new URL('/', req.url)); // Редирект на главную

  return NextResponse.next();
}

export const config = {
  matcher: ['/booking'], // Применять middleware только к /booking
};
