// ÚNICO arquivo que você precisa editar. Salve e suba de novo (git push).
window.CONFIG = {
  nome: "Cortes Yato",
  descricao: "Apoie a conta e conheça as nossas páginas parceiras.",

  // LivePix: só a página de doação
  livepix: "https://livepix.gg/cortesyato",
  // QR code do LivePix (só para doações). Se trocar o link acima, é preciso gerar o QR de novo.
  qr: "media/qr-doacao.svg",

  // Grupo (WhatsApp, Telegram...): cole o convite. Vazio = o botão fica escondido.
  grupo: "",

  // Vídeo do botão do topo. Vazio = o botão fica escondido.
  videoApoio: "media/apoie.mp4",
  videoPoster: "media/apoie.jpg",

  // Apoie nossos parceiros: cada conta é um bloco separado. Redes vazias ("") ficam escondidas.
  // Para adicionar outra, copie um bloco. "emBreve: true" mostra o bloco como "em breve".
  contas: [
    {
      titulo: "Cortes",
      descricao: "Cortes e jogadas para crescer a conta.",
      tiktok: "https://www.tiktok.com/@cortes_yatoo",
      instagram: "https://www.instagram.com/cortes_yato",
    },
    {
      titulo: "Música",
      descricao: "New Lyrics: letras e traduções de músicas.",
      tiktok: "https://www.tiktok.com/@newlyricsl",
      instagram: "https://www.instagram.com/newlyricsl",
    },
    {
      titulo: "Fofoca",
      descricao: "Fofocas gerais e de famosos.",
      tiktok: "",
      instagram: "",
      emBreve: true,
    },
  ],

  // Vitrine Shopee: link de afiliado de cada produto.
  // "imagem" pode ser um arquivo em img/ (ex.: "img/headset.jpg") ou vazio.
  produtos: [
    // { titulo: "Headset Gamer", preco: "R$ 89,90", imagem: "img/headset.jpg", link: "https://s.shopee.com.br/..." },
  ],

  // Link da sua loja/vitrine completa na Shopee (opcional)
  shopee: "",
};
