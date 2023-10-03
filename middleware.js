
// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";
// import { redirect } from "next/navigation";
export async function middleware(req) {
//   // Get the user session using NextAuth.js getSession
//   const token = await getToken({ req });

//   // Get the user role from the session
//   const userRole = token?.user?.role;
//   const path = new URL(req.url).pathname;
//   const isPublic = path === '/login' || path === '/register' || path === '/'

//   // Get the pathname of the requested URL

//   // Define protected routes for each user role
//   const studentProtectedRoutes = /^\/student\//;
//   const collegeProtectedRoutes = /^\/college\//;
//   const universityProtectedRoutes = /^\/university\//;
//   const ministryProtectedRoutes = /^\/ministry\//;
  
  // Check if the user is not authenticated or if they don't have access to the current route
  // if (!(token.user) || !(isPublic)) {
  //   console.log(token);
  //   return redirect("/login")
  // }
  // You can also check other user roles here and redirect accordingly

  // If the user is authenticated and has access, continue with the request
  // return NextResponse.next();
}
