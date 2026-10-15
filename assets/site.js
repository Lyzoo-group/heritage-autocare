(function () {
  var cfg = window.HERITAGE_SITE || {};
  window.HeritageSite = {
    sendQuote: function (form) {
      if (!cfg.quoteEndpoint) return new Promise(function (r) { setTimeout(r, 1200); });
      var body = Object.assign({ page: document.title, url: location.href, sentAt: new Date().toISOString() }, form);
      if (/formsubmit\.co/.test(cfg.quoteEndpoint)) { body._subject = 'New quote request: ' + (form.service || 'Website'); body._template = 'table'; }
      return fetch(cfg.quoteEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(body) })
        .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json().catch(function () { return {}; }); })
        .then(function (d) { if (d && (d.success === false || d.success === 'false')) throw new Error(d.message || 'Not sent'); return d; });
    },
  };
  var live = null;
  function apply() {
    if (cfg.bookingUrl) document.querySelectorAll('[data-book-online]').forEach(function (a) { a.href = cfg.bookingUrl; a.style.display = 'inline-flex'; });
    if (!live) return;
    // The review count stays hidden until it reaches reviewCountMin; until then the fallback wording shows.
    if (live.total >= (cfg.reviewCountMin || 100)) document.querySelectorAll('[data-g-total]').forEach(function (el) { var v = el.getAttribute('data-g-total').replace('{n}', live.total); if (el.textContent !== v) el.textContent = v; });
    document.querySelectorAll('[data-g-rating]').forEach(function (el) { var v = Number(live.rating).toFixed(1); if (el.textContent !== v) el.textContent = v; });
  }
  var queued = false;
  function schedule() { if (queued) return; queued = true; requestAnimationFrame(function () { queued = false; apply(); }); }
  function start() {
    apply();
    new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
    if (cfg.reviewsEndpoint) {
      fetch(cfg.reviewsEndpoint).then(function (r) { return r.ok ? r.json() : null; }).then(function (d) {
        if (d && d.total && d.rating) { live = d; apply(); }
      }).catch(function () {});
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
