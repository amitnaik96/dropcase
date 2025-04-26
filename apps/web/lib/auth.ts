import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import prisma from './prisma';
import bcrypt from 'bcrypt';

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: 'email', type: 'text', placeholder: "Enter your email."},
                password: {label: 'password', type: 'password', placeholder: "Enter your password"}
            },
            async authorize(credentials: any) {
                const { email, password } = credentials;
                const response = await prisma.user.findUnique({
                    where: {email}
                });
                if(!response) return null;

                const isMatch = await  bcrypt.compare(password, response.password as string); 
                if(isMatch) {
                    return { 
                        id: response.id,
                        email: response.email
                    }
                }
                return null;
            }
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || ""
        })
    ],
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({token, user}: any) => {
            if(user) {
                let existingUser = await prisma.user.findUnique({
                    where: { email: user.email}
                });
                
                if(!existingUser) {
                    existingUser = await prisma.user.create({
                        data: {
                            email: user.email,
                            name: user.name || "",
                            password: ""
                        }
                    })
                }
                token.userId = existingUser.id;
            }
            return token;
        },
        session: ({token, session}: any) => {
            session.user.id = token.userId;
            return session;
        } 
    }
}