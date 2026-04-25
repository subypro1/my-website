const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useLocation } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import { Shield } from 'lucide-react';

export default function PageNotFound({}) {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    const { data: authData, isFetched } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const user = await db.auth.me();
                return { user, isAuthenticated: true };
            } catch (error) {
                return { user: null, isAuthenticated: false };
            }
        }
    });
    
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-background grid-overlay">
            <div className="max-w-md w-full text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-6" />
                <h1 className="text-6xl font-heading font-black text-primary">404</h1>
                <div className="h-px w-16 bg-primary/30 mx-auto my-4" />
                <h2 className="font-heading font-bold text-xl text-foreground">ACCESS DENIED</h2>
                <p className="text-xs font-mono text-muted-foreground mt-3">
                    Target <span className="text-foreground">"{pageName}"</span> not found in system.
                </p>

                {isFetched && authData?.isAuthenticated && authData.user?.role === 'admin' && (
                    <div className="mt-6 p-4 border border-border bg-card text-left">
                        <p className="text-[10px] font-mono text-primary tracking-widest mb-1">ADMIN NOTE</p>
                        <p className="text-xs font-mono text-muted-foreground">
                            This page hasn't been implemented yet. Ask the AI to build it.
                        </p>
                    </div>
                )}

                <button 
                    onClick={() => window.location.href = '/'} 
                    className="mt-8 inline-flex items-center px-4 py-2 text-xs font-mono tracking-wider text-primary border border-primary hover:bg-primary hover:text-foreground transition-colors"
                >
                    RETURN TO COMMAND
                </button>
            </div>
        </div>
    )
}