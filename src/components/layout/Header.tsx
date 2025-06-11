import React, { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                            <Brain className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-slate-800">CogniCare</span>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <a href="#features" className="text-slate-600 hover:text-slate-800 transition-colors">Recursos</a>
                        <a href="#testimonials" className="text-slate-600 hover:text-slate-800 transition-colors">Depoimentos</a>
                        <a href="#pricing" className="text-slate-600 hover:text-slate-800 transition-colors">Preços</a>
                        <a href="#contact" className="text-slate-600 hover:text-slate-800 transition-colors">Contato</a>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-slate-600 hover:text-slate-800 transition-colors">Entrar</button>
                        <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-sm">
                            Começar Agora
                        </button>
                    </div>

                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-200">
                    <div className="px-4 py-2 space-y-2">
                        <a href="#features" className="block py-2 text-slate-600">Recursos</a>
                        <a href="#testimonials" className="block py-2 text-slate-600">Depoimentos</a>
                        <a href="#pricing" className="block py-2 text-slate-600">Preços</a>
                        <a href="#contact" className="block py-2 text-slate-600">Contato</a>
                        <div className="pt-2 space-y-2">
                            <button className="block w-full text-left py-2 text-slate-600">Entrar</button>
                            <button className="block w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg">
                                Começar Agora
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header; 
