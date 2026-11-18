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

  // LivePix
  if (c.livepix) {
    $("btn-livepix").href = c.livepix;
  } else {
    $("btn-livepix").hidden = true;
    $("aviso-livepix").hidden = false;
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
