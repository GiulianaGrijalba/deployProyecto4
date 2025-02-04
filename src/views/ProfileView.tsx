'use client'
import { useAuth } from '@/context/AuthContext'
import React from 'react'

const ProfileView = () => {
    const { userData } = useAuth();

    if (!userData) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-2xl font-semibold text-gray-600 animate-pulse">
                    Cargando...
                </h1>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-xl border border-gray-200 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Bienvenido/a, <span className="text-blue-600">{userData.user.name}</span>
                </h1>
                <div className="space-y-4 text-lg text-gray-700">
                    <p>
                        <span className="font-semibold">📍 Dirección:</span> {userData.user.address}
                    </p>
                    <p>
                        <span className="font-semibold">📞 Contacto:</span> {userData.user.phone}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProfileView;





