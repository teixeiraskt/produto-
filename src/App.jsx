import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  CheckCircle,
  DollarSign,
  Play,
  Users,
  Clock,
  Star,
  TrendingUp,
  Shield,
  Globe,
  Target,
  Zap,
  Award,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'
import './App.css'
import './hero-styles.css'

function App() {
  const [saleNotifications, setSaleNotifications] = useState([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState({})
  const [notificationExiting, setNotificationExiting] = useState(false)

  // Simular notificações de venda
  useEffect(() => {
    const notifications = [
      { name: "João Silva", amount: "R$ 537,20", time: "agora" },
      { name: "Maria Santos", amount: "R$ 1.247,80", time: "2 min atrás" },
      { name: "Pedro Costa", amount: "R$ 892,50", time: "5 min atrás" },
      { name: "Ana Oliveira", amount: "R$ 1.156,90", time: "8 min atrás" }
    ]
    
    let index = 0
    const showNotification = () => {
      setNotificationExiting(false)
      setSaleNotifications([notifications[index % notifications.length]])
      index++
      
      // Iniciar animação de saída após 3.5 segundos
      setTimeout(() => {
        setNotificationExiting(true)
        // Remover notificação após animação de saída
        setTimeout(() => setSaleNotifications([]), 500)
      }, 3500)
    }
    
    showNotification()
    const interval = setInterval(showNotification, 8000)
    
    return () => clearInterval(interval)
  }, [])

  const toggleFaq = (index) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <div className="min-h-screen text-foreground">
      {/* Notificações de Venda */}
      {saleNotifications.map((notification, index) => (
        <div
          key={index}
          className={`fixed bottom-4 left-4 z-50 sale-notification p-3 md:p-4 rounded-lg shadow-lg max-w-xs transition-all duration-500 ${
            notificationExiting 
              ? 'animate-out slide-out-to-left opacity-0 transform -translate-x-full' 
              : 'animate-in slide-in-from-left opacity-100 transform translate-x-0'
          }`}
        >
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <div className="text-xs md:text-sm">
              <p className="font-semibold text-green-400">{notification.name} acabou de comprar!</p>
            </div>
          </div>
        </div>
      ))}

      {/* Header */}
      <header className="fixed top-0 w-full z-40 backdrop-blur-md bg-black border-b border-green-500">
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <div className="text-lg md:text-xl lg:text-2xl font-extrabold gradient-text">
            <span className="text-green-500">LEGENDAS</span> <span className="text-red-500">LUCRATIVAS</span>
          </div>
          
          {/* Menu Desktop */}
          <nav className="hidden md:flex gap-6">
            <a href="#metodo" className="text-green-500 hover:text-primary transition-colors font-semibold">Método</a>
            <a href="#resultados" className="text-green-500 hover:text-primary transition-colors font-semibold">Resultados</a>
            <a href="#oferta" className="text-green-500 hover:text-primary transition-colors font-semibold">Oferta</a>
            <a href="#ajuda" className="text-green-500 hover:text-primary transition-colors font-semibold">Ajuda</a>
          </nav>
          
          {/* Riscos Verdes */}
          <div className="absolute top-0 right-0 p-4 block md:hidden">
            <div className="w-6 h-1 bg-green-500 mb-1"></div>
            <div className="w-6 h-1 bg-green-500 mb-1"></div>
            <div className="w-6 h-1 bg-green-500"></div>
          </div>
          
          {/* Menu Mobile */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Menu Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#metodo" className="text-foreground hover:text-primary transition-colors font-semibold" onClick={() => setMobileMenuOpen(false)}>Método</a>
              <a href="#resultados" className="text-foreground hover:text-primary transition-colors font-semibold" onClick={() => setMobileMenuOpen(false)}>Resultados</a>
              <a href="#oferta" className="text-foreground hover:text-primary transition-colors font-semibold" onClick={() => setMobileMenuOpen(false)}>Oferta</a>
              <a href="#ajuda" className="text-foreground hover:text-primary transition-colors font-semibold" onClick={() => setMobileMenuOpen(false)}>Ajuda</a>
              <Button className="btn-primary w-full mt-2">
                GARANTIR ACESSO
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-12 md:pb-16 gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[70vh] md:min-h-[80vh]">
            {/* Conteúdo do Hero */}
            <div className="hero-content space-y-6 md:space-y-8">
              
               <h1 className="hero-title font-extrabold leading-tight text-center text-3xl md:text-5xl lg:text-6xl text-shadow-lg">
                <span className="gradient-text text-green-500">LEGENDAS</span>
                <br />
                <span className="gradient-text text-red-500">LUCRATIVAS</span>
              </h1>
              
              <div className="hero-subtitle text-white text-center max-w-4xl mx-auto leading-relaxed">
                <div className="mb-2">
                  Transforme <span className="text-red-500 font-bold">Vídeos Gringos</span> em Dólar
                </div>
                <div className="mb-2">
                  Usando Apenas Seu Celular
                </div>
                <div className="text-red-500 font-bold text-lg md:text-xl">
                  (Sem Inglês e Sem Aparecer)
                </div>
              </div>
              
              <div className="hero-text space-y-4 text-base md:text-lg text-center max-w-4xl mx-auto">
                <p className="text-white leading-relaxed">
                  Com o Método <span className="text-white font-bold">"Legenda Lucrativa"</span>, você aprende de forma simples e 
                  rápida como <span className="text-white font-bold">faturar legendando vídeos com Inteligência Artificial</span>.
                </p>
                <p className="leading-relaxed">
                  Mesmo que <span className="text-white font-bold">nunca tenha vendido nada online</span> ou editado vídeos... 
                  <span className="text-white font-bold"> Em até 15 dias</span>, você já pode conquistar suas primeiras comissões internacionais!
                </p>
              </div>
              
              <div className="hero-button-container flex flex-col sm:flex-row gap-4 justify-center">
                <button className="botao-comprar">
                  <span>GARANTIR MINHA VAGA AGORA!</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Elementos de fundo */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section id="metodo" className="section-padding">
        <div className="container mx-auto container-mobile">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Por que escolher o <span className="gradient-text">Legendas Lucrativas</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra os benefícios exclusivos que fazem do nosso método a escolha certa para sua transformação financeira
            </p>
          </div>
          
          <div className="grid-responsive">
            {[
              {
                icon: <DollarSign className="h-6 w-6 md:h-8 md:w-8" />,
                title: "Ganhos em Dólar",
                description: "Receba pagamentos internacionais em dólar, multiplicando seu poder de compra no Brasil"
              },
              {
                icon: <Clock className="h-6 w-6 md:h-8 md:w-8" />,
                title: "Apenas 2-3 Horas/Dia",
                description: "Trabalhe no seu tempo livre, sem comprometer suas atividades atuais"
              },
              {
                icon: <Users className="h-6 w-6 md:h-8 md:w-8" />,
                title: "Sem Aparecer",
                description: "Trabalhe nos bastidores, sem precisar mostrar o rosto ou gravar vídeos"
              },
              {
                icon: <Globe className="h-6 w-6 md:h-8 md:w-8" />,
                title: "Sem Inglês",
                description: "Não precisa saber inglês, nossa IA faz todo o trabalho de tradução"
              },
              {
                icon: <Target className="h-6 w-6 md:h-8 md:w-8" />,
                title: "Método Simples",
                description: "Processo passo a passo, fácil de seguir mesmo para iniciantes"
              },
              {
                icon: <TrendingUp className="h-6 w-6 md:h-8 md:w-8" />,
                title: "Resultados Rápidos",
                description: "Primeiros ganhos em até 15 dias seguindo nosso método"
              }
            ].map((benefit, index) => (
              <Card key={index} className="card-responsive hover-glow-green">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-primary">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground">{benefit.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Final */}
      <section id="oferta" className="section-padding relative overflow-hidden">
        <div className="container mx-auto container-mobile text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            Pronto para Transformar sua Vida Financeira?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de pessoas que já estão faturando com legendas criativas
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 mb-6 md:mb-8 border border-primary/20 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <p className="text-2xl md:text-3xl text-white/60 line-through mb-2">De R$ 1.997,00</p>
              <p className="text-4xl md:text-6xl font-bold text-primary mb-2 md:mb-4 neon-text-green">R$ 297,00</p>
              <p className="text-lg md:text-xl text-white/80">ou 12x de R$ 29,70</p>
            </div>
            
            <button className="botao-comprar">
              <span>QUERO GARANTIR MINHA VAGA AGORA!</span>
            </button>
          </div>
        </div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  )
}

export default App

