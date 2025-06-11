import React, { useState, useEffect } from 'react';
import { Brain, Users, Calendar, BarChart3, Shield, Heart, Star, ArrowRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/common/Button';

const Home: React.FC = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            name: "Dra. Ana Silva",
            role: "Neuropsicóloga",
            content: "O CogniCare transformou nossa clínica. A gestão de pacientes nunca foi tão eficiente e humanizada.",
            rating: 5
        },
        {
            name: "Dr. Carlos Santos",
            role: "Psiquiatra Infantil",
            content: "Finalmente uma plataforma que entende as necessidades específicas do atendimento neuroatípico.",
            rating: 5
        },
        {
            name: "Dra. Maria Oliveira",
            role: "Terapeuta Ocupacional",
            content: "A interface intuitiva nos permite focar no que realmente importa: cuidar dos nossos pacientes.",
            rating: 5
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const features = [
        {
            icon: <Brain className="w-6 h-6" />,
            title: "Protocolos Especializados",
            description: "Ferramentas específicas para TEA, TDAH e outras condições neuroatípicas"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Gestão de Equipe",
            description: "Coordene profissionais multidisciplinares de forma eficiente"
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            title: "Agendamento Inteligente",
            description: "Sistema adaptado às necessidades especiais de cada paciente"
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Relatórios Personalizados",
            description: "Acompanhe o progresso com métricas específicas e relatórios detalhados"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Segurança LGPD",
            description: "Proteção total dos dados sensíveis dos pacientes"
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Cuidado Humanizado",
            description: "Interface projetada para reduzir ansiedade e promover bem-estar"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <Header />

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 transform -skew-y-1"></div>
                <div className="container">
                    <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
                            <Heart className="w-4 h-4 mr-2" />
                            Cuidado especializado para cada paciente
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                            Transforme sua clínica com
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> CogniCare</span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            O CogniCare conecta profissionais, famílias e pacientes neuro atípicos em um ambiente seguro e personalizado, facilitando o acompanhamento e evolução de cada caso.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button size="lg" showArrow>
                                Começar Teste Gratuito
                            </Button>
                            <Button variant="secondary" size="lg">
                                Agendar Demonstração
                            </Button>
                        </div>

                        <div className="mt-12 text-sm text-slate-500">
                            <span>Já confiado por mais de 200+ clínicas no Brasil</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white/50 backdrop-blur-sm">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                            Recursos Especializados
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Desenvolvido especificamente para atender as necessidades únicas do cuidado neuroatípico
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                            O que nossos profissionais dizem
                        </h2>
                        <p className="text-xl text-slate-600">
                            Depoimentos reais de quem já transformou sua prática com o CogniCare
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-slate-100">
                            <div className="flex items-center justify-center mb-6">
                                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            <blockquote className="text-xl lg:text-2xl text-slate-700 text-center mb-8 leading-relaxed">
                                "{testimonials[activeTestimonial].content}"
                            </blockquote>

                            <div className="text-center">
                                <div className="font-semibold text-slate-800 text-lg">
                                    {testimonials[activeTestimonial].name}
                                </div>
                                <div className="text-slate-600">
                                    {testimonials[activeTestimonial].role}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-8 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-colors ${index === activeTestimonial ? 'bg-blue-500' : 'bg-slate-300'
                                        }`}
                                    onClick={() => setActiveTestimonial(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home; 
