export const reportData = {
  header: {
    title: "Planejamento Estratégico Digital 2026",
    subtitle: "Dominar a atenção e personalizar valor no ecossistema Assaí.",
    period: "25 a 31 de Maio de 2026"
  },
  general: {
    engagement: { value: "2,98%", prev: "2,69%", growth: "+13,7%", isPositive: true },
    publications: { value: 66, prev: 40, growth: "+65,00%", isPositive: true },
    followers: { value: "6.383.028", growth: "+0,16%", isPositive: true },
    impressions: { value: "3.892.475", prev: "2.662.938", growth: "+46,2%", isPositive: true },
    interactions: { value: "103.814", prev: "64.930", growth: "+59,9%", isPositive: true },
  },
  channels: [
    {
      id: "facebook",
      name: "Facebook",
      icon: "Facebook",
      color: "bg-blue-600",
      textColor: "text-blue-600",
      metrics: {
        engagement: { value: "0,83%", prev: "1,07%", desc: "-22,4%", isPositive: false },
        followers: { value: "1.838.642", growth: "+0,01%", isPositive: true },
        pubs: { value: 11, prev: 11, growth: "0,00%", isPositive: true },
        impressions: { value: "698.860", prev: "106.208", growth: "+558,1%", isPositive: true },
        interactions: { value: "3.815", prev: "645", growth: "+491,5%", isPositive: true }
      }
    },
    {
      id: "instagram-feed",
      name: "Instagram (Feed)",
      icon: "Instagram",
      color: "bg-pink-600",
      textColor: "text-pink-600",
      metrics: {
        engagement: { value: "0,69%", prev: "1,19%", growth: "-42,1%", isPositive: false },
        followers: { value: "4.434.974", growth: "+0,22%", isPositive: true },
        pubs: { value: 16, prev: 13, growth: "+23,1%", isPositive: true },
        impressions: { value: "1.476.581", prev: "1.632.599", growth: "-9,57%", isPositive: false },
        interactions: { value: "8.316", prev: "22.981", growth: "-63,8%", isPositive: false }
      }
    },
    {
      id: "instagram-stories",
      name: "Instagram (Stories)",
      icon: "Instagram",
      color: "bg-orange-500",
      textColor: "text-orange-500",
      metrics: {
        engagement: { value: "5,66%", prev: "5,19%", growth: "+9,1%", isPositive: true },
        followers: { value: "-", growth: "-", isPositive: true },
        pubs: { value: 24, prev: 12, growth: "+100,0%", isPositive: true },
        impressions: { value: "1.717.034", prev: "917.701", growth: "+87,1%", isPositive: true },
        interactions: { value: "90.834", prev: "41.151", growth: "+120,7%", isPositive: true }
      }
    },
    {
      id: "tiktok",
      name: "TikTok",
      icon: "Video",
      color: "bg-black",
      textColor: "text-black",
      metrics: {
        engagement: { value: "3,22%", prev: "2,95%", growth: "+9,15%", isPositive: true },
        followers: { value: "109.412", growth: "+0,67%", isPositive: true },
        pubs: { value: 15, prev: 8, growth: "+87,5%", isPositive: true },
        impressions: { value: "39.638", prev: "6.265", growth: "+532,7%", isPositive: true },
        interactions: { value: "849", prev: "153", growth: "+454,9%", isPositive: true }
      }
    }
  ],
  behavior: {
    categories: [
      { name: "RELACIONAL", percentage: 33.3, color: "bg-rose-400" },
      { name: "OFERTAS", percentage: 28.8, color: "bg-orange-500" },
      { name: "FACILIDADES", percentage: 19.7, color: "bg-emerald-600" },
      { name: "INFLUENCIADOR", percentage: 9.1, color: "bg-violet-500" },
      { name: "INSTITUCIONAL", percentage: 7.6, color: "bg-blue-600" },
      { name: "DICAS", percentage: 1.5, color: "bg-amber-400" }
    ],
    formats: [
      {
        channel: "Insight Comercial",
        desc: "O pilar Relacional e o de Ofertas somam mais de 62% de todo o volume de conteúdo produzido no período, mostrando o foco estratégico da marca em equilibrar a consideração e comunidade (brand love) com o impacto direto em vendas (sell-out)."
      },
      {
        channel: "Facebook",
        desc: "Registrou seu pico de 294 mil pessoas alcançadas com o vídeo de antecipação do Dia Imbatível, comprovando a eficácia de conteúdos em vídeo e com apelo humanizado para gerar forte engajamento na base tradicional da rede."
      },
      {
        channel: "Instagram Feed",
        desc: "Entregou a maior escala de toda a análise, atingindo 362 mil pessoas alcançadas (impulsionado) em um único Reels da campanha Acelera com Preço Baixo, consolidando esse formato como o motor definitivo para gerar awareness em massa no varejo."
      },
      {
        channel: "Instagram Stories",
        desc: "Consolidou-se como a principal máquina de conversão direta da marca, convertendo a atenção do público em 19,6 mil cliques direcionados para os canais de venda em um único dia, registrando uma taxa de engajamento recorde de 26,7%."
      },
      {
        channel: "TikTok",
        desc: "Alcançou mais de 13,8 mil visualizações com os vídeos promocionais de ofertas rápidas, mas garantiu sua maior taxa de conexão e engajamento (3,65%) por meio de conteúdos de entretenimento com funcionário (pilar Relacional)."
      }
    ]
  },
  followerTimeline: [
    { date: "25/05", facebook: 1838500, instagram: 4432000, tiktok: 108600, total: 6379100 },
    { date: "26/05", facebook: 1838520, instagram: 4432500, tiktok: 108700, total: 6379720 },
    { date: "27/05", facebook: 1838540, instagram: 4433000, tiktok: 108850, total: 6380390 },
    { date: "28/05", facebook: 1838580, instagram: 4433500, tiktok: 109000, total: 6381080 },
    { date: "29/05", facebook: 1838600, instagram: 4434000, tiktok: 109150, total: 6381750 },
    { date: "30/05", facebook: 1838620, instagram: 4434500, tiktok: 109300, total: 6382420 },
    { date: "31/05", facebook: 1838642, instagram: 4434974, tiktok: 109412, total: 6383028 },
  ],
  highlights: [
    {
      network: "Instagram Stories",
      date: "28/05",
      title: "É Hoje - Acelera com Preço Baixo!",
      eng: "26,7%",
      interactions: "21.403",
      type: "Ofertas",
      color: "border-orange-500"
    },
    {
      network: "Facebook",
      date: "31/05",
      title: "Funcionário de loja | Último dia - Acelera com Preço Baixo!",
      eng: "1,55%",
      interactions: "105",
      link: "https://www.facebook.com/reel/2178551006299951/?s=single_unit",
      type: "Ofertas",
      color: "border-blue-600"
    },
    {
      network: "Instagram Feed",
      date: "29/05",
      title: "É amanhã! - Acelera com Preço Baixo!",
      eng: "1,69%",
      interactions: "1.062",
      link: "https://www.instagram.com/p/DY5Trwajbt1/",
      type: "Ofertas",
      color: "border-pink-600"
    },
    {
      network: "TikTok",
      date: "31/05",
      title: "Funcionário de loja | Josy - Copa da Torcida!",
      eng: "3,65%",
      interactions: "45",
      link: "https://www.tiktok.com/@assaiatacadistaoficial/video/7646163832875912469",
      type: "Relacional",
      color: "border-black"
    }
  ],
  insights: [
    {
      title: "Casa do Patrão",
      desc: "Casa do Patrão tem um alerta no feed do Instagram: o tema vem tendo uma baixa performance e está puxando as métricas da rede para baixo. Um comparativo dessa semana mostra que a média na rede dos posts Casa do Patrão foram de 0,52% contra 1,04% de campanhas e funcionários, fazendo com que no arredondamento final a rede no geral, termine a semana com 0,69%.",
      icon: "Users",
      type: "negative"
    },
    {
      title: "Estratégias de Sucesso",
      desc: "Os Reels consolidaram-se como motor de escala ao registrar 362 mil pessoas alcançadas no post de Acelera com Preço Baixo (impulsionado), e a urgência nos Stories provou força comercial ao direcionar 19,6 mil cliques imediatos para os canais de ofertas, gerando atenção e intenção de compra direta.",
      icon: "TrendingUp",
      type: "positive"
    },
    {
      title: "Alerta",
      desc: "O TikTok enfrenta um gargalo de alcance, onde posts de ofertas estagnaram em 13,8 mil views sem alta interação. Essa extrema dependência de picos promocionais gera um efeito sanfona, agravado pela mudança algorítmica do Tiktok, que agora exige foco total em compartilhamentos via DM.",
      icon: "AlertOctagon",
      type: "negative"
    },
    {
      title: "Correlação com o Mercado",
      desc: "Focado na eficiência financeira do Assaí, o marketing deve adotar SEO Social e vídeos humanizados (UGC) no TikTok. Uma sugestão é de que o tráfego pago priorize a conversão direta de sell-out, migrando e blindando a base de clientes dentro do ecossistema do App e do Cartão Passaí.",
      icon: "Target",
      type: "neutral"
    },
    {
      title: "Foco para Próximas Produções",
      desc: "As próximas produções devem priorizar vídeos nativos em formato UGC (criadores e funcionários) para humanizar. No Instagram, os roteiros precisam induzir salvamentos e compartilhamentos via DM, conectando dinâmicas de ofertas diretamente ao App Meu Assaí.",
      icon: "Lightbulb",
      type: "focus"
    }
  ]
};
