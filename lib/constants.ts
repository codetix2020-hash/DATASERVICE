// Pricing
export const PRICING = {
  ONE_TIME: {
    amount: 197,
    description: 'Limpieza única de base de datos',
  },
  SUBSCRIPTION: {
    amount: 97,
    frequency: 'month',
    description: 'Mantenimiento mensual',
  },
} as const

// Product info
export const PRODUCT = {
  name: 'AI Data Rescue',
  tagline: 'Limpia tu base de datos de ecommerce en minutos',
  description: 'Elimina productos inactivos, datos duplicados y registros corruptos con IA. Velocidad, seguridad y precisión garantizadas.',
  features: [
    {
      title: 'Velocidad relámpago',
      description: 'Procesa millones de registros en minutos, no horas',
      icon: 'Zap',
    },
    {
      title: 'Seguridad militar',
      description: 'Encriptación end-to-end, sin copias de datos',
      icon: 'Shield',
    },
    {
      title: 'Precisión 99.9%',
      description: 'IA entrenada en +100k ecommerces',
      icon: 'Target',
    },
    {
      title: 'Soporte 24/7',
      description: 'Nuestro equipo responde en minutos',
      icon: 'Headphones',
    },
    {
      title: 'Rollback garantizado',
      description: 'Revert a tu estado anterior en cualquier momento',
      icon: 'RotateCcw',
    },
    {
      title: 'Reportes detallados',
      description: 'Dashboard completo de cambios y métricas',
      icon: 'BarChart3',
    },
  ],
  faqItems: [
    {
      question: '¿Es seguro dejar que IA acceda a mi base de datos?',
      answer:
        'Completamente. Usamos encriptación end-to-end, nunca guardamos tus datos, y tienes rollback total garantizado. Confían en nosotros +500 ecommerces.',
    },
    {
      question: '¿Cuánto tiempo tarda?',
      answer:
        'La mayoría de limpiezas se completan en 5-30 minutos. El tiempo depende del tamaño de tu BD. Recibirás actualizaciones en tiempo real.',
    },
    {
      question: '¿Qué pasa si cometen un error?',
      answer:
        'Puedes hacer rollback a tu estado anterior con un clic. Además, revisamos manualmente cada cambio antes de aplicarlo.',
    },
    {
      question: '¿Funcionan con Shopify, WooCommerce, etc?',
      answer:
        'Sí. Soportamos Shopify, WooCommerce, Magento, BigCommerce, y cualquier ecommerce con acceso a DB.',
    },
    {
      question: '¿Y el plan de 97€/mes?',
      answer:
        'Mantenimiento continuo: monitoreo, alertas de datos corruptos, limpiezas automáticas semanales. Perfecto para tiendas en crecimiento.',
    },
  ],
} as const

// Social proof
export const SOCIAL_PROOF = {
  logos: [
    { name: 'Shopify', url: '#' },
    { name: 'WooCommerce', url: '#' },
    { name: 'Magento', url: '#' },
  ],
  trustText: 'Confían en nosotros +500 ecommerces de habla hispana',
} as const
