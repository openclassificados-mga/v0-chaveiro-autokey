import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Key, Phone, MapPin, Clock, Shield, Lock, CheckCircle, Award, MessageCircle, Smartphone, Tag, LucideIcon } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chaveiro Autokey ABC | Atendimento 24h em São Paulo e ABC",
  description:
    "Chaveiro Autokey ABC: atendimento domiciliar 24h em São Paulo e Grande ABC. Aberturas, cópia de chaves, instalação de fechaduras e controles. Garanta segurança com quem entende do assunto!",
  keywords:
    "chaveiro, chaveiro 24h, chaveiro são paulo, chaveiro abc, abertura de fechadura, cópia de chave, chave automotiva, fechadura digital, controle de portão, tag de acesso",
  openGraph: {
    title: "Chaveiro Autokey ABC | Atendimento 24h",
    description:
      "Precisa de chaveiro agora? Atendimento domiciliar 24h em São Paulo e ABC. Aberturas, chaves, fechaduras e controles com garantia.",
    url: "https://v0-chaveiro-autokey.vercel.app",
    siteName: "Chaveiro Autokey ABC",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0g-image-chaveiro2-Em5w6s0ILdhoXNwLL2cGQlF4MiDT1w.jpg",
        width: 1200,
        height: 630,
        alt: "Chaveiro Autokey ABC - Perdeu as chaves? Não se preocupe!",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaveiro Autokey ABC | 24h",
    description: "Atendimento domiciliar 24h em São Paulo e ABC. Chaveiro profissional com garantia e preço justo.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0g-image-chaveiro2-Em5w6s0ILdhoXNwLL2cGQlF4MiDT1w.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://v0-chaveiro-autokey.vercel.app",
  },
}

