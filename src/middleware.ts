
import { NextURL } from 'next/dist/server/web/next-url';
import { NextResponse, NextRequest  } from 'next/server'
// import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const {pathname, origin} = request.nextUrl;
  
  if ((pathname === "/dashboard" || pathname === "/cart") && !request.cookies.get("userData")?.value){
      const LoginUrl = new NextURL("/login", origin);
      return NextResponse.redirect(LoginUrl);

  }else {
    return NextResponse.next();
  }
 
    
}
 