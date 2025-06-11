import React from 'react';
import { Brain } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                                <Brain className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold">CogniCare</span>
                        </div>
                        <p className="text-slate-400">
                            Transformando o cuidado neuroatípico com tecnologia e humanização.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Produto</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li><a href="#features" className="hover:text-white transition-colors">Recursos</a></li>
                            <li><a href="#pricing" className="hover:text-white transition-colors">Preços</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Demonstração</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Empresa</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">LGPD</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
                    <p>&copy; {new Date().getFullYear()} CogniCare. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 