export default function Home(): JSX.Element {
  const services: Array<{
    icon: LucideIcon
    title: string
    description: string
  }> = [
    {
      icon: Lock,
      title: "Aberturas Residenciais e Automotivas",
      description: "Desbloqueio profissional de portas, veículos e motocicletas sem danificar a fechadura",
    },
    {
      icon: Key,
      title: "Cópia de Chaves",
      description: "Confecção de chave simples, canivete ou presencial para veículos e motocicletas",
    },
    {
      icon: Shield,
      title: "Instalação de Fechaduras",
      description: "Instalação de fechaduras mecânicas ou digitais com garantia e segurança",
    },
    {
      icon: Smartphone,
      title: "Controles para Portão",
      description: "Cópia ou configuração de controles para portão automático de condomínios e residências",
    },
    {
      icon: Tag,
      title: "Tag de Acesso",
      description: "Cópia de Tag de acesso para condomínios ou empresas com tecnologia RFID",
    },
    {
      icon: Clock,
      title: "Troca de Segredo",
      description: "Troca de segredo para fechaduras residenciais mantendo a mesma chave",
    },
  ]

  const testimonials: Array<{
    name: string
    text: string
    rating: number
    image: string
  }> = [
    {
      name: "Carlos Silva",
      text: "Precisei abrir meu carro urgentemente e o Chaveiro Autokey ABC chegou em minutos. Serviço impecável!",
      rating: 5,
      image: "/images/pedro.png",
    },
    {
      name: "Ana Paula",
      text: "Fiz a cópia de uma chave canivete e ficou perfeita. Preço justo e atendimento muito profissional.",
      rating: 5,
      image: "/images/marina.png",
    },
    {
      name: "Roberto Santos",
      text: "Instalaram uma fechadura digital na minha casa com muita técnica. Recomendo demais!",
      rating: 5,
      image: "/images/antonio.png",
    },
    {
      name: "Sueli Oliveira",
      text: "Perdi a chave do portão do condomínio e eles copiaram a tag na hora. Salvaram meu dia!",
      rating: 5,
      image: "/images/sueli.png",
    },
    {
      name: "Marcos e Carla",
      text: "Tivemos um problema com a fechadura de madrugada e o atendimento 24h funcionou perfeitamente.",
      rating: 5,
      image: "/images/9.png",
    },
    {
      name: "Juliana Costa",
      text: "Já usei várias vezes para cópia de chaves e sempre fui bem atendida. Equipe de confiança!",
      rating: 5,
      image: "/images/6.png",
    },
  ]

  const howItWorks: Array<{
    step: string
    title: string
    description: string
  }> = [
    {
      step: "1",
      title: "Entre em Contato",
      description: "Ligue ou chame no WhatsApp e informe sua necessidade",
    },
    {
      step: "2",
      title: "Envie sua Localização",
      description: "Compartilhe onde você está em São Paulo ou região do ABC para agilizar",
    },
    {
      step: "3",
      title: "Aguarde o Chaveiro",
      description: "Nosso profissional qualificado chega rapidamente ao local",
    },
    {
      step: "4",
      title: "Serviço Concluído",
      description: "Seu problema resolvido com garantia, segurança e satisfação",
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/chaveiro-hero.jpg"
            alt="Chaveiro Autokey ABC"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-zinc-900/50 to-zinc-900" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center mb-4 sm:mb-6 animate-fade-in-up">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-autokey-MpHOVBDCheNw3CEnzXe4ZZxRp6nWtf.png"
              alt="Logo Chaveiro Autokey ABC"
              width={140}
              height={140}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-600/50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 animate-fade-in-up">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
            <span className="text-orange-500 text-xs sm:text-sm font-semibold">Atendimento 24 horas</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance animate-fade-in-up [animation-delay:100ms] px-2">
            Precisa de um <span className="text-orange-500">chaveiro agora?</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-300 mb-6 sm:mb-8 max-w-3xl mx-auto text-balance animate-fade-in-up [animation-delay:200ms] px-4">
            Estamos prontos para ajudar.
            <br />
            Atendimento 24h com rapidez, confiança e preço justo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up [animation-delay:300ms] px-4">
            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white text-base sm:text-lg px-6 sm:px-8 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all hover:scale-105 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/5511910307671?text=Solicito%20atendimento"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chamar no WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 bg-transparent transition-all w-full sm:w-auto"
            >
              <a href="tel:+5511910307671">
                <Phone className="w-5 h-5 mr-2" />
                Ligar (11) 91030-7671
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                <div className="text-3xl sm:text-4xl font-bold text-white">24h</div>
              </div>
              <p className="text-sm sm:text-base text-zinc-400">Disponível Sempre</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                <div className="text-3xl sm:text-4xl font-bold text-white">ABC + SP</div>
              </div>
              <p className="text-sm sm:text-base text-zinc-400">Atendimento Domiciliar</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                <div className="text-3xl sm:text-4xl font-bold text-white">15 min</div>
              </div>
              <p className="text-sm sm:text-base text-zinc-400">Tempo Médio de Chegada</p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-orange-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Nossos Serviços
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-3 sm:mb-4 px-4">
              Como Podemos Ajudar
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg px-4">
              Atendimento rápido e seguro para qualquer situação com chaves e fechaduras
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-zinc-800/50 backdrop-blur border-zinc-700 hover:border-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/20 hover:-translate-y-1 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="bg-orange-600/10 w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-orange-600/20 transition-colors">
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm sm:text-base text-zinc-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-12 sm:py-16 lg:py-20 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-orange-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Como Funciona
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-3 sm:mb-4 px-4">
              Atendimento em 4 Passos
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg px-4">Rápido, simples e eficiente</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="relative text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white shadow-lg shadow-orange-600/30">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-orange-600 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="py-12 sm:py-16 lg:py-20 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-orange-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">Diferenciais</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-3 sm:mb-4 px-4">
              Por Que Nos Escolher
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg px-4">
              Profissionais qualificados e equipamentos modernos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <div className="relative aspect-square min-h-[200px] sm:col-span-2 sm:row-span-2 rounded-xl overflow-hidden group">
              <Image
                src="/images/chaveiro-galeria-1.jpg"
                alt="Atendimento 24 horas"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                <span className="text-orange-500 font-semibold text-xs sm:text-sm mb-1 sm:mb-2">24 HORAS</span>
                <p className="text-white font-bold text-xl sm:text-2xl mb-1 sm:mb-2">Atendimento em Todo ABC e Zona Sul de SP</p>
                <p className="text-zinc-300 text-xs sm:text-sm">Cobertura completa 24 horas</p>
              </div>
            </div>

            <div className="relative aspect-square min-h-[200px] rounded-xl overflow-hidden group">
              <Image
                src="/images/chaveiro-galeria-2.jpg"
                alt="Facilidade de pagamento"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-3 sm:p-4">
                  <span className="text-orange-500 text-xs font-semibold">FACILIDADE</span>
                  <p className="text-white font-semibold text-sm sm:text-base">Aceitamos Cartões e Parcelamento sem Juros*</p>
                  <p className="text-zinc-400 text-xs mt-1">*Parcelamento sujeito ao valor do serviço</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square min-h-[200px] rounded-xl overflow-hidden group">
              <Image
                src="/images/chaveiro-galeria-3.jpg"
                alt="Garantia nos serviços"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-3 sm:p-4">
                  <span className="text-orange-500 text-xs font-semibold">GARANTIA</span>
                  <p className="text-white font-semibold text-sm sm:text-base">3 Meses em Chaves Automotivas e Instalações</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="py-12 sm:py-16 lg:py-20 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-orange-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Depoimentos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-3 sm:mb-4 px-4">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg px-4">Confiança e qualidade em cada atendimento</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-zinc-800/50 backdrop-blur border-zinc-700 hover:border-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/20 hover:-translate-y-1 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-orange-500 text-sm">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/chaveiro-cta.jpg" alt="Chaveiro 24h" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-orange-900/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance">
            Precisa de um <span className="text-orange-500">chaveiro agora?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Atendimento domiciliar 24 horas em São Paulo e toda região do Grande ABC
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-6 shadow-2xl shadow-orange-600/40 hover:shadow-orange-600/60 transition-all hover:scale-105 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/5511910307671?text=Solicito%20atendimento"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Pedir Chaveiro Agora
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-6 bg-transparent transition-all w-full sm:w-auto"
            >
              <a href="tel:+5511910307671">
                <Phone className="w-6 h-6 mr-2" />
                Ligar (11) 91030-7671
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 border-t border-zinc-800 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">

            <div className="flex flex-col items-center justify-center sm:col-span-2 lg:col-span-1">
              <Image
                src="/images/logo-autokey.png"
                alt="Logo Chaveiro Autokey ABC"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Chaveiro Autokey ABC</h3>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-4">
                Atendimento exclusivamente domiciliar em São Paulo e Região do Grande ABC. Serviços: Aberturas, Chaves, Fechaduras, Controles, Tags, Manutenção em cilindros de ignição e fechaduras automotivas.
              </p>
              <div className="flex gap-3">
                <Button asChild size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                  <a href="https://wa.me/5511910307671?text=Solicito%20atendimento" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-zinc-600 text-white hover:bg-zinc-800 bg-transparent"
                >
                  <a href="tel:+5511910307671">
                    <Phone className="w-4 h-4 mr-2" />
                    Ligar
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Nossos Serviços</h4>
              <ul className="space-y-2 text-sm sm:text-base text-zinc-400">
                <li>Aberturas Residenciais e Automotivas</li>
                <li>Cópia de Chaves</li>
                <li>Instalação de Fechaduras</li>
                <li>Controles para Portão</li>
                <li>Tag de Acesso</li>
                <li>Troca de Segredo</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contato</h4>
              <div className="space-y-3 text-sm sm:text-base text-zinc-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Área de Atendimento:</p>
                    <p>São Paulo e Região do Grande ABC</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Telefone:</p>
                    <a href="tel:+5511910307671" className="hover:text-orange-600 transition-colors">
                      (11) 91030-7671
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MessageCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">WhatsApp:</p>
                    <a
                      href="https://wa.me/5511910307671?text=Solicito%20atendimento"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-600 transition-colors"
                    >
                      (11) 91030-7671
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-zinc-500">
            <p>&copy; {new Date().getFullYear()} Chaveiro Autokey ABC. Todos os direitos reservados.</p>
            <p className="mt-2">Atendimento domiciliar 24 horas em São Paulo e Grande ABC</p>
            <p className="mt-4 text-zinc-600 border-t border-zinc-700 pt-4">Criado por <a href="https://webstudiomga.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-500 transition-colors font-semibold">Webstudio</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}
