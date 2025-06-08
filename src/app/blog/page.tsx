"use client";

import React from 'react';
import Actualites from '@/components/Actualites';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Actualités</h1>
        <Actualites nbActualites={5} />
      </main>
    </div>
  );
}
