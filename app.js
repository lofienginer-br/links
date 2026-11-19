// Lê o config.js e monta a página. Sem bibliotecas, funciona direto no GitHub Pages.
(function () {
  var c = window.CONFIG || {};
  var $ = function (id) { return document.getElementById(id); };

  $("nome").textContent = c.nome || "";
  $("descricao").textContent = c.descricao || "";
  document.title = (c.nome || "Links") + " — links, apoio e achados";

  // Redes: só aparecem as que têm link
  [["TikTok", c.tiktok], ["Instagram", c.instagram]].forEach(function (r) {
    if (!r[1]) return;
    var a = document.createElement("a");
    a.href = r[1]; a.textContent = r[0]; a.target = "_blank"; a.rel = "noopener";
    $("redes").appendChild(a);
  });

  // LivePix (card e janela do vídeo) + QR code
  if (c.livepix) {
    $("btn-livepix").href = c.livepix;
    $("m-livepix").href = c.livepix;
    if (c.qr) { $("qr-img").src = c.qr; $("qr-box").hidden = false; }
  } else {
    $("btn-livepix").hidden = true;
    $("m-livepix").hidden = true;
    $("aviso-livepix").hidden = false;
  }

  // Grupo: só aparece se tiver convite no config
  if (c.grupo) {
    $("btn-grupo").href = c.grupo; $("btn-grupo").hidden = false;
    $("m-grupo").href = c.grupo; $("m-grupo").hidden = false;
  }

  // Vídeo do topo: o arquivo só é baixado quando a pessoa clica
  var dlg = $("modal-video"), vid = $("vid");
  if (c.videoApoio && dlg && typeof dlg.showModal === "function") {
    var fechar = function () { vid.pause(); dlg.close(); };
    $("btn-video").hidden = false;
    $("btn-video").addEventListener("click", function () {
      if (!vid.getAttribute("src")) {
        vid.src = c.videoApoio;
        if (c.videoPoster) vid.poster = c.videoPoster;
      }
      dlg.showModal();
      vid.currentTime = 0;
      var p = vid.play();
      if (p && p.catch) p.catch(function () {});
    });
    $("fechar").addEventListener("click", fechar);
    dlg.addEventListener("click", function (e) { if (e.target === dlg) fechar(); });
    dlg.addEventListener("close", function () { vid.pause(); });
  }

  // Vitrine Shopee (textContent evita injetar HTML por engano)
  var produtos = c.produtos || [];
  if (!produtos.length) $("vitrine-vazia").hidden = false;
  produtos.forEach(function (p) {
    var a = document.createElement("a");
    a.className = "produto"; a.href = p.link; a.target = "_blank"; a.rel = "noopener sponsored";
    var foto = document.createElement("div");
    foto.className = "foto";
    if (p.imagem) foto.style.backgroundImage = "url('" + encodeURI(p.imagem) + "')";
    var info = document.createElement("div");
    info.className = "info";
    var t = document.createElement("p"); t.className = "titulo"; t.textContent = p.titulo || "";
    var pr = document.createElement("p"); pr.className = "preco"; pr.textContent = p.preco || "";
    info.appendChild(t); info.appendChild(pr);
    a.appendChild(foto); a.appendChild(info);
    $("grade").appendChild(a);
  });
  if (c.shopee) { $("btn-shopee").href = c.shopee; $("btn-shopee").hidden = false; }
})();
