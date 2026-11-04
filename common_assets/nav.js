(function() {
  const isFile = location.protocol === 'file:';

  function resolveUrl(repoFolder, subPath) {
    const cleanSub = subPath ? subPath.replace(/^\/+|\/+$/g, '') : '';
    if (isFile) {
      const fullPath = location.pathname.replace(/\\/g, '/');
      const idx = fullPath.toLowerCase().indexOf('/sc_web/');
      const base = idx !== -1 ? fullPath.substring(0, idx + 8) : '/C:/projects/sc_web/';
      return cleanSub ? `file://${base}${repoFolder}/${cleanSub}/index.html` : `file://${base}${repoFolder}/index.html`;
    }
    const domain = repoFolder === 'sc-sistarcompany' ? 'https://sistarcompany.com' : `https://${repoFolder}.sistarcompany.com`;
    return cleanSub ? `${domain}/${cleanSub}/` : `${domain}/`;
  }

  const MENU_STRUCTURE = [
    {
      title: "🔺 *sc - sistar company", repo: "sc-sistarcompany",
      children: [
        { title: "🔸 *sc", path: "sc", items: [
          "▫️ signal star", "▫️ greetings, team sistar", "▫️ sistar company",
          "▫️ identity/ signatures", "▫️ pp dd m ccc p", "▫️ sistar superior to",
          "▫️ team sistar", "▫️ sistar scm", "▫️ sistar crm"
        ]},
        { title: "🔸 sistar int’l", path: "sistar-intl", items: [
          "🔹 sc, sc .id, sc .kr, sc .vn, sc .jp, sc .cn, sc .us"
        ]},
        { title: "🔸 associations Int’l", path: "associations-intl", items: [
          "🔹 int’l ai trade alliance", "🔹 Int’l ai data alliance"
        ]}
      ]
    },
    {
      title: "🔺 qubit-algorithm", repo: "qubit-algorithm",
      children: [
        { title: "🔸 qubit algorithm", path: "qubit-algorithm", items: [] },
        { title: "🔸 cosmoseed biz models", path: "cosmoseed-biz-models", items: [] }
      ]
    },
    {
      title: "🔺 challengers", repo: "challengers",
      children: [
        { title: "🔸 sistar challengers", path: "sistar-challengers", items: [
          "▫️ invitation letter", "▫️ spirits", "▫️ vibe working",
          "▫️ refine ur work vids", "▫️ vibe working vids", "▫️ qna vids",
          "▫️ benefits vids", "▫️ procedures", "▫️ qna", "▫️ guide vids", "▫️ orientations"
        ]},
        { title: "🔸 vibe-working", path: "vibe-working", items: [
          "🔹 sistar challengers int’l", "🔹 sistar vibe working"
        ]}
      ]
    },
    {
      title: "🔺 ir-pitchdeck", repo: "ir-pitchdeck",
      children: [
        { title: "🔸 report…", path: "report", items: [] }
      ]
    },
    {
      title: "🔺 media", repo: "media",
      children: [
        { title: "🔸 sistar studio", path: "sistar-studio", items: [] },
        { title: "🔸 the sistar post", path: "the-sistar-post", items: [] }
      ]
    },
    {
      title: "🔺 intelligence-core", repo: "intelligence-core",
      children: [
        { title: "🔸 sistar bi : biz intelligence", path: "sistar-bi", items: [
          "🔹 qubit erp", "🔹 ai centers : modular ai services", "🔹 rag/ fine-tuning",
          "🔹 intelligence on tab, hr", "🔹 dynamic pricing, f’ce", "🔹 bnpl, f’ce",
          "🔹 smart logistics", "🔹 space sharing, warehousing", "🔹 open accounts, sales",
          "🔹 project generator", "🔹 scarlet web builder", "🔹 scarlet web working"
        ]},
        { title: "🔸 sistar a/c : ai- commerce", path: "sistar-ac", items: [] },
        { title: "🔸 sistar i/t : Int’l ai trade", path: "sistar-it", items: [] },
        { title: "🔸 sistar s/r : robotics, physical ai", path: "sistar-sr", items: ["🔹 robo-blocks"] },
        { title: "🔸 sistar a/b, w/a: agent builder", path: "sistar-ab-wa", items: [] },
        { title: "🔸 sistar w/a : work automation", path: "sistar-wa", items: [] },
        { title: "🔸 sistar exo-brain : exo brain", path: "sistar-exo-brain", items: ["🔹 & i"] },
        { title: "🔸 sistar df : data factory", path: "sistar-df", items: [] },
        { title: "🔸 sistar mmd : money making designs", path: "sistar-mmd", items: [] },
        { title: "🔸 sistar b/d : brand new delights", path: "sistar-bd", items: [] }
      ]
    },
    {
      title: "🔺 scarlet-ai", repo: "scarlet-ai",
      children: [
        { title: "🔸 int’l ai trading platform", path: "intl-ai-trading-platform", items: [] },
        { title: "🔸 ai-commerce platform ind.", path: "ai-commerce-platform-ind", items: [] },
        { title: "🔸 mall.sisTV", path: "mall-sistv", items: [] },
        { title: "🔸 ms. scarlet : ai secretary", path: "ms-scarlet", items: [] },
        { title: "🔸 robot market", path: "robot-market", items: [] },
        { title: "🔸 on-demand", path: "on-demand", items: [] },
        { title: "🔸 b2b", path: "b2b", items: [] },
        { title: "🔸 resell", path: "resell", items: [] },
        { title: "🔸 siscart, nearbuy", path: "siscart-nearbuy", items: [] },
        { title: "🔸 zero wastage", path: "zero-wastage", items: [] },
        { title: "🔸 sisdiet", path: "sisdiet", items: [] }
      ]
    },
    {
      title: "🔺 qubit-biz", repo: "qubit-biz",
      children: [
        { title: "🔸 qubit erp", path: "qubit-erp", items: [] },
        { title: "🔸 c.a.n. (ceo action note ai)", path: "can", items: [] },
        { title: "🔸 qubit marketplace", path: "qubit-marketplace", items: [] },
        { title: "🔸 qubit planet games", path: "qubit-planet-games", items: [] },
        { title: "🔸 qubit mkt", path: "qubit-mkt", items: ["🔹 qubit affiliators’ program"] },
        { title: "🔸 qubit bank", path: "qubit-bank", items: ["🔹 time bank space bank, idea bank", "🔹 petfood bank"] },
        { title: "🔸 exo brain", path: "exo-brain", items: [] },
        { title: "🔸 qubit star", path: "qubit-star", items: [] },
        { title: "🔸 qubit ads", path: "qubit-ads", items: [] },
        { title: "🔸 qubit taxes", path: "qubit-taxes", items: [] },
        { title: "🔸 qubit knowledge networks", path: "qubit-knowledge-networks", items: [] }
      ]
    },
    {
      title: "🔺 biz-galaxy", repo: "biz-galaxy",
      children: [
        { title: "🔸 sistar mind company : mind", path: "sistar-mind-company", items: ["🔹 sistar mind company", "🔹 mind navi", "🔹 n.f.q.", "🔹 ai companion", "🔹 mind test"] },
        { title: "🔸 sispet : petfood & general", path: "sispet", items: ["🔹 scarlet the cat", "🔹 forever-young dog", "🔹 n.b.s.", "🔹 dazzle", "🔹 ca kr"] },
        { title: "🔸 sistar medix : pet clinic", path: "sistar-medix", items: ["🔹 chd", "🔹 sistar medix : clinical edition", "🔹 sistar medix : botanical edition"] },
        { title: "🔸 aquasis : marine", path: "aquasis", items: ["🔹 aquasis ai", "🔹 sis marine"] },
        { title: "🔸 sistar at : ayurvedic therapy", path: "sistar-at", items: [] },
        { title: "🔸 sistar ei : edu", path: "sistar-ei", items: ["🔹 edu institute, knowledge to flex", "🔹 flexkids ai"] },
        { title: "🔸 sis food", path: "sis-food", items: ["🔹 sis proteins", "🔹 java nature premium"] },
        { title: "🔸 sistar life : lifestyle goods", path: "sistar-life", items: ["🔹 lifestyle goods"] },
        { title: "🔸 sistar studio : media", path: "sistar-studio", items: ["🔹 sistar studio", "🔹 studio butter : smooth like a butter"] },
        { title: "🔸 beauty", path: "beauty", items: ["▫️ sismii"] },
        { title: "🔸 diagnostics", path: "diagnostics", items: ["▫️ sistar dx"] },
        { title: "🔸 livestock", path: "livestock", items: ["▫️ sispharm"] },
        { title: "🔸 apparel", path: "apparel", items: ["▫️ sisloa"] }
      ]
    },
    {
      title: "🔺 biz-hub", repo: "biz-hub",
      children: [
        { title: "🔸 sistar & co : connect - innovate", path: "sistar-and-co", items: ["🔹 petfood bank"] },
        { title: "🔸 sistar br : brands", path: "sistar-br", items: ["🔹 Sistar br : co-branding"] },
        { title: "🔸 int’l tech trading", path: "intl-tech-trading", items: [] },
        { title: "🔸 int’l data factory", path: "intl-data-factory", items: [] },
        { title: "🔸 biz campaigns", path: "biz-campaigns", items: ["▫️ Zero-wastage movement"] },
        { title: "🔸 sistar frenz : franchise", path: "sistar-frenz", items: ["🔹 sistar m.i.n.t. colored shop", "🔹 suu", "🔹 iruka is back", "🔹 sistar l/p: my neighbour lifestyle platform"] },
        { title: "🔸 n.f.q", path: "nfq", items: ["▫️ sistar solutions"] }
      ]
    }
  ];

  function toSlug(str) {
    return str.replace(/^[^a-zA-Z0-9&]+/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'item';
  }

  function buildNavigator() {
    if (document.getElementById('sc-left-nav')) return;
    document.body.classList.add('sc-nav-open');

    const nav = document.createElement('aside');
    nav.id = 'sc-left-nav';

    const searchIndex = [];
    let treeHtml = '';

    MENU_STRUCTURE.forEach(l1 => {
      const l1Url = resolveUrl(l1.repo, '');
      searchIndex.push({ title: l1.title, path: '1st Level Domain', url: l1Url });

      let l2Html = '';
      l1.children.forEach(l2 => {
        const l2Url = resolveUrl(l1.repo, l2.path);
        searchIndex.push({ title: l2.title, path: l1.title, url: l2Url });

        let l3Html = '';
        if (l2.items && l2.items.length > 0) {
          l3Html = `<div class="sc-l3-wrap"><div class="sc-l3-inner">` +
            l2.items.map(it => {
              const slug = toSlug(it);
              const l3Url = resolveUrl(l1.repo, `${l2.path}/${slug}`);
              searchIndex.push({ title: it, path: `${l1.title} > ${l2.title}`, url: l3Url });
              return `<a class="sc-l3-link" href="${l3Url}">${it}</a>`;
            }).join('') +
            `</div></div>`;
        }

        l2Html += `
          <div class="sc-l2-item">
            <a class="sc-l2-link" href="${l2Url}">${l2.title}</a>
            ${l3Html}
          </div>`;
      });

      treeHtml += `
        <div class="sc-l1-item">
          <a class="sc-l1-link" href="${l1Url}">${l1.title}</a>
          <div class="sc-l2-wrap"><div class="sc-l2-inner">${l2Html}</div></div>
        </div>`;
    });

    const homeUrl = resolveUrl('sc-sistarcompany', '');

    nav.innerHTML = `
      <div>
        <div class="sc-nav-top">
          <a href="${homeUrl}" class="sc-brand-link">
            <span class="sc-brand-full">*sc - sistarcompany</span>
            <span class="sc-brand-short">*sc</span>
          </a>
          <div class="sc-nav-actions">
            <button class="sc-plain-btn sc-search-btn" id="sc-search-btn" title="Search">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><line x1="20" y1="20" x2="16.2" y2="16.2"></line></svg>
            </button>
            <button class="sc-plain-btn" id="sc-fold-btn" title="Toggle Menu">
              <svg viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>
        <div class="sc-search-wrap" id="sc-search-wrap">
          <input type="text" class="sc-search-input" id="sc-search-input" placeholder="Search universe..." autocomplete="off" />
          <div class="sc-search-dropdown" id="sc-search-dropdown"></div>
        </div>
      </div>

      <div class="sc-nav-scroll" id="sc-nav-scroll">${treeHtml}</div>

      <div class="sc-nav-bottom">
        <div class="sc-copy-toast" id="sc-copy-toast">Copied: sc@sistarcompany.com</div>
        <button class="sc-mono-icon" id="sc-copy-email" title="Copy sc@sistarcompany.com">
          <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
        </button>
        <div class="sc-social-group">
          <a class="sc-mono-icon" href="https://youtube.com" target="_blank" rel="noopener" title="YouTube">
            <svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4"></rect><polygon points="10 9 15 12 10 15 10 9"></polygon></svg>
          </a>
          <a class="sc-mono-icon" href="https://instagram.com" target="_blank" rel="noopener" title="Instagram">
            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a class="sc-mono-icon" href="https://x.com" target="_blank" rel="noopener" title="X">
            <svg viewBox="0 0 24 24"><path d="M4 4l16 16M20 4L4 20"></path></svg>
          </a>
          <a class="sc-mono-icon" href="https://threads.net" target="_blank" rel="noopener" title="Threads">
            <svg viewBox="0 0 24 24"><path d="M12 12c-2-2.5-5-2.5-5 0s3 2.5 5 0c2 2.5 5 2.5 5 0s-3-2.5-5 0z"></path><circle cx="12" cy="12" r="9"></circle></svg>
          </a>
        </div>
      </div>
    `;

    document.body.prepend(nav);

    /* ============================================================
       HOVER INTENT ENGINE (220ms Open Delay + Smooth Cross-Transition)
       ============================================================ */
    const OPEN_DELAY = 480;  // Wait 220ms before opening (ignores fast cursor pass-by)
    const CLOSE_DELAY = 420; // Grace period before closing when cursor leaves

    const l1Items = nav.querySelectorAll('.sc-l1-item');
    let l1OpenTimer = null;
    let l1CloseTimer = null;

    l1Items.forEach(item => {
      item.addEventListener('mouseenter', () => {
        clearTimeout(l1CloseTimer);
        clearTimeout(l1OpenTimer);
        l1OpenTimer = setTimeout(() => {
          l1Items.forEach(other => {
            if (other !== item) {
              other.classList.remove('is-open');
              other.querySelectorAll('.sc-l2-item.is-open').forEach(sub => sub.classList.remove('is-open'));
            }
          });
          item.classList.add('is-open');
        }, OPEN_DELAY);
      });

      item.addEventListener('mouseleave', () => {
        clearTimeout(l1OpenTimer);
        l1CloseTimer = setTimeout(() => {
          item.classList.remove('is-open');
          item.querySelectorAll('.sc-l2-item.is-open').forEach(sub => sub.classList.remove('is-open'));
        }, CLOSE_DELAY);
      });
    });

    const l2Items = nav.querySelectorAll('.sc-l2-item');
    let l2OpenTimer = null;
    let l2CloseTimer = null;

    l2Items.forEach(item => {
      item.addEventListener('mouseenter', () => {
        clearTimeout(l2CloseTimer);
        clearTimeout(l2OpenTimer);
        l2OpenTimer = setTimeout(() => {
          const siblings = item.parentElement.querySelectorAll('.sc-l2-item');
          siblings.forEach(sib => {
            if (sib !== item) sib.classList.remove('is-open');
          });
          item.classList.add('is-open');
        }, 380);
      });

      item.addEventListener('mouseleave', () => {
        clearTimeout(l2OpenTimer);
        l2CloseTimer = setTimeout(() => {
          item.classList.remove('is-open');
        }, 350);
      });
    });

    // Fold / Unfold toggle
    document.getElementById('sc-fold-btn').addEventListener('click', () => {
      const folded = document.body.classList.toggle('sc-nav-folded');
      document.body.classList.toggle('sc-nav-open', !folded);
    });

    // Search toggle & live dropdown
    const searchWrap = document.getElementById('sc-search-wrap');
    const searchInput = document.getElementById('sc-search-input');
    const searchDropdown = document.getElementById('sc-search-dropdown');

    document.getElementById('sc-search-btn').addEventListener('click', () => {
      searchWrap.classList.toggle('active');
      if (searchWrap.classList.contains('active')) searchInput.focus();
      else searchDropdown.classList.remove('show');
    });

    searchInput.addEventListener('input', e => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        searchDropdown.classList.remove('show');
        return;
      }
      const matches = searchIndex.filter(it =>
        it.title.toLowerCase().includes(q) || it.path.toLowerCase().includes(q)
      );
      searchDropdown.innerHTML = matches.length
        ? matches.map(m => `<a class="sc-search-item" href="${m.url}"><span class="sc-search-item-t">${m.title}</span><span class="sc-search-item-p">${m.path}</span></a>`).join('')
        : `<div class="sc-search-item"><span class="sc-search-item-p">No matching results</span></div>`;
      searchDropdown.classList.add('show');
    });

    document.addEventListener('click', e => {
      if (!searchWrap.contains(e.target) && e.target.id !== 'sc-search-btn') {
        searchDropdown.classList.remove('show');
      }
    });

    document.getElementById('sc-copy-email').addEventListener('click', () => {
      navigator.clipboard.writeText('sc@sistarcompany.com').catch(() => {});
      const toast = document.getElementById('sc-copy-toast');
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2000);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildNavigator);
  } else {
    buildNavigator();
  }
})();
